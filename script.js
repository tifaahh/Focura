  // 3. Review Form & Local Storage Logic
  const reviewForm = document.getElementById('reviewForm');
  const reviewList = document.getElementById('reviewList');
  const starContainer = document.getElementById('starContainer');
  const revRatingInput = document.getElementById('revRating');

  // Bintang interaktif
  if (starContainer) {
    const stars = starContainer.querySelectorAll('span');
    stars.forEach(star => {
      star.addEventListener('click', function() {
        const val = this.getAttribute('data-value');
        revRatingInput.value = val;
        
        // Reset all
        stars.forEach(s => s.classList.remove('active'));
        
        // Fill selected
        for (let i = 0; i < val; i++) {
          stars[i].classList.add('active');
        }
      });
      
      // Default 5 stars on load
      if (star.getAttribute('data-value') <= 5) {
        star.classList.add('active');
      }
    });
  }

  // Render Review dari LocalStorage
  function loadReviews() {
    if (!reviewList) return;
    
    // Ambil data dari localStorage
    let savedReviews = JSON.parse(localStorage.getItem('focuraReviews')) || [];
    
    // Hapus review default jika ada data di localStorage (opsional, biar dinamis)
    // Tapi kita biarkan default tetap ada dengan tidak menghapus innerHTML.

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

      // Render langsung ke layar (tanpa reload)
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

      // Reset form
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
