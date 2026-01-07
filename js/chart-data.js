/**
 * =====================================================
 * Sistem Pengolahan Data Gereja - Chart Data
 * =====================================================
 * 
 * Konfigurasi dan data untuk Chart.js
 * 
 * Charts:
 * - Line Chart: Trend pemasukan vs pengeluaran
 * - Pie Chart: Distribusi jenis persembahan
 * - Bar Chart: Kehadiran jemaat per bulan
 * - Doughnut Chart: Pengeluaran per kategori
 * 
 * =====================================================
 */

// =====================================================
// Color Palette
// =====================================================
const chartColors = {
    primary: '#4A90E2',
    primaryLight: 'rgba(74, 144, 226, 0.2)',
    secondary: '#50C878',
    secondaryLight: 'rgba(80, 200, 120, 0.2)',
    accent: '#9B59B6',
    accentLight: 'rgba(155, 89, 182, 0.2)',
    warning: '#F39C12',
    warningLight: 'rgba(243, 156, 18, 0.2)',
    danger: '#E74C3C',
    dangerLight: 'rgba(231, 76, 60, 0.2)',
    info: '#3498DB',
    infoLight: 'rgba(52, 152, 219, 0.2)',
    gray: '#95A5A6',
    grayLight: 'rgba(149, 165, 166, 0.2)'
};

// =====================================================
// Common Chart Options
// =====================================================
const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                    family: "'Inter', 'Poppins', sans-serif",
                    size: 12
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: {
                family: "'Inter', 'Poppins', sans-serif",
                size: 14,
                weight: 'bold'
            },
            bodyFont: {
                family: "'Inter', 'Poppins', sans-serif",
                size: 13
            },
            padding: 12,
            cornerRadius: 8
        }
    }
};

// =====================================================
// Dummy Data
// =====================================================

// Data 6 bulan terakhir
const months = ['Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
const monthsFull = ['Juli 2024', 'Agustus 2024', 'September 2024', 'Oktober 2024', 'November 2024', 'Desember 2024'];

// Data Pemasukan dan Pengeluaran (dalam juta rupiah)
const incomeData = [45.5, 52.3, 48.7, 55.2, 61.8, 58.4];
const expenseData = [32.1, 38.5, 35.2, 42.3, 45.6, 40.2];

// Data Kehadiran Jemaat
const attendanceData = [285, 312, 298, 325, 342, 356];

// Data Jenis Persembahan
const offeringTypes = ['Perpuluhan', 'Syukur', 'Misi', 'Pembangunan', 'Diakonia', 'Lainnya'];
const offeringData = [45, 25, 10, 12, 5, 3]; // dalam persentase

// Data Pengeluaran per Kategori
const expenseCategories = ['Gaji & Honor', 'Utilitas', 'Pemeliharaan', 'Program', 'Diakonia', 'Lainnya'];
const expenseCategoryData = [35, 15, 12, 20, 10, 8]; // dalam persentase

// =====================================================
// Initialize Charts
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
    initIncomeExpenseChart();
    initOfferingChart();
    initAttendanceChart();
    initExpenseCategoryChart();
    initFinanceCharts();
});

// =====================================================
// Line Chart: Trend Pemasukan vs Pengeluaran
// =====================================================
function initIncomeExpenseChart() {
    const ctx = document.getElementById('incomeExpenseChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Pemasukan',
                    data: incomeData,
                    borderColor: chartColors.secondary,
                    backgroundColor: chartColors.secondaryLight,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: chartColors.secondary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 6
                },
                {
                    label: 'Pengeluaran',
                    data: expenseData,
                    borderColor: chartColors.danger,
                    backgroundColor: chartColors.dangerLight,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: chartColors.danger,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + value + ' jt';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    ...commonOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': Rp ' + context.raw.toLocaleString('id-ID') + ' juta';
                        }
                    }
                }
            }
        }
    });
}

// =====================================================
// Pie Chart: Distribusi Jenis Persembahan
// =====================================================
function initOfferingChart() {
    const ctx = document.getElementById('offeringChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: offeringTypes,
            datasets: [{
                data: offeringData,
                backgroundColor: [
                    chartColors.primary,
                    chartColors.secondary,
                    chartColors.accent,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.gray
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    ...commonOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
}

// =====================================================
// Bar Chart: Kehadiran Jemaat per Bulan
// =====================================================
function initAttendanceChart() {
    const ctx = document.getElementById('attendanceChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Rata-rata Kehadiran',
                data: attendanceData,
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primary,
                borderWidth: 0,
                borderRadius: 6,
                barThickness: 40
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + ' orang';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    ...commonOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return 'Kehadiran: ' + context.raw + ' orang';
                        }
                    }
                }
            }
        }
    });
}

// =====================================================
// Doughnut Chart: Pengeluaran per Kategori
// =====================================================
function initExpenseCategoryChart() {
    const ctx = document.getElementById('expenseCategoryChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: expenseCategories,
            datasets: [{
                data: expenseCategoryData,
                backgroundColor: [
                    chartColors.danger,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.accent,
                    chartColors.secondary,
                    chartColors.gray
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            ...commonOptions,
            cutout: '60%',
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    ...commonOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
}

// =====================================================
// Finance Page Charts
// =====================================================
function initFinanceCharts() {
    initMonthlyIncomeChart();
    initMonthlyExpenseChart();
}

function initMonthlyIncomeChart() {
    const ctx = document.getElementById('monthlyIncomeChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: offeringTypes,
            datasets: [{
                label: 'Pemasukan Bulan Ini',
                data: [26.5, 14.6, 5.8, 7.0, 2.9, 1.6],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.secondary,
                    chartColors.accent,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.gray
                ],
                borderWidth: 0,
                borderRadius: 6
            }]
        },
        options: {
            ...commonOptions,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + value + ' jt';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...commonOptions.plugins,
                legend: {
                    display: false
                }
            }
        }
    });
}

function initMonthlyExpenseChart() {
    const ctx = document.getElementById('monthlyExpenseChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: expenseCategories,
            datasets: [{
                label: 'Pengeluaran Bulan Ini',
                data: [14.1, 6.0, 4.8, 8.0, 4.0, 3.3],
                backgroundColor: chartColors.danger,
                borderWidth: 0,
                borderRadius: 6
            }]
        },
        options: {
            ...commonOptions,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + value + ' jt';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                ...commonOptions.plugins,
                legend: {
                    display: false
                }
            }
        }
    });
}

// =====================================================
// Utility Functions for Charts
// =====================================================
function updateChart(chartId, newData) {
    const chart = Chart.getChart(chartId);
    if (chart) {
        chart.data.datasets[0].data = newData;
        chart.update();
    }
}

function addDataToChart(chartId, label, data) {
    const chart = Chart.getChart(chartId);
    if (chart) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
}

// Export for use in other scripts
window.ChartData = {
    colors: chartColors,
    months: months,
    monthsFull: monthsFull,
    incomeData: incomeData,
    expenseData: expenseData,
    attendanceData: attendanceData,
    updateChart: updateChart,
    addDataToChart: addDataToChart
};
