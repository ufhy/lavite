<?php

namespace App\Actions\Fortify;

use Laravel\Fortify\Contracts\PasswordUpdateResponse as PasswordUpdateResponseContract;

class PasswordUpdateResponse implements PasswordUpdateResponseContract
{
    public function toResponse($request)
    {
        if ($request->wantsJson()) {
            return response()->json([
                'message' => 'Update password successfully'
            ]);
        }
    }
}
