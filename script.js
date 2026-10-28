document.addEventListener('DOMContentLoaded', function () {
  
  // ============================================================
  // 1. MOBILE MENU TOGGLE
  // ============================================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // ============================================================
  // 2. NAVBAR ACTIVE STATE
  // ============================================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navAnchors = document.querySelectorAll('.nav-links a');
  
  navAnchors.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('is-active');
    }
  });

  // ============================================================
  // 3. ORDER FORM LOGIC (Pesan E-Book)
  // ============================================================
  const orderForm = document.getElementById('orderForm');
  const receiptBox = document.getElementById('receiptBox');
  const receiptContent = document.getElementById('receiptContent');
  const waBtn = document.getElementById('waBtn');

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('custName').value;
      const wa = document.getElementById('custWa').value;
      const email = document.getElementById('custEmail').value;
      const payment = document.getElementById('paymentMethod').value;
      
      let price = 5000;
      const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
      const priceFormatted = price.toLocaleString('id-ID');
      
      // Render Struk
      receiptContent.innerHTML = `
        <div class="receipt-row"><span>Order ID</span><strong>${orderId}</strong></div>
        <div class="receipt-row"><span>Nama Pemesan</span><strong>${name}</strong></div>
        <div class="receipt-row"><span>Email</span><strong>${email}</strong></div>
        <div class="receipt-row"><span>Produk</span><strong>E-Book: Digital Wellbeing Guide</strong></div>
        <div class="receipt-row"><span>Metode Bayar</span><strong>${payment}</strong></div>
        <div class="receipt-row"><span>Total</span><strong>Rp ${priceFormatted}</strong></div>
      `;
      
      orderForm.style.display = 'none';
      receiptBox.style.display = 'block';
      
      // Setup Link WhatsApp Order
      const waText = encodeURIComponent(
        `Halo Admin FOCURA, saya sudah membuat pesanan.\n\n` +
        `*Order ID:* ${orderId}\n` +
        `*Nama:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Total:* Rp ${priceFormatted}\n` +
        `*Metode Bayar:* ${payment}\n\n` +
        `Berikut saya lampirkan bukti transfernya. Mohon kirimkan E-Book-nya ke email saya ya. Terima kasih!`
      );
      waBtn.href = `https://wa.me/6289512707276?text=${waText}`;
    });
  }

  // ============================================================
  // 4. REVIEW FORM LOGIC (Kirim Langsung ke WA)
  // ============================================================
  const reviewForm = document.getElementById('reviewForm');
  const starContainer = document.getElementById('starContainer');
  const revRatingInput = document.getElementById('revRating');

  // Logika Bintang Interaktif
  if (starContainer) {
    const stars = starContainer.querySelectorAll('span');
    
    // Set default 5 bintang menyala
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= 5) {
        star.classList.add('active');
      }
    });

    // Klik bintang
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

  // Logika Submit Review ke WA
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('revName').value;
      const rating = revRatingInput ? parseInt(revRatingInput.value) : 5;
      const text = document.getElementById('revText').value;
      
      // Membuat visual bintang untuk pesan WA
      const stars = '⭐'.repeat(rating);
      
      // Format pesan untuk WhatsApp
      const waText = encodeURIComponent(
        `Halo Admin FOCURA, saya ingin memberikan review.\n\n` +
        `*Nama:* ${name}\n` +
        `*Rating:* ${stars} (${rating}/5)\n` +
        `*Ulasan:* "${text}"\n\n` +
        `Mohon review ini ditampilkan di website. Terima kasih!`
      );
      
      // Buka WhatsApp di tab baru
      window.open(`https://wa.me/6289512707276?text=${waText}`, '_blank');
      
      // Reset form
      reviewForm.reset();
      if (revRatingInput) revRatingInput.value = 5;
      if (starContainer) {
        const starElements = starContainer.querySelectorAll('span');
        starElements.forEach(s => s.classList.add('active'));
      }
      
      alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk mengirim review.');
    });
  }

});
