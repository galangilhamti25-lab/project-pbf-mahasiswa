// Data sementara disimpan di array (tanpa database)
let mahasiswa = [
  {
    id: 1,
    nim: "2026001",
    nama: "Andi Saputra",
    prodi: "Teknik Informatika",
  },
  {
    id: 2,
    nim: "2026002",
    nama: "Budi Santoso",
    prodi: "Sistem Informasi",
  },
];

// Penghitung id supaya id tidak bentrok setelah ada data yang dihapus
let idBerikutnya = 3;

function getAll() {
  return mahasiswa;
}

function getById(id) {
  return mahasiswa.find((item) => item.id === id);
}

function create(dataBaru) {
  const item = { id: idBerikutnya++, ...dataBaru };
  mahasiswa.push(item);
  return item;
}

function update(id, dataBaru) {
  const index = mahasiswa.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  mahasiswa[index] = { ...mahasiswa[index], ...dataBaru, id: id };
  return mahasiswa[index];
}

function remove(id) {
  const index = mahasiswa.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const dihapus = mahasiswa.splice(index, 1);
  return dihapus[0];
}

module.exports = { getAll, getById, create, update, remove };