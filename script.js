document.addEventListener('DOMContentLoaded', function () {
  
  // ============================================================
  // 1. NAVBAR ACTIVE STATE (Highlight menu yang sedang dibuka)
  // ============================================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('is-active');
    }
  });

  // ============================================================
  // 2. ORDER FORM LOGIC (Halaman order.html)
  // ============================================================
  const orderForm = document.getElementById('orderForm');
  const receiptBox = document.getElementById('receiptBox');
  const receiptContent = document.getElementById('receiptContent');
  const waBtn = document.getElementById('waBtn');
  const driveBtn = document.getElementById('driveBtn'); // Tombol GDrive

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Ambil data dari form
      const name = document.getElementById('custName').value;
      const wa = document.getElementById('custWa').value;
      const payment = document.getElementById('paymentMethod').value;
      
      // Harga & Produk (Terkunci untuk E-Book)
      let price = 5000;
      let productName = 'E-Book: Digital Wellbeing Guide';
      
      const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
      const priceFormatted = price.toLocaleString('id-ID');
      
      // Render Struk (Receipt)
      receiptContent.innerHTML = `
        <div class="receipt-row"><span>Order ID</span><strong>${orderId}</strong></div>
        <div class="receipt-row"><span>Nama Pemesan</span><strong>${name}</strong></div>
        <div class="receipt-row"><span>WhatsApp</span><strong>${wa}</strong></div>
        <div class="receipt-row"><span>Produk</span><strong>${productName}</strong></div>
        <div class="receipt-row"><span>Metode Bayar</span><strong>${payment}</strong></div>
        <div class="receipt-row"><span>Total</span><strong>Rp ${priceFormatted}</strong></div>
      `;
      
      // Sembunyikan Form, Tampilkan Struk
      orderForm.style.display = 'none';
      receiptBox.style.display = 'block';
      
      // --- LINK GOOGLE DRIVE E-BOOK ---
      // PENTING: GANTI LINK DI BAWAH INI DENGAN LINK GOOGLE DRIVE E-BOOK KAMU
      const gdriveLink = "https://drive.google.com/file/d/1XXXXX_LINK_FILE_KAMU_XXXXX/view?usp=sharing"; 
      
      if (driveBtn) {
        driveBtn.href = gdriveLink;
      }

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
      
      if (waBtn) {
        waBtn.href = `https://wa.me/6289512707276?text=${waText}`;
      }
    });
  }

  // ============================================================
  // 3. REVIEW FORM & LOCAL STORAGE LOGIC (Halaman index.html)
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
        if (revRatingInput) revRatingInput.value = val;
        
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
      const rating = revRatingInput ? parseInt(revRatingInput.value) : 5;
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
      if (revRatingInput) revRatingInput.value = 5;
      if (starContainer) {
        const stars = starContainer.querySelectorAll('span');
        stars.forEach(s => s.classList.add('active'));
      }

      alert('Terima kasih! Review kamu berhasil ditambahkan.');
    });
  }

  // Panggil fungsi load saat halaman dibuka
  loadReviews();

});
