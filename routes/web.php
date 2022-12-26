<?php

use App\Http\Controllers\BaptismController;
use App\Http\Controllers\ConfirmationController;
use App\Http\Controllers\DeathController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
   return Redirect::route('baptism.index');
});

Route::get('/dashboard', function () {
   return Redirect::route('baptism.index');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::resource('baptism', BaptismController::class)->middleware(['auth', 'verified']);
Route::resource('confirmation', ConfirmationController::class)->middleware(['auth', 'verified']);
Route::resource('death', DeathController::class)->middleware(['auth', 'verified']);
Route::get('/create-user', function () {
    return Inertia::render('Auth/Register');
})->middleware(['auth', 'verified'])->name('create-user');
Route::get('/register', [RegisteredUserController::class,'create'])->middleware(['auth', 'verified'])->name('register');
require __DIR__.'/auth.php';
