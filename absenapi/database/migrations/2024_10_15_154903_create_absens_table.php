<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('absens', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_pengguna'); // ID pengguna
            $table->date('tanggal_absen'); // Tanggal kehadiran
            $table->time('waktu_masuk'); // Waktu masuk
            $table->time('waktu_keluar')->nullable(); // Waktu keluar (opsional)
            $table->string('catatan')->nullable(); // Catatan tambahan
            $table->string('judul_buku')->nullable(); // Judul buku yang dipinjam
            $table->date('tanggal_pinjam')->nullable(); // Tanggal peminjaman
            $table->date('tanggal_kembali')->nullable(); // Tanggal pengembalian
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('absens');
    }
};
