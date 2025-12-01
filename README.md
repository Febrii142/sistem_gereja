# Sistem Pengolahan Data Gereja

Mockup UI/UX lengkap untuk sistem pengolahan data gereja dengan fitur manajemen jemaat, jadwal kegiatan, dan keuangan.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Deskripsi

Sistem Pengolahan Data Gereja adalah mockup UI/UX modern dan responsif yang dirancang untuk membantu gereja dalam mengelola data jemaat, jadwal ibadah/kegiatan, serta keuangan (persembahan dan pengeluaran). Mockup ini dapat digunakan sebagai referensi untuk pengembangan aplikasi sesungguhnya.

## ✨ Fitur

### 1. Dashboard Utama
- Overview statistik jemaat (total anggota, anggota aktif, anggota baru)
- Ringkasan keuangan (pemasukan, pengeluaran, saldo)
- Jadwal kegiatan terdekat
- Grafik visualisasi data dengan Chart.js
- Quick actions untuk akses cepat
- Greeting message dengan waktu real-time

### 2. Manajemen Data Jemaat
- Daftar jemaat dengan pencarian dan filter
- Form tambah/edit data jemaat lengkap
- Detail profil jemaat dengan informasi lengkap
- Riwayat kehadiran ibadah
- Status keanggotaan (aktif/tidak aktif)

### 3. Jadwal Ibadah dan Kegiatan
- Kalender kegiatan interaktif
- Daftar jadwal ibadah (minggu, doa, pemuda, anak, dll)
- Form tambah/edit jadwal kegiatan
- Kategori kegiatan dengan warna berbeda

### 4. Keuangan/Persembahan
- Dashboard keuangan dengan ringkasan
- Daftar transaksi dengan filter
- Form pencatatan persembahan (perpuluhan, syukur, misi, dll)
- Form pencatatan pengeluaran
- Laporan keuangan bulanan/tahunan dengan print option
- Grafik pemasukan vs pengeluaran

## 🛠️ Tech Stack

- **HTML5** - Struktur semantic
- **CSS3** - Custom styling dengan CSS Variables
- **JavaScript** - Vanilla JS untuk interaktivitas
- **Bootstrap 5.3** - Grid system dan komponen UI
- **Font Awesome 6** - Icons
- **Chart.js 4.x** - Visualisasi data grafik
- **Google Fonts (Inter)** - Typography

## 📁 Struktur Folder

```
sistem_gereja/
├── index.html                      # Dashboard utama
├── pages/
│   ├── login.html                  # Halaman login
│   ├── jemaat/
│   │   ├── list.html               # Daftar jemaat
│   │   ├── form.html               # Form tambah/edit jemaat
│   │   └── detail.html             # Detail profil jemaat
│   ├── jadwal/
│   │   ├── calendar.html           # Kalender kegiatan
│   │   ├── list.html               # Daftar jadwal
│   │   └── form.html               # Form tambah/edit jadwal
│   └── keuangan/
│       ├── dashboard.html          # Dashboard keuangan
│       ├── transaksi.html          # Daftar transaksi
│       ├── form-pemasukan.html     # Form persembahan/pemasukan
│       ├── form-pengeluaran.html   # Form pengeluaran
│       └── laporan.html            # Laporan keuangan
├── css/
│   └── style.css                   # Stylesheet utama
├── js/
│   ├── main.js                     # JavaScript interaktivitas
│   └── chart-data.js               # Konfigurasi Chart.js
├── assets/
│   ├── images/
│   │   └── logo.svg                # Logo gereja
│   └── avatars/                    # Folder foto profil
└── README.md                       # Dokumentasi
```

## 🚀 Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone https://github.com/Febrii142/sistem_gereja.git
   cd sistem_gereja
   ```

2. **Buka di browser**
   - Buka file `index.html` langsung di browser, atau
   - Gunakan Live Server di VS Code, atau
   - Jalankan local server:
     ```bash
     # Menggunakan Python
     python -m http.server 8000
     
     # Atau menggunakan Node.js
     npx serve
     ```

3. **Akses aplikasi**
   - Buka `http://localhost:8000` di browser

**Tidak perlu instalasi npm atau dependencies lainnya!** Semua library dimuat via CDN.

## 🔐 Kredensial Login (Mockup)

Untuk mengakses dashboard, gunakan kredensial berikut:

| Field    | Value     |
|----------|-----------|
| Username | `admin`   |
| Password | `admin123`|

## 🎨 Color Scheme

| Warna     | Kode Hex  | Penggunaan           |
|-----------|-----------|----------------------|
| Primary   | `#4A90E2` | Elemen utama, link   |
| Secondary | `#50C878` | Success, pemasukan   |
| Accent    | `#9B59B6` | Highlight            |
| Warning   | `#F39C12` | Peringatan           |
| Danger    | `#E74C3C` | Error, pengeluaran   |
| Background| `#F8F9FA` | Latar belakang       |
| Text      | `#333333` | Teks utama           |

## 📱 Responsive Design

Mockup ini mendukung tampilan responsive untuk:
- **Desktop** (≥992px) - Full sidebar, semua fitur terlihat
- **Tablet** (768px - 991px) - Sidebar lebih kecil
- **Mobile** (<768px) - Sidebar collapse menjadi hamburger menu

## 📊 Dummy Data

Mockup ini menyertakan dummy data realistis dalam Bahasa Indonesia:

- **Jemaat**: 10+ data anggota dengan nama Indonesia
- **Jadwal**: 9+ kegiatan untuk bulan Desember 2024
- **Transaksi**: 20+ transaksi keuangan (pemasukan & pengeluaran)
- **Statistik**: Data untuk dashboard dan grafik

## 📸 Screenshot

### Dashboard Utama
Dashboard menampilkan overview statistik, grafik keuangan, kegiatan terdekat, dan transaksi terbaru.

### Daftar Jemaat
Tabel data jemaat dengan fitur pencarian, filter, dan pagination.

### Kalender Kegiatan
Tampilan kalender interaktif dengan event yang ditandai warna sesuai kategori.

### Dashboard Keuangan
Ringkasan keuangan dengan chart pemasukan vs pengeluaran.

### Laporan Keuangan
Laporan lengkap yang siap cetak dengan rincian pemasukan dan pengeluaran.

## 🔧 Pengembangan Selanjutnya

Untuk implementasi backend, disarankan menggunakan:

### Backend
- **PHP + Laravel** atau **Node.js + Express**
- **MySQL** atau **PostgreSQL** untuk database
- **RESTful API** untuk komunikasi frontend-backend

### Fitur Tambahan
- Authentication & Authorization (JWT/Session)
- Upload foto profil jemaat
- Export data ke Excel/PDF
- Notifikasi email/SMS
- Multi-user dengan role management
- Backup database otomatis
- Integrasi dengan aplikasi absensi

### Database Schema (Saran)
```sql
-- Tabel Users (Admin)
-- Tabel Jemaat
-- Tabel Jadwal Kegiatan
-- Tabel Kehadiran
-- Tabel Transaksi Keuangan
-- Tabel Kategori
```

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 Sistem Pengolahan Data Gereja

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👥 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau issue jika menemukan bug atau ingin menambahkan fitur baru.

## 📞 Kontak

Untuk pertanyaan atau masukan, silakan buat issue di repository ini.

---

**Dibuat dengan ❤️ untuk membantu gereja dalam pengelolaan data**
