<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit Absensi - Aplikasi Peminjaman Buku</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body style="background: lightgray">

    <div class="container mt-5">
        <h3 class="text-center">Edit Data Absensi</h3>
        <div class="card border-0 shadow-sm rounded">
            <div class="card-body">
                <form action="{{ route('absensi.update', $absen->id) }}" method="POST">
                    @csrf
                    @method('PUT')

                    <div class="form-group mb-3">
                        <label class="font-weight-bold">ID Pengguna</label>
                        <input type="number" class="form-control @error('id_pengguna') is-invalid @enderror" name="id_pengguna" value="{{ old('id_pengguna', $absen->id_pengguna) }}" placeholder="Masukkan ID Pengguna" required>
                        
                        @error('id_pengguna')
                            <div class="alert alert-danger mt-2">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="form-group mb-3">
                        <label class="font-weight-bold">Tanggal Absen</label>
                        <input type="date" class="form-control @error('tanggal_absen') is-invalid @enderror" name="tanggal_absen" value="{{ old('tanggal_absen', $absen->tanggal_absen) }}" required>
                        
                        @error('tanggal_absen')
                            <div class="alert alert-danger mt-2">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="form-group mb-3">
                        <label class="font-weight-bold">Waktu Masuk</label>
                        <input type="time" class="form-control @error('waktu_masuk') is-invalid @enderror" name="waktu_masuk" value="{{ old('waktu_masuk', $absen->waktu_masuk) }}" required>
                        
                        @error('waktu_masuk')
                            <div class="alert alert-danger mt-2">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="form-group mb-3">
                        <label class="font-weight-bold">Waktu Keluar (Opsional)</label>
                        <input type="time" class="form-control @error('waktu_keluar') is-invalid @enderror" name="waktu_keluar" value="{{ old('waktu_keluar', $absen->waktu_keluar) }}">
                        
                        @error('waktu_keluar')
                            <div class="alert alert-danger mt-2">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="form-group mb-3">
                        <label class="font-weight-bold">Catatan (Opsional)</label>
                        <textarea class="form-control @error('catatan') is-invalid @enderror" name="catatan" rows="3" placeholder="Masukkan Catatan">{{ old('catatan', $absen->catatan) }}</textarea>
                        
                        @error('catatan')
                            <div class="alert alert-danger mt-2">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="form-group mb-3">
                        <label class="font-weight-bold">Judul Buku (Opsional)</label>
                        <input type="text" class="form-control @error('judul_buku') is-invalid @enderror" name="judul_buku" value="{{ old('judul_buku', $absen->judul_buku) }}" placeholder="Masukkan Judul Buku">
                        
                        @error('judul_buku')
                            <div class="alert alert-danger mt-2">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="form-group mb-3">
                        <label class="font-weight-bold">Tanggal Pinjam (Opsional)</label>
                        <input type="date" class="form-control @error('tanggal_pinjam') is-invalid @enderror" name="tanggal_pinjam" value="{{ old('tanggal_pinjam', $absen->tanggal_pinjam) }}">
                        
                        @error('tanggal_pinjam')
                            <div class="alert alert-danger mt-2">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="form-group mb-3">
                        <label class="font-weight-bold">Tanggal Kembali (Opsional)</label>
                        <input type="date" class="form-control @error('tanggal_kembali') is-invalid @enderror" name="tanggal_kembali" value="{{ old('tanggal_kembali', $absen->tanggal_kembali) }}">
                        
                        @error('tanggal_kembali')
                            <div class="alert alert-danger mt-2">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Perbarui Data</button>
                        <a href="{{ route('absensi.index') }}" class="btn btn-secondary">Kembali</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
