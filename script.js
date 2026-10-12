let timeLeft = 25 * 60;
let timerInterval = null;
const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const totalEl = document.getElementById('total');

function updateDisplay() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

startBtn.onclick = () => {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert('Sesi fokus selesai!');
      let total = parseInt(localStorage.getItem('total') || 0);
      total += 25;
      localStorage.setItem('total', total);
      totalEl.textContent = total;
      return;
    }
    timeLeft--;
    updateDisplay();
  }, 1000);
};

resetBtn.onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  updateDisplay();
};

totalEl.textContent = localStorage.getItem('total') || 0;
updateDisplay();

// Latihan pernapasan
document.getElementById('breath').onclick = () => {
  alert('Tarik napas 4 detik... tahan 7 detik... buang 8 detik... Ulangi 4x.');
};