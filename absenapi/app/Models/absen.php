<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class absen extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'id_pengguna',
        'tanggal_absen',
        'waktu_masuk',
        'waktu_keluar',
        'catatan',
        'judul_buku',        
        'tanggal_pinjam',     
        'tanggal_kembali', 
    ];
}
