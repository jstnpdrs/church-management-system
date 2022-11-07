<?php

use App\Http\Controllers\BaptismController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use app\Models\User;
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
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
   return Redirect::route('baptism.index');
});

Route::get('/dashboard', function () {
    // return Inertia::render('Dashboard',[
    //     'users' => User::all(),
    //     // 'users' => Auth::user()
    // ]);
   return Redirect::route('baptism.index');

})->middleware(['auth', 'verified'])->name('dashboard');
Route::resource('baptism', BaptismController::class)->middleware(['auth', 'verified']);
// Route::get('/baptism', function () {
//     return Inertia::render('Baptism');
// })->middleware(['auth', 'verified'])->name('baptism');

Route::get('/confirmation', function () {
    return Inertia::render('Confirmation');
})->middleware(['auth', 'verified'])->name('confirmation');

require __DIR__.'/auth.php';
