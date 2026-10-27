document.addEventListener('DOMContentLoaded', function () {
  
  // ============================================================
  // 1. NAVBAR ACTIVE STATE
  // ============================================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('is-active');
    }
  });

  // ============================================================
  // 2. ORDER FORM LOGIC (Halaman Order)
  // ============================================================
  const orderForm = document.getElementById('orderForm');
  const receiptBox = document.getElementById('receiptBox');
  const receiptContent = document.getElementById('receiptContent');
  const waBtn = document.getElementById('waBtn');

  if (orderForm) {
    // Set default product from URL params (e.g., order.html?product=ebook)
    const urlParams = new URLSearchParams(window.location.search);
    const prodParam = urlParams.get('product');
    if (prodParam) {
      const selectElement = document.getElementById('productSelect');
      if(selectElement) selectElement.value = prodParam;
    }

    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('custName').value;
      const wa = document.getElementById('custWa').value;
      const product = document.getElementById('productSelect').value;
      
      // HARGA BARU (MURAH)
      let price = 0;
      let productName = '';
      
      if (product === 'ebook') {
        price = 5000;
        productName = 'E-Book: Digital Detox Guide';
      } else if (product === 'consult') {
        price = 10000;
        productName = 'Konsultasi 1-on-1 (30 Menit)';
      } else if (product === 'bundle') {
        price = 10000;
        productName = 'Bundle: E-Book + Konsultasi';
      }
      
      const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
      const priceFormatted = price.toLocaleString('id-ID');
      
      // Render Receipt (Struk)
      receiptContent.innerHTML = `
        <div class="receipt-row"><span>Order ID</span><strong>${orderId}</strong></div>
        <div class="receipt-row"><span>Nama Pemesan</span><strong>${name}</strong></div>
        <div class="receipt-row"><span>WhatsApp</span><strong>${wa}</strong></div>
        <div class="receipt-row"><span>Produk / Layanan</span><strong>${productName}</strong></div>
        <div class="receipt-row"><span>Total Pembayaran</span><strong>Rp ${priceFormatted}</strong></div>
      `;
      
      orderForm.style.display = 'none';
      receiptBox.style.display = 'block';
      
      // Setup WhatsApp Link for Payment Confirmation
      const waText = encodeURIComponent(`Halo Admin FOCURA, saya ingin mengonfirmasi pesanan saya.\n\n*Order ID:* ${orderId}\n*Nama:* ${name}\n*Produk:* ${productName}\n*Total:* Rp ${priceFormatted}\n\nMohon kirimkan instruksi pembayaran selanjutnya. Terima kasih.`);
      waBtn.href = `https://wa.me/6289512707276?text=${waText}`;
    });
  }

  // ============================================================
  // 3. REVIEW FORM & LOCAL STORAGE LOGIC (Halaman Home/Index)
  // ============================================================
  const reviewForm = document.getElementById('reviewForm');
  const reviewList = document.getElementById('reviewList');
  const starContainer = document.getElementById('starContainer');
  const revRatingInput = document.getElementById('revRating');

  // Logika Bintang Interaktif
  if (starContainer) {
    const stars = starContainer.querySelectorAll('span');
    
    // Set default 5 bintang menyala saat halaman dimuat
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= 5) {
        star.classList.add('active');
      }
    });

    // Logika saat bintang diklik
    stars.forEach(star => {
      star.addEventListener('click', function() {
        const val = parseInt(this.getAttribute('data-value'));
        revRatingInput.value = val;
        
        // Matikan semua bintang
        stars.forEach(s => s.classList.remove('active'));
        
        // Nyalakan bintang sesuai yang diklik
        for (let i = 0; i < val; i++) {
          stars[i].classList.add('active');
        }
      });
    });
  }

  // Fungsi untuk memuat review dari localStorage
  function loadReviews() {
    if (!reviewList) return;
    
    let savedReviews = JSON.parse(localStorage.getItem('focuraReviews')) || [];

    savedReviews.forEach(rev => {
      const card = document.createElement('div');
      card.className = 'review-card';
      
      const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
      const initial = rev.name.charAt(0).toUpperCase();

      card.innerHTML = `
        <div class="review-header">
          <div class="review-avatar">${initial}</div>
          <div class="review-meta">
            <h4>${rev.name}</h4>
            <div class="review-stars">${stars}</div>
          </div>
        </div>
        <p class="review-text">"${rev.text}"</p>
      `;
      
      // Tambahkan ke paling atas
      reviewList.insertBefore(card, reviewList.firstChild);
    });
  }

  // Handle Submit Review
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('revName').value;
      const rating = parseInt(revRatingInput.value);
      const text = document.getElementById('revText').value;

      const newReview = { name, rating, text };
      
      // Simpan ke localStorage
      let savedReviews = JSON.parse(localStorage.getItem('focuraReviews')) || [];
      savedReviews.push(newReview);
      localStorage.setItem('focuraReviews', JSON.stringify(savedReviews));

      // Render langsung ke layar tanpa reload
      const card = document.createElement('div');
      card.className = 'review-card';
      const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
      const initial = name.charAt(0).toUpperCase();

      card.innerHTML = `
        <div class="review-header">
          <div class="review-avatar">${initial}</div>
          <div class="review-meta">
            <h4>${name}</h4>
            <div class="review-stars">${stars}</div>
          </div>
        </div>
        <p class="review-text">"${text}"</p>
      `;
      
      reviewList.insertBefore(card, reviewList.firstChild);

      // Reset form dan kembalikan bintang ke 5
      reviewForm.reset();
      revRatingInput.value = 5;
      if (starContainer) {
        const stars = starContainer.querySelectorAll('span');
        stars.forEach(s => s.classList.add('active'));
      }

      alert('Terima kasih! Review kamu berhasil ditambahkan sebagai bukti testimoni.');
    });
  }

  // Panggil fungsi load saat halaman dibuka
  loadReviews();

});
