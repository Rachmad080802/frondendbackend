<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Data Absensi - Aplikasi Peminjaman Buku</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body style="background: lightgray">

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <h3 class="text-center my-4">Daftar Absensi dan Peminjaman Buku</h3>
                    <hr>
                </div>
                <div class="card border-0 shadow-sm rounded">
                    <div class="card-body">
                        <a href="{{ route('absensi.create') }}" class="btn btn-md btn-success mb-3">TAMBAH ABSENSI</a>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID Pengguna</th>
                                    <th scope="col">Tanggal Absen</th>
                                    <th scope="col">Waktu Masuk</th>
                                    <th scope="col">Waktu Keluar</th>
                                    <th scope="col">Catatan</th>
                                    <th scope="col">Judul Buku</th>
                                    <th scope="col">Tanggal Pinjam</th>
                                    <th scope="col">Tanggal Kembali</th>
                                    <th scope="col" style="width: 20%">AKSI</th>
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
                                        <td>{{ $item->judul_buku ?? '-' }}</td>
                                        <td>{{ $item->tanggal_pinjam ? \Carbon\Carbon::parse($item->tanggal_pinjam)->format('d-m-Y') : '-' }}</td>
                                        <td>{{ $item->tanggal_kembali ? \Carbon\Carbon::parse($item->tanggal_kembali)->format('d-m-Y') : '-' }}</td>
                                        <td class="text-center">
                                            <form onsubmit="return confirm('Apakah Anda yakin?');" action="{{ route('absensi.destroy', $item->id) }}" method="POST">
                                                <a href="{{ route('absensi.show', $item->id) }}" class="btn btn-sm btn-dark">LIHAT</a>
                                                <a href="{{ route('absensi.edit', $item->id) }}" class="btn btn-sm btn-primary">EDIT</a>
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger">HAPUS</button>
                                            </form>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="9" class="text-center">Data Absensi belum tersedia.</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                        {{ $absensi->links() }} <!-- untuk pagination -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        // Message with sweetalert
        @if(session('success'))
            Swal.fire({
                icon: "success",
                title: "BERHASIL",
                text: "{{ session('success') }}",
                showConfirmButton: false,
                timer: 2000
            });
        @elseif(session('error'))
            Swal.fire({
                icon: "error",
                title: "GAGAL!",
                text: "{{ session('error') }}",
                showConfirmButton: false,
                timer: 2000
            });
        @endif
    </script>

</body>
</html>
