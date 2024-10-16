<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AbsenController;

// Route untuk halaman depan
Route::get('/', function () {
    return view('welcome');
});

// Route resource untuk absensi
Route::resource('/absensi', AbsenController::class);

// Rute khusus untuk reset semua data absensi
Route::get('/absensi/reset', [AbsenController::class, 'reset'])->name('absensi.reset');
