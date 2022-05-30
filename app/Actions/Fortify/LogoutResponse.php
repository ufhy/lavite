<?php

namespace App\Actions\Fortify;

use Laravel\Fortify\Contracts\LogoutResponse as LogoutResponseContract;

class LogoutResponse implements LogoutResponseContract
{
    public function toResponse($request)
    {
        if ($request->wantsJson()) {
            return response()->json([
                'redirect_url' => url('/')
            ]);
        }

        return redirect()->intended();
    }
}
