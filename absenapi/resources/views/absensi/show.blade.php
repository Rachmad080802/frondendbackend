<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Detail Absensi - Aplikasi Peminjaman Buku</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body style="background: lightgray">

    <div class="container mt-5">
        <h3 class="text-center">Detail Absensi</h3>
        <div class="card border-0 shadow-sm rounded">
            <div class="card-body">
                <p><strong>ID Pengguna:</strong> {{ $absen->id_pengguna }}</p>
                <p><strong>Tanggal Absen:</strong> {{ \Carbon\Carbon::parse($absen->tanggal_absen)->format('d-m-Y') }}</p>
                <p><strong>Waktu Masuk:</strong> {{ $absen->waktu_masuk }}</p>
                <p><strong>Waktu Keluar:</strong> {{ $absen->waktu_keluar ?? '-' }}</p>
                <p><strong>Catatan:</strong> {{ $absen->catatan ?? '-' }}</p>
                <p><strong>Judul Buku:</strong> {{ $absen->judul_buku ?? '-' }}</p>
                <p><strong>Tanggal Pinjam:</strong> {{ $absen->tanggal_pinjam ? \Carbon\Carbon::parse($absen->tanggal_pinjam)->format('d-m-Y') : '-' }}</p>
                <p><strong>Tanggal Kembali:</strong> {{ $absen->tanggal_kembali ? \Carbon\Carbon::parse($absen->tanggal_kembali)->format('d-m-Y') : '-' }}</p>
                
                <div class="text-center mt-4">
                    <a href="{{ route('absensi.index') }}" class="btn btn-primary">Kembali ke Daftar Absensi</a>
                    <a href="{{ route('absensi.edit', $absen->id) }}" class="btn btn-warning">Edit Data Absensi</a>
                    <form action="{{ route('absensi.destroy', $absen->id) }}" method="POST" class="d-inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger" onclick="return confirm('Apakah Anda yakin ingin menghapus data ini?');">Hapus Data Absensi</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
