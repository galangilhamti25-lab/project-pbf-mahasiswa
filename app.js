const express = require("express");
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");

const app = express();
const PORT = 3000;

// Agar server bisa membaca body request berformat JSON
app.use(express.json());

// Semua endpoint mahasiswa diawali /api/mahasiswa
app.use("/api/mahasiswa", mahasiswaRoutes);

// Jika alamat tidak dikenal
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint tidak ditemukan",
  });
});

app.listen(PORT, () => {
  console.log("Server berjalan di http://localhost:" + PORT);
});