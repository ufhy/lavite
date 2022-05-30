<?php

namespace App\Helpers;

class ViteHelper
{
    protected static $manifest = [];

    protected static $distFolder = 'dist-vt';

    private static function url($path)
    {
        return url(self::$distFolder . '/' . $path, []);
    }

    /**
     * @param array $imports
     * @param string $rel
     * @return array
     */
    private static function preloadAsset($imports, $rel = 'modulepreload')
    {
        $preload = [];
        foreach ($imports as $import) {
            if (!in_array($import, $preload)) {
                if ($rel === 'modulepreload') {
                    $file = self::$manifest[$import]['file'];
                }
                else {
                    $file = $import;
                }

                array_push($preload, '<link rel="'. $rel .'" href="'. self::url($file) .'">');
            }
        }

        return $preload;
    }

    /**
     * @param string $indexHtml
     * @param string $distPublicFolder
     * @return string
     * @throws \Exception
     */
    public static function asset($indexHtml, $distPublicFolder = 'dist-vt')
    {
        $manifestPath = public_path($distPublicFolder . '/manifest.json');
        if (! file_exists($manifestPath)) {
            throw new \Exception('Vite manifest does not exist.');
        }

        self::$distFolder = $distPublicFolder;
        self::$manifest = json_decode(file_get_contents($manifestPath), true);

        if (!isset(self::$manifest[$indexHtml])) {
            throw new \Exception('Property ' . $indexHtml . ' doesnt exist in manifest.json');
        }

        $scriptModule = [
            '<script type="module" src="' . self::url(self::$manifest[$indexHtml]['file']) . '"></script>'
        ];

        $scriptPreload = [];
        if (isset(self::$manifest[$indexHtml]['imports'])) {
            $scriptPreload = self::preloadAsset(self::$manifest[$indexHtml]['imports']);
        }

        $cssPreload = [];
        if (isset(self::$manifest[$indexHtml]['css'])) {
            $cssPreload = self::preloadAsset(self::$manifest[$indexHtml]['css'], 'stylesheet');
        }

        // load css from script preload
        if (isset(self::$manifest[$indexHtml]['imports'])) {
            foreach (self::$manifest[$indexHtml]['imports'] as $import) {
                if (isset(self::$manifest[$import]['css'])) {
                    $cssPreload = self::preloadAsset(self::$manifest[$import]['css'], 'stylesheet');
                }
            }
        }

        return implode(' ', array_merge($scriptModule, $scriptPreload, $cssPreload));
    }

    static function assetDev($mainFile)
    {
        $url = 'http://localhost:3000';
        if (file_exists(public_path('hot'))) {
            $url = rtrim(file_get_contents(public_path('hot')));
        }

        $script = [
            '<script type="module" src="'. $url .'/@vite/client"></script>',
            '<script type="module" src="'. $url .'/' . $mainFile . '"></script>'
        ];

        return implode(' ', $script);
    }

}
