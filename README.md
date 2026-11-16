# REST API Data Mahasiswa

Aplikasi backend sederhana dengan Node.js dan Express.js untuk mengelola data mahasiswa (CRUD). Data disimpan di array tanpa database.

## Cara Menjalankan

```
npm install
node app.js
```

Server berjalan di http://localhost:3000

## Struktur Project

```
project-pbf/
├── models/mahasiswaModel.js
├── controllers/mahasiswaController.js
├── routes/mahasiswaRoutes.js
├── app.js
└── package.json
```

## Daftar Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | /api/mahasiswa | Menampilkan semua mahasiswa |
| GET | /api/mahasiswa/:id | Menampilkan detail mahasiswa |
| POST | /api/mahasiswa | Menambahkan mahasiswa |
| PUT | /api/mahasiswa/:id | Mengubah mahasiswa |
| DELETE | /api/mahasiswa/:id | Menghapus mahasiswa |

## Contoh Body (POST dan PUT)

```json
{
  "nim": "2026003",
  "nama": "Citra",
  "prodi": "Teknik Informatika"
}
```

## Contoh Response Sukses (201)

```json
{
  "success": true,
  "message": "Data berhasil ditambahkan",
  "data": {
    "id": 3,
    "nim": "2026003",
    "nama": "Citra",
    "prodi": "Teknik Informatika"
  }
}
```

## Contoh Response Gagal (404)

```json
{
  "success": false,
  "message": "Data mahasiswa tidak ditemukan"
}
```