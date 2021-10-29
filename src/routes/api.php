<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/hello', function () {
    return "world";
});

Route::get('/topics', [
    App\Http\Controllers\TopicController::class,
    'index'
]);

Route::post('/register', [ App\Http\Controllers\WUserController::class, 'store']);

Route::post('/guest', [ App\Http\Controllers\GuestController::class, 'guest_store']);

Route::get('/getdate', [ App\Http\Controllers\GuestController::class, 'show']);
