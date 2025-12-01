/**
 * =====================================================
 * Sistem Pengolahan Data Gereja - Main JavaScript
 * =====================================================
 * 
 * Fitur:
 * - Sidebar toggle
 * - Modal handling
 * - Form validation
 * - Table sorting dan pagination
 * - Search functionality
 * - Date/time display
 * - Notification toasts
 * 
 * =====================================================
 */

// =====================================================
// DOM Ready
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
    initDateTime();
    initSearch();
    initModals();
    initForms();
    initTables();
    initTooltips();
    initDropdowns();
    updateGreeting();
});

// =====================================================
// Sidebar Toggle
// =====================================================
function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const overlay = document.querySelector('.sidebar-overlay');
    const submenuItems = document.querySelectorAll('.nav-item.has-submenu');

    // Toggle sidebar on mobile
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
            if (overlay) {
                overlay.classList.toggle('show');
            }
        });
    }

    // Close sidebar when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        });
    }

    // Handle submenu toggle
    submenuItems.forEach(function(item) {
        const link = item.querySelector('.nav-link');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close other submenus
            submenuItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
            
            // Toggle current submenu
            item.classList.toggle('open');
        });
    });

    // Set active menu based on current page
    setActiveMenu();
}

function setActiveMenu() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href.replace('../', '').replace('./', ''))) {
            link.classList.add('active');
            // Open parent submenu if exists
            const parentSubmenu = link.closest('.nav-item.has-submenu');
            if (parentSubmenu) {
                parentSubmenu.classList.add('open');
            }
        }
    });
}

// =====================================================
// Date/Time Display
// =====================================================
function initDateTime() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

function updateDateTime() {
    const timeElements = document.querySelectorAll('.current-time');
    const dateElements = document.querySelectorAll('.current-date');
    
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const timeString = now.toLocaleTimeString('id-ID');
    const dateString = now.toLocaleDateString('id-ID', options);
    
    timeElements.forEach(el => el.textContent = timeString);
    dateElements.forEach(el => el.textContent = dateString);
}

function updateGreeting() {
    const greetingElement = document.querySelector('.greeting-message');
    if (!greetingElement) return;
    
    const hour = new Date().getHours();
    let greeting = 'Selamat Datang';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Selamat Pagi';
    } else if (hour >= 12 && hour < 15) {
        greeting = 'Selamat Siang';
    } else if (hour >= 15 && hour < 18) {
        greeting = 'Selamat Sore';
    } else {
        greeting = 'Selamat Malam';
    }
    
    const userName = greetingElement.getAttribute('data-user') || 'Admin';
    greetingElement.textContent = `${greeting}, ${userName}!`;
}

// =====================================================
// Search Functionality
// =====================================================
function initSearch() {
    // Global search
    const globalSearch = document.querySelector('.navbar-search input');
    if (globalSearch) {
        globalSearch.addEventListener('keyup', debounce(function(e) {
            if (e.key === 'Enter') {
                performGlobalSearch(this.value);
            }
        }, 300));
    }
    
    // Table search
    const tableSearch = document.querySelector('.table-search input');
    if (tableSearch) {
        tableSearch.addEventListener('keyup', debounce(function() {
            filterTable(this.value);
        }, 300));
    }
}

function performGlobalSearch(query) {
    if (!query.trim()) return;
    
    // In a real app, this would navigate to search results page
    showToast('info', 'Pencarian', `Mencari "${query}"...`);
    console.log('Searching for:', query);
}

function filterTable(query) {
    const table = document.querySelector('.data-table tbody');
    if (!table) return;
    
    const rows = table.querySelectorAll('tr');
    const searchTerm = query.toLowerCase();
    let visibleCount = 0;
    
    rows.forEach(function(row) {
        const text = row.textContent.toLowerCase();
        const isVisible = text.includes(searchTerm);
        row.style.display = isVisible ? '' : 'none';
        if (isVisible) visibleCount++;
    });
    
    // Update pagination info
    const paginationInfo = document.querySelector('.pagination-info');
    if (paginationInfo) {
        paginationInfo.textContent = `Menampilkan ${visibleCount} dari ${rows.length} data`;
    }
}

// =====================================================
// Modal Handling
// =====================================================
function initModals() {
    // Delete confirmation modals
    const deleteButtons = document.querySelectorAll('[data-delete]');
    deleteButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const itemId = this.getAttribute('data-delete');
            const itemName = this.getAttribute('data-name') || 'item ini';
            showDeleteModal(itemId, itemName);
        });
    });
}

