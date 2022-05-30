<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;300;400;500;600;700;900&display=swap" rel="stylesheet">

        <script>
            if (typeof(LAVITE) === "undefined") {
                var LAVITE = {};
            }

            LAVITE.version = "{{ Illuminate\Foundation\Application::VERSION }}";
            LAVITE.hasLogin = @json(\Illuminate\Support\Facades\Route::has('login'));
            LAVITE.hasRegister = @json(\Illuminate\Support\Facades\Route::has('register'));
            LAVITE.hasResetPassword = @json(\Illuminate\Support\Facades\Route::has('password.request'));
            LAVITE.hasEmailVerification = @json(\Illuminate\Support\Facades\Route::has('verification.notice'));
            @auth
                LAVITE.user = @json(app()->get('user_info'));
            @endauth
        </script>
    </head>
    <body>
        <noscript>
            <strong>
                We're sorry but client doesn't work properly without JavaScript enabled. Please enable it to
                continue.
            </strong>
        </noscript>

        <div id="lavite"></div>

        @env('local')
            {!! \App\Helpers\ViteHelper::assetDev('src/main.ts') !!}
        @endenv
    </body>
</html>
