<?php

use Illuminate\Support\Facades\Route;
use Itsmattch\NexusHeadless\Facades\Nexus;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Nexus::routes();

Route::any('{any}', function () {
    return response()->json([
        'message' => 'The requested resource or HTTP method is not supported.',
        'errors' => [
            'general' => [
                'The requested resource or HTTP method is not supported.'
            ]
        ]
    ], 404);
})->where('any', '.*');
