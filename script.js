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
  // 2. ORDER FORM LOGIC
  // ============================================================
  const orderForm = document.getElementById('orderForm');
  const receiptBox = document.getElementById('receiptBox');
  const receiptContent = document.getElementById('receiptContent');
  const waBtn = document.getElementById('waBtn');

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah halaman refresh
      
      // Ambil data dengan pengaman (jika elemen tidak ada, tidak akan error)
      const nameEl = document.getElementById('custName');
      const waEl = document.getElementById('custWa');
      const productEl = document.getElementById('productSelect');
      const paymentEl = document.getElementById('paymentMethod');
      
      const name = nameEl ? nameEl.value : 'Tanpa Nama';
      const wa = waEl ? waEl.value : '-';
      const product = productEl ? productEl.value : 'ebook';
      const payment = paymentEl ? paymentEl.value : 'GoPay';
      
      // Tentukan Harga
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
      
      // Render Struk
      if(receiptContent) {
        receiptContent.innerHTML = `
          <div class="receipt-row"><span>Order ID</span><strong>${orderId}</strong></div>
          <div class="receipt-row"><span>Nama Pemesan</span><strong>${name}</strong></div>
          <div class="receipt-row"><span>WhatsApp</span><strong>${wa}</strong></div>
          <div class="receipt-row"><span>Produk</span><strong>${productName}</strong></div>
          <div class="receipt-row"><span>Metode Bayar</span><strong>${payment}</strong></div>
          <div class="receipt-row"><span>Total</span><strong>Rp ${priceFormatted}</strong></div>
        `;
      }
      
      // Tampilkan Struk, Sembunyikan Form
      orderForm.style.display = 'none';
      if(receiptBox) receiptBox.style.display = 'block';
      
      // Link WhatsApp Otomatis
      const waText = encodeURIComponent(
        `Halo Admin FOCURA, saya sudah membuat pesanan.\n\n` +
        `*Order ID:* ${orderId}\n` +
        `*Nama:* ${name}\n` +
        `*Produk:* ${productName}\n` +
        `*Total:* Rp ${priceFormatted}\n` +
        `*Metode Bayar:* ${payment}\n\n` +
        `Mohon kirimkan nomor ${payment} untuk pembayaran. Terima kasih.`
      );
      
      if(waBtn) waBtn.href = `https://wa.me/6289512707276?text=${waText}`;
    });
  }

  // ============================================================
  // 3. REVIEW FORM LOGIC
  // ============================================================
  const reviewForm = document.getElementById('reviewForm');
  const reviewList = document.getElementById('reviewList');
  const starContainer = document.getElementById('starContainer');
  const revRatingInput = document.getElementById('revRating');

  if (starContainer) {
    const stars = starContainer.querySelectorAll('span');
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= 5) {
        star.classList.add('active');
      }
    });

    stars.forEach(star => {
      star.addEventListener('click', function() {
        const val = parseInt(this.getAttribute('data-value'));
        if(revRatingInput) revRatingInput.value = val;
        stars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < val; i++) {
          stars[i].classList.add('active');
        }
      });
    });
  }

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
      reviewList.insertBefore(card, reviewList.firstChild);
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('revName').value;
      const rating = revRatingInput ? parseInt(revRatingInput.value) : 5;
      const text = document.getElementById('revText').value;
      const newReview = { name, rating, text };
      
      let savedReviews = JSON.parse(localStorage.getItem('focuraReviews')) || [];
      savedReviews.push(newReview);
      localStorage.setItem('focuraReviews', JSON.stringify(savedReviews));

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
      if(reviewList) reviewList.insertBefore(card, reviewList.firstChild);

      reviewForm.reset();
      if (revRatingInput) revRatingInput.value = 5;
      if (starContainer) {
        const stars = starContainer.querySelectorAll('span');
        stars.forEach(s => s.classList.add('active'));
      }
      alert('Terima kasih! Review kamu berhasil ditambahkan.');
    });
  }

  loadReviews();
});
