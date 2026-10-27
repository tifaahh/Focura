document.addEventListener('DOMContentLoaded', function () {
  // 1. Navbar Active State
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('is-active');
    }
  });

  // 2. Order Form Logic (Reservation/Order)
  const orderForm = document.getElementById('orderForm');
  const receiptBox = document.getElementById('receiptBox');
  const receiptContent = document.getElementById('receiptContent');
  const waBtn = document.getElementById('waBtn');

  if (orderForm) {
    // Set default product from URL params (e.g., order.html?product=ebook)
    const urlParams = new URLSearchParams(window.location.search);
    const prodParam = urlParams.get('product');
    if (prodParam) {
      document.getElementById('productSelect').value = prodParam;
    }

    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('custName').value;
      const wa = document.getElementById('custWa').value;
      const product = document.getElementById('productSelect').value;
      
      let price = 0;
      let productName = '';
      
      if (product === 'ebook') {
        price = 49000;
        productName = 'E-Book: Digital Detox Guide';
      } else if (product === 'consult') {
        price = 150000;
        productName = 'Konsultasi 1-on-1 (30 Menit)';
      } else if (product === 'bundle') {
        price = 179000;
        productName = 'Bundle: E-Book + Konsultasi';
      }
      
      const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
      const priceFormatted = price.toLocaleString('id-ID');
      
      // Render Receipt
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
});
