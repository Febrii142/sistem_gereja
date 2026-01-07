// Page content templates
const pages = {
    dashboard: {
        title: 'Dashboard Utama',
        content: `
            <div class="stats-grid">
                <div class="stat-card primary">
                    <h3>Total Jemaat</h3>
                    <div class="number">1,234</div>
                </div>
                <div class="stat-card success">
                    <h3>Hadir Minggu Ini</h3>
                    <div class="number">856</div>
                </div>
                <div class="stat-card warning">
                    <h3>Kegiatan Bulan Ini</h3>
                    <div class="number">12</div>
                </div>
                <div class="stat-card info">
                    <h3>Persembahan Bulan Ini</h3>
                    <div class="number">Rp 45,5 Jt</div>
                </div>
            </div>
            
            <div class="card">
                <h3>Kegiatan Mendatang</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Tanggal</th>
                            <th>Kegiatan</th>
                            <th>Waktu</th>
                            <th>Lokasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>14 Jan 2026</td>
                            <td>Ibadah Minggu</td>
                            <td>08:00 - 10:00</td>
                            <td>Gedung Utama</td>
                        </tr>
                        <tr>
                            <td>17 Jan 2026</td>
                            <td>Persekutuan Pemuda</td>
                            <td>19:00 - 21:00</td>
                            <td>Ruang Pemuda</td>
                        </tr>
                        <tr>
                            <td>21 Jan 2026</td>
                            <td>Ibadah Minggu</td>
                            <td>08:00 - 10:00</td>
                            <td>Gedung Utama</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    jemaat: {
        title: 'Manajemen Data Jemaat',
        content: `
            <div class="card">
                <h3>Data Jemaat</h3>
                <div style="margin-bottom: 20px;">
                    <button class="btn btn-primary">+ Tambah Jemaat Baru</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Lengkap</th>
                                <th>Jenis Kelamin</th>
                                <th>Tanggal Lahir</th>
                                <th>Alamat</th>
                                <th>No. Telepon</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Budi Santoso</td>
                                <td>Laki-laki</td>
                                <td>15/03/1985</td>
                                <td>Jl. Merdeka No. 123</td>
                                <td>081234567890</td>
                                <td>Aktif</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Siti Aminah</td>
                                <td>Perempuan</td>
                                <td>22/07/1990</td>
                                <td>Jl. Sudirman No. 45</td>
                                <td>081298765432</td>
                                <td>Aktif</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ahmad Wijaya</td>
                                <td>Laki-laki</td>
                                <td>10/11/1978</td>
                                <td>Jl. Gatot Subroto No. 78</td>
                                <td>081356789012</td>
                                <td>Aktif</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    jadwal: {
        title: 'Jadwal Ibadah dan Kegiatan',
        content: `
            <div class="card">
                <h3>Jadwal Kegiatan</h3>
                <div style="margin-bottom: 20px;">
                    <button class="btn btn-primary">+ Tambah Jadwal Baru</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Hari/Tanggal</th>
                                <th>Jenis Kegiatan</th>
                                <th>Waktu</th>
                                <th>Pembicara/PIC</th>
                                <th>Lokasi</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Minggu, 14 Jan 2026</td>
                                <td>Ibadah Minggu</td>
                                <td>08:00 - 10:00</td>
                                <td>Pdt. Yohanes</td>
                                <td>Gedung Utama</td>
                                <td>Tema: Kasih Tuhan</td>
                            </tr>
                            <tr>
                                <td>Rabu, 17 Jan 2026</td>
                                <td>Persekutuan Pemuda</td>
                                <td>19:00 - 21:00</td>
                                <td>Tim Pemuda</td>
                                <td>Ruang Pemuda</td>
                                <td>Diskusi & Sharing</td>
                            </tr>
                            <tr>
                                <td>Kamis, 18 Jan 2026</td>
                                <td>Doa Pagi</td>
                                <td>05:30 - 06:30</td>
                                <td>Tim Intercessor</td>
                                <td>Kapel</td>
                                <td>Doa Syafaat</td>
                            </tr>
                            <tr>
                                <td>Minggu, 21 Jan 2026</td>
                                <td>Ibadah Minggu</td>
                                <td>08:00 - 10:00</td>
                                <td>Pdt. Maria</td>
                                <td>Gedung Utama</td>
                                <td>Tema: Iman Sejati</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    keuangan: {
        title: 'Keuangan dan Persembahan',
        content: `
            <div class="stats-grid">
                <div class="stat-card success">
                    <h3>Pemasukan Bulan Ini</h3>
                    <div class="number">Rp 45,5 Jt</div>
                </div>
                <div class="stat-card warning">
                    <h3>Pengeluaran Bulan Ini</h3>
                    <div class="number">Rp 32,8 Jt</div>
                </div>
                <div class="stat-card primary">
                    <h3>Saldo</h3>
                    <div class="number">Rp 12,7 Jt</div>
                </div>
            </div>

            <div class="card">
                <h3>Riwayat Transaksi</h3>
                <div style="margin-bottom: 20px;">
                    <button class="btn btn-success">+ Catat Pemasukan</button>
                    <button class="btn btn-primary" style="margin-left: 10px;">+ Catat Pengeluaran</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Tanggal</th>
                                <th>Jenis</th>
                                <th>Kategori</th>
                                <th>Keterangan</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>14 Jan 2026</td>
                                <td>Pemasukan</td>
                                <td>Persembahan Ibadah</td>
                                <td>Persembahan Minggu</td>
                                <td style="color: #2ecc71;">+ Rp 15,500,000</td>
                            </tr>
                            <tr>
                                <td>13 Jan 2026</td>
                                <td>Pengeluaran</td>
                                <td>Operasional</td>
                                <td>Listrik & Air</td>
                                <td style="color: #e74c3c;">- Rp 2,500,000</td>
                            </tr>
                            <tr>
                                <td>12 Jan 2026</td>
                                <td>Pengeluaran</td>
                                <td>Pemeliharaan</td>
                                <td>Perbaikan AC</td>
                                <td style="color: #e74c3c;">- Rp 3,800,000</td>
                            </tr>
                            <tr>
                                <td>07 Jan 2026</td>
                                <td>Pemasukan</td>
                                <td>Persembahan Ibadah</td>
                                <td>Persembahan Minggu</td>
                                <td style="color: #2ecc71;">+ Rp 14,200,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load default page (dashboard)
    loadPage('dashboard');

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Load the selected page
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });
});

// Function to load page content
function loadPage(pageName) {
    const page = pages[pageName];
    if (page) {
        document.getElementById('page-title').textContent = page.title;
        document.getElementById('content-area').innerHTML = page.content;
    }
}
