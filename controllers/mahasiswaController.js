const mahasiswaModel = require("../models/mahasiswaModel");

// GET /api/mahasiswa
function getAllMahasiswa(req, res) {
  const data = mahasiswaModel.getAll();
  res.status(200).json({
    success: true,
    message: "Data mahasiswa berhasil ditampilkan",
    data: data,
  });
}

// GET /api/mahasiswa/:id
function getMahasiswaById(req, res) {
  const id = parseInt(req.params.id);
  const data = mahasiswaModel.getById(id);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Data mahasiswa tidak ditemukan",
    });
  }

  res.status(200).json({
    success: true,
    message: "Detail mahasiswa berhasil ditampilkan",
    data: data,
  });
}

// POST /api/mahasiswa
function createMahasiswa(req, res) {
  const { nim, nama, prodi } = req.body;

  if (!nim || !nama || !prodi) {
    return res.status(400).json({
      success: false,
      message: "Field nim, nama, dan prodi wajib diisi",
    });
  }

  const data = mahasiswaModel.create({ nim, nama, prodi });

  res.status(201).json({
    success: true,
    message: "Data berhasil ditambahkan",
    data: data,
  });
}

// PUT /api/mahasiswa/:id
function updateMahasiswa(req, res) {
  const id = parseInt(req.params.id);
  const { nim, nama, prodi } = req.body;

  if (!nim || !nama || !prodi) {
    return res.status(400).json({
      success: false,
      message: "Field nim, nama, dan prodi wajib diisi",
    });
  }

  const data = mahasiswaModel.update(id, { nim, nama, prodi });

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Data mahasiswa tidak ditemukan",
    });
  }

  res.status(200).json({
    success: true,
    message: "Data berhasil diubah",
    data: data,
  });
}

// DELETE /api/mahasiswa/:id
function deleteMahasiswa(req, res) {
  const id = parseInt(req.params.id);
  const data = mahasiswaModel.remove(id);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Data mahasiswa tidak ditemukan",
    });
  }

  res.status(200).json({
    success: true,
    message: "Data berhasil dihapus",
    data: data,
  });
}

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};