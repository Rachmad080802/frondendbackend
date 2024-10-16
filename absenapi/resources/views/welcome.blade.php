<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Data Absensi Perpustakaan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <div class="container mt-5">
        <h2 class="text-center mb-4">Data Absensi Perpustakaan</h2>
        <a href="{{ route('absensi.create') }}" class="btn btn-success mb-3">Tambah Absensi</a>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID Pengguna</th>
                    <th>Tanggal Absen</th>
                    <th>Waktu Masuk</th>
                    <th>Waktu Keluar</th>
                    <th>Catatan</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($absensi as $item)
                    <tr>
                        <td>{{ $item->id_pengguna }}</td>
                        <td>{{ \Carbon\Carbon::parse($item->tanggal_absen)->format('d-m-Y') }}</td>
                        <td>{{ $item->waktu_masuk }}</td>
                        <td>{{ $item->waktu_keluar ?? '-' }}</td>
                        <td>{{ $item->catatan ?? '-' }}</td>
                        <td class="text-center">
                            <form onsubmit="return confirm('Apakah Anda yakin?');" action="{{ route('absensi.destroy', $item->id) }}" method="POST">
                                <a href="{{ route('absensi.show', $item->id) }}" class="btn btn-sm btn-dark">Lihat</a>
                                <a href="{{ route('absensi.edit', $item->id) }}" class="btn btn-sm btn-primary">Edit</a>
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="text-center">Data absensi belum tersedia.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
        {{ $absensi->links() }} <!-- Paginasi -->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
