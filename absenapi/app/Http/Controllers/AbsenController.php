<?php

namespace App\Http\Controllers;

use App\Models\Absen; // Import model Absen
use Illuminate\Http\Request; // Import Http Request
use Illuminate\View\View; // Import return type View
use Illuminate\Http\RedirectResponse; // Import return type RedirectResponse

class AbsenController extends Controller
{
    /**
     * index
     *
     * @return View
     */
    public function index(): View
    {
        // Ambil semua data absensi dengan urutan terbaru dan paginasi
        $absensi = Absen::latest()->paginate(10);

        // Render view dengan data absensi
        return view('absensi.index', compact('absensi'));
    }

    /**
     * create
     *
     * @return View
     */
    public function create(): View
    {
        // Menampilkan view untuk form tambah data
        return view('absensi.create');
    }

    /**
     * store
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        // Validasi input
        $request->validate([
            'id_pengguna' => 'required|integer',
            'tanggal_absen' => 'required|date',
            'waktu_masuk' => 'required',
            'waktu_keluar' => 'nullable',
            'catatan' => 'nullable|string',
            'judul_buku' => 'nullable|string',
            'tanggal_pinjam' => 'nullable|date',
            'tanggal_kembali' => 'nullable|date',
        ]);

        // Simpan data ke database
        Absen::create($request->all());

        // Redirect dengan pesan sukses
        return redirect()->route('absensi.index')
                         ->with(['success' => 'Data absensi berhasil disimpan.']);
    }

    /**
     * show
     *
     * @param int $id
     * @return View
     */
    public function show(int $id): View
    {
        // Ambil data absensi berdasarkan ID
        $absen = Absen::findOrFail($id);
        return view('absensi.show', compact('absen')); // Pastikan view ini ada
    }

    /**
     * edit
     *
     * @param int $id
     * @return View
     */
    public function edit(int $id): View
    {
        // Cari data absensi berdasarkan ID
        $absen = Absen::findOrFail($id);

        // Tampilkan view edit dengan data absensi
        return view('absensi.edit', compact('absen'));
    }

    /**
     * update
     *
     * @param Request $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(Request $request, int $id): RedirectResponse
    {
        // Validasi input
        $request->validate([
            'id_pengguna' => 'required|integer',
            'tanggal_absen' => 'required|date',
            'waktu_masuk' => 'required',
            'waktu_keluar' => 'nullable',
            'catatan' => 'nullable|string',
            'judul_buku' => 'nullable|string',
            'tanggal_pinjam' => 'nullable|date',
            'tanggal_kembali' => 'nullable|date',
        ]);

        // Cari data absensi berdasarkan ID dan perbarui
        $absen = Absen::findOrFail($id);
        $absen->update($request->all());

        // Redirect dengan pesan sukses
        return redirect()->route('absensi.index')
                         ->with(['success' => 'Data absensi berhasil diperbarui.']);
    }

    /**
     * destroy
     *
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(int $id): RedirectResponse
    {
        // Hapus data absensi berdasarkan ID
        $absen = Absen::findOrFail($id);
        $absen->delete();

        // Redirect dengan pesan sukses
        return redirect()->route('absensi.index')
                         ->with(['success' => 'Data absensi berhasil dihapus.']);
    }

    /**
     * reset
     *
     * @return RedirectResponse
     */
    public function reset(): RedirectResponse
    {
        // Hapus semua data absensi
        Absen::truncate();

        // Redirect dengan pesan sukses
        return redirect()->route('absensi.index')
                         ->with(['success' => 'Semua data absensi berhasil direset.']);
    }
}
