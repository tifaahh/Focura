document.addEventListener('DOMContentLoaded', function () {
  
  // 1. NAVBAR ACTIVE STATE
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('is-active');
    }
  });

  // 2. ORDER FORM LOGIC
  const orderForm = document.getElementById('orderForm');
  const receiptBox = document.getElementById('receiptBox');
  const receiptContent = document.getElementById('receiptContent');
  const waBtn = document.getElementById('waBtn');
  
  // Elemen Verifikasi & Akses
  const verifyBtn = document.getElementById('verifyBtn');
  const proofUpload = document.getElementById('proofUpload');
  const accessBox = document.getElementById('accessBox');
  const driveBtn = document.getElementById('driveBtn');

  // GANTI LINK GOOGLE DRIVE E-BOOK KAMU DI SINI
  const gdriveLink = "https://drive.google.com/file/d/1XXXXX_LINK_FILE_KAMU_XXXXX/view?usp=sharing"; 

  if (orderForm) {
    // A. Saat Form Disubmit (Buat Pesanan)
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('custName').value;
      const wa = document.getElementById('custWa').value;
      const payment = document.getElementById('paymentMethod').value;
      
      let price = 5000;
      let productName = 'E-Book: Digital Wellbeing Guide';
      
      const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
      const priceFormatted = price.toLocaleString('id-ID');
      
      // Render Struk
      receiptContent.innerHTML = `
        <div class="receipt-row"><span>Order ID</span><strong>${orderId}</strong></div>
        <div class="receipt-row"><span>Nama Pemesan</span><strong>${name}</strong></div>
        <div class="receipt-row"><span>WhatsApp</span><strong>${wa}</strong></div>
        <div class="receipt-row"><span>Produk</span><strong>${productName}</strong></div>
        <div class="receipt-row"><span>Metode Bayar</span><strong>${payment}</strong></div>
        <div class="receipt-row"><span>Total</span><strong>Rp ${priceFormatted}</strong></div>
      `;
      
      orderForm.style.display = 'none';
      receiptBox.style.display = 'block';
      
      // Link WhatsApp
      const waText = encodeURIComponent(
        `Halo Admin FOCURA, saya sudah membuat pesanan.\n\n` +
        `*Order ID:* ${orderId}\n` +
        `*Nama:* ${name}\n` +
        `*Produk:* ${productName}\n` +
        `*Total:* Rp ${priceFormatted}\n` +
        `*Metode Bayar:* ${payment}\n\n` +
        `Saya sudah transfer, mohon dicek ya. Terima kasih.`
      );
      waBtn.href = `https://wa.me/6289512707276?text=${waText}`;
    });

    // B. Saat Tombol Verifikasi Diklik
    if (verifyBtn) {
      verifyBtn.addEventListener('click', function() {
        // Cek apakah file sudah diupload
        if (!proofUpload.files || proofUpload.files.length === 0) {
          alert('Silakan upload bukti transfer (screenshot) terlebih dahulu sebelum melanjutkan!');
          return;
        }

        // Simulasi loading (opsional, agar terasa seperti memproses)
        verifyBtn.textContent = 'Memverifikasi...';
        verifyBtn.style.opacity = '0.7';
        verifyBtn.disabled = true;

        // Setelah 1 detik, tampilkan akses
        setTimeout(function() {
          // Sembunyikan tombol verify & area upload
          verifyBtn.style.display = 'none';
          document.querySelector('.upload-area').style.display = 'none';
          
          // Isi link drive dan tampilkan kotaknya
          if (driveBtn) driveBtn.href = gdriveLink;
          if (accessBox) accessBox.style.display = 'block';
          
        }, 1000); // Simulasi loading 1 detik
      });
    }
  }

  // 3. REVIEW FORM LOGIC (Sama seperti sebelumnya)
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