function showDeleteModal(itemId, itemName) {
    const modalHtml = `
        <div class="modal fade" id="deleteModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="fas fa-exclamation-triangle text-warning me-2"></i>
                            Konfirmasi Hapus
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p>Apakah Anda yakin ingin menghapus <strong>${itemName}</strong>?</p>
                        <p class="text-muted mb-0">Tindakan ini tidak dapat dibatalkan.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button>
                        <button type="button" class="btn btn-danger" onclick="confirmDelete('${itemId}')">
                            <i class="fas fa-trash me-1"></i> Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('deleteModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();
}

function confirmDelete(itemId) {
    // In a real app, this would send a delete request to the server
    console.log('Deleting item:', itemId);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
    modal.hide();
    
    // Show success message
    showToast('success', 'Berhasil', 'Data berhasil dihapus');
    
    // Remove row from table (demo)
    const row = document.querySelector(`tr[data-id="${itemId}"]`);
    if (row) {
        row.style.transition = 'opacity 0.3s';
        row.style.opacity = '0';
        setTimeout(() => row.remove(), 300);
    }
}

// =====================================================
// Form Validation
// =====================================================
function initForms() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm(form)) {
                e.stopPropagation();
                showToast('error', 'Error', 'Mohon lengkapi semua field yang diperlukan');
                return;
            }
            
            // Show loading state
            const submitBtn = form.querySelector('[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="loading-spinner me-2"></span> Menyimpan...';
                
                // Simulate API call
                setTimeout(function() {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    showToast('success', 'Berhasil', 'Data berhasil disimpan');
                    
                    // Reset form or redirect
                    // form.reset();
                }, 1500);
            }
        });
    });
    
    // Real-time validation
    const inputs = document.querySelectorAll('.form-control[required]');
    inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateInput(this);
            }
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('.form-control[required], .form-select[required]');
    
    inputs.forEach(function(input) {
        if (!validateInput(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateInput(input) {
    const value = input.value.trim();
    const type = input.type;
    let isValid = true;
    let message = '';
    
    // Required check
    if (input.hasAttribute('required') && !value) {
        isValid = false;
        message = 'Field ini wajib diisi';
    }
    
    // Email validation
    if (isValid && type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Format email tidak valid';
        }
    }
    
    // Phone validation
    if (isValid && (type === 'tel' || input.name === 'telepon') && value) {
        const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            message = 'Format nomor telepon tidak valid';
        }
    }
    
    // Update UI
    const feedback = input.nextElementSibling;
    if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = message;
        }
    }
    
    return isValid;
}

// =====================================================
// Table Sorting and Pagination
// =====================================================
function initTables() {
    const sortableHeaders = document.querySelectorAll('.data-table th[data-sort]');
    
    sortableHeaders.forEach(function(header) {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            const column = this.getAttribute('data-sort');
            const isAsc = this.classList.contains('sort-asc');
            
            // Reset other headers
            sortableHeaders.forEach(h => {
                h.classList.remove('sort-asc', 'sort-desc');
            });
            
            // Set current header
            this.classList.add(isAsc ? 'sort-desc' : 'sort-asc');
            
            // Sort table
            sortTable(column, !isAsc);
        });
    });
}

function sortTable(column, ascending) {
    const tbody = document.querySelector('.data-table tbody');
    if (!tbody) return;
    
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const columnIndex = getColumnIndex(column);
    
    rows.sort(function(a, b) {
        const aValue = a.cells[columnIndex]?.textContent.trim() || '';
        const bValue = b.cells[columnIndex]?.textContent.trim() || '';
        
        // Try numeric comparison first
        const aNum = parseFloat(aValue.replace(/[^0-9.-]/g, ''));
        const bNum = parseFloat(bValue.replace(/[^0-9.-]/g, ''));
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return ascending ? aNum - bNum : bNum - aNum;
        }
        
        // String comparison
        return ascending 
            ? aValue.localeCompare(bValue, 'id')
            : bValue.localeCompare(aValue, 'id');
    });
    
    // Re-append sorted rows
    rows.forEach(row => tbody.appendChild(row));
}

function getColumnIndex(columnName) {
    const headers = document.querySelectorAll('.data-table th');
    let index = 0;
    
    headers.forEach(function(header, i) {
        if (header.getAttribute('data-sort') === columnName) {
            index = i;
        }
    });
    
    return index;
}

// =====================================================
// Toast Notifications
// =====================================================
function showToast(type, title, message) {
    let container = document.querySelector('.toast-container');
    
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const icons = {
        success: 'fa-check-circle text-success',
        error: 'fa-times-circle text-danger',
        warning: 'fa-exclamation-circle text-warning',
        info: 'fa-info-circle text-info'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <div class="toast-content">
            <div class="toast-title fw-bold">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">&times;</button>
    `;
    
    container.appendChild(toast);
    
    // Close button
    toast.querySelector('.toast-close').addEventListener('click', function() {
        removeToast(toast);
    });
    
    // Auto remove after 5 seconds
    setTimeout(function() {
        removeToast(toast);
    }, 5000);
}

function removeToast(toast) {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(function() {
        toast.remove();
    }, 300);
}

// =====================================================
// Tooltips
// =====================================================
function initTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// =====================================================
// Dropdowns
// =====================================================
function initDropdowns() {
    // Custom dropdown handling if needed
}

// =====================================================
// Utility Functions
// =====================================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function formatShortDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// =====================================================
// Export Functions (for use in other scripts)
// =====================================================
window.SistemGereja = {
    showToast: showToast,
    formatCurrency: formatCurrency,
    formatDate: formatDate,
    showDeleteModal: showDeleteModal
};
