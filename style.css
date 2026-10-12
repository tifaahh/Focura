/* ============================================================
   1. TOKENS & RESET
============================================================ */
:root{
  --green-900:#22392C;
  --green-800:#2F4A3A;
  --green-700:#3F6B50;
  --green-600:#4A7A5C;
  --green-500:#7FAE87;
  --green-400:#9CC194;
  --green-300:#B9D4B4;
  --green-200:#D3E6CE;
  --green-100:#E4EFDE;
  --green-50:#F1F7EE;

  --cream:#FAF6EE;
  --white:#FFFFFF;
  --ink:#22332A;
  --muted:#5F7266;
  --line:rgba(34,57,44,.09);

  --shadow-sm:0 4px 16px rgba(34,57,44,.06);
  --shadow-md:0 18px 40px -18px rgba(34,57,44,.22);
  --shadow-lg:0 40px 80px -40px rgba(34,57,44,.35);

  --radius-lg:24px;
  --radius-md:18px;
  --radius-sm:12px;

  --ease:cubic-bezier(.22,.61,.36,1);
  --nav-h:72px;
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}

body{
  font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  background:var(--cream);
  color:var(--ink);
  line-height:1.6;
  font-size:16px;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}

img,svg{display:block;max-width:100%}
a{color:inherit}
button{font-family:inherit}

::selection{background:var(--green-200);color:var(--green-900)}

/* ============================================================
   2. LAYOUT
============================================================ */
.container{
  width:100%;
  max-width:1140px;
  margin-inline:auto;
  padding-inline:22px;
}

.section{
  padding:clamp(56px,7vw,88px) 0;
  scroll-margin-top:calc(var(--nav-h) + 16px);
}
.section--white{background:var(--white)}
.section--cream{background:var(--cream)}

.eyebrow{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:5px 13px;
  border-radius:999px;
  background:var(--green-100);
  color:var(--green-700);
  font-size:.72rem;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
  margin-bottom:14px;
}
.eyebrow::before{
  content:'';
  width:6px;height:6px;
  border-radius:50%;
  background:var(--green-500);
}

h1,h2,h3,h4{line-height:1.2;letter-spacing:-.02em;font-weight:800}

h2{
  font-size:clamp(1.6rem,3vw,2.2rem);
  color:var(--green-900);
}

.lead{
  font-size:1rem;
  color:var(--muted);
  line-height:1.7;
}

.muted-para{
  margin-top:12px;
  color:var(--muted);
  font-size:.95rem;
}

.section-head{
  max-width:620px;
  margin-bottom:clamp(32px,4vw,44px);
}
.section-head--center{
  margin-inline:auto;
  text-align:center;
}
.section-head p{
  margin-top:12px;
  color:var(--muted);
  font-size:.98rem;
}

/* ============================================================
   3. BUTTONS
============================================================ */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:9px;
  font-weight:600;
  font-size:.92rem;
  padding:13px 24px;
  border-radius:999px;
  border:1px solid transparent;
  text-decoration:none;
  cursor:pointer;
  white-space:nowrap;
  transition:transform .25s var(--ease),box-shadow .25s var(--ease),
             background .25s var(--ease),border-color .25s var(--ease),color .25s var(--ease);
}
.btn svg{width:17px;height:17px;flex:none}

.btn-primary{
  background:var(--green-700);
  color:#fff;
  box-shadow:0 12px 22px -12px rgba(63,107,80,.85);
}
.btn-primary:hover{
  background:var(--green-800);
  transform:translateY(-2px);
  box-shadow:0 18px 30px -14px rgba(63,107,80,.9);
}

.btn-ghost{
  background:var(--white);
  color:var(--green-800);
  border-color:var(--line);
  box-shadow:var(--shadow-sm);
}
.btn-ghost:hover{
  transform:translateY(-2px);
  border-color:var(--green-300);
  box-shadow:var(--shadow-md);
}

.btn-whatsapp{
  background:#25D366;
  color:#fff;
  box-shadow:0 12px 22px -12px rgba(37,211,102,.7);
}
.btn-whatsapp:hover{
  background:#1FB855;
  transform:translateY(-2px);
  box-shadow:0 18px 30px -14px rgba(37,211,102,.75);
}

.btn-light{
  background:#fff;
  color:var(--green-800);
}
.btn-light:hover{transform:translateY(-2px);background:#F4FAF1}

.btn-sm{padding:10px 18px;font-size:.86rem}
.btn-lg{padding:15px 28px;font-size:.98rem}

/* ============================================================
   4. NAVBAR
============================================================ */
.nav{
  position:sticky;
  top:0;
  z-index:200;
  background:rgba(250,246,238,.85);
  backdrop-filter:blur(16px);
  -webkit-backdrop-filter:blur(16px);
  border-bottom:1px solid transparent;
  transition:border-color .3s,box-shadow .3s,background .3s;
}
.nav.scrolled{
  border-bottom-color:var(--line);
  box-shadow:0 8px 30px -22px rgba(34,57,44,.5);
  background:rgba(250,246,238,.95);
}

.nav-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  height:var(--nav-h);
  gap:20px;
}

.logo{
  display:inline-flex;
  align-items:center;
  gap:10px;
  text-decoration:none;
  flex:none;
}
.logo-mark{width:34px;height:34px;flex:none}
.logo-text{
  font-weight:800;
  font-size:1.08rem;
  letter-spacing:.16em;
  color:var(--green-900);
}

.nav-links{
  display:flex;
  align-items:center;
  gap:28px;
}
.nav-links a{
  font-size:.9rem;
  font-weight:500;
  color:var(--muted);
  text-decoration:none;
  transition:color .22s;
  position:relative;
}
.nav-links a::after{
  content:'';
  position:absolute;
  left:0;bottom:-6px;
  width:0;height:2px;
  border-radius:2px;
  background:var(--green-500);
  transition:width .3s var(--ease);
}
.nav-links a:hover{color:var(--green-800)}
.nav-links a:hover::after{width:100%}
.nav-links a.is-active{color:var(--green-800);font-weight:700}
.nav-links a.is-active::after{width:100%}

.nav-toggle{
  display:none;
  flex-direction:column;
  gap:5px;
  background:none;
  border:0;
  padding:8px;
  cursor:pointer;
  border-radius:10px;
}
.nav-toggle span{
  display:block;
  width:22px;height:2px;
  border-radius:2px;
  background:var(--green-800);
  transition:transform .3s var(--ease),opacity .3s;
}
.nav-toggle.active span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.nav-toggle.active span:nth-child(2){opacity:0}
.nav-toggle.active span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

/* ============================================================
   5. HERO
============================================================ */
.hero{
  position:relative;
  padding:clamp(28px,4vw,56px) 0 clamp(56px,6vw,84px);
  overflow:hidden;
  background:var(--cream);
}

.hero-bg{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.55}
.blob-1{width:520px;height:520px;background:#CFE5C8;top:-200px;right:-140px}
.blob-2{width:400px;height:400px;background:#F0E4CB;bottom:-180px;left:-140px}

.hero-grid{
  position:relative;
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:clamp(28px,4vw,56px);
  align-items:center;
}

.hero-badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:6px 14px 6px 7px;
  background:rgba(255,255,255,.85);
  border:1px solid var(--line);
  border-radius:999px;
  font-size:.76rem;
  font-weight:600;
  color:var(--green-700);
  box-shadow:var(--shadow-sm);
  margin-bottom:20px;
}
.hero-badge i{
  display:grid;
  place-items:center;
  width:22px;height:22px;
  border-radius:50%;
  background:var(--green-100);
  font-style:normal;
  font-size:.72rem;
}

.hero h1{
  font-size:clamp(1.9rem,4.2vw,3rem);
  color:var(--green-900);
  line-height:1.1;
  letter-spacing:-.03em;
  margin-bottom:18px;
}
.hero h1 .hl{color:var(--green-600)}

.hero p.hero-desc{
  font-size:clamp(.98rem,1.4vw,1.05rem);
  color:var(--muted);
  max-width:500px;
  margin-bottom:28px;
  line-height:1.7;
}

.hero-actions{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin-bottom:20px;
}

.hero-note{
  display:flex;
  align-items:center;
  gap:9px;
  font-size:.8rem;
  color:var(--muted);
}
.hero-note svg{width:15px;height:15px;color:var(--green-500);flex:none}

.hero-art{
  position:relative;
  width:100%;
  max-width:460px;
  margin-inline:auto;
}
.hero-art > svg{
  width:100%;
  height:auto;
  animation:heroFloat 9s ease-in-out infinite;
}
@keyframes heroFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-12px)}
}

.float-card{
  position:absolute;
  display:flex;
  align-items:center;
  gap:11px;
  padding:11px 14px;
  background:rgba(255,255,255,.94);
  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,.9);
  border-radius:16px;
  box-shadow:0 24px 48px -24px rgba(34,57,44,.4);
  animation:cardFloat 6.5s ease-in-out infinite;
}
@keyframes cardFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}
.fc-1{top:9%;left:-6%;animation-delay:-.6s}
.fc-2{bottom:11%;right:-5%;animation-delay:-3.4s}

.ring{
  position:relative;
  width:42px;height:42px;
  flex:none;
  border-radius:50%;
  background:conic-gradient(var(--green-600) 0 64%,var(--green-100) 64% 100%);
  display:grid;
  place-items:center;
}
.ring::after{
  content:'';
  position:absolute;
  inset:5px;
  background:#fff;
  border-radius:50%;
}
.ring span{
  position:relative;
  z-index:1;
  font-size:.62rem;
  font-weight:800;
  color:var(--green-700);
}

.fc-text strong{display:block;font-size:.82rem;color:var(--green-900)}
.fc-text span{display:block;font-size:.68rem;color:var(--muted)}

.fc-col .fc-label{display:block;font-size:.66rem;color:var(--muted);margin-bottom:2px}
.fc-col strong{
  display:block;
  font-size:.95rem;
  color:var(--green-900);
  line-height:1.2;
  margin-bottom:6px;
}
.bars{display:flex;align-items:flex-end;gap:4px;height:20px}
.bars i{display:block;width:5px;border-radius:3px;background:var(--green-200)}
.bars i.on{background:var(--green-500)}

/* ============================================================
   6. ABOUT
============================================================ */
.about-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:clamp(24px,4vw,56px);
  align-items:start;
  margin-bottom:clamp(32px,4vw,48px);
}
.about-grid h2{max-width:420px}

.value-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}
.value-card{
  background:var(--green-50);
  border:1px solid var(--green-100);
  border-radius:var(--radius-lg);
  padding:26px 24px;
  transition:transform .3s var(--ease),box-shadow .3s var(--ease),background .3s;
}
.value-card:hover{
  transform:translateY(-4px);
  background:#fff;
  box-shadow:var(--shadow-md);
}
.value-icon{
  width:44px;height:44px;
  border-radius:14px;
  background:var(--white);
  color:var(--green-600);
  display:grid;
  place-items:center;
  margin-bottom:16px;
  box-shadow:var(--shadow-sm);
}
.value-icon svg{width:21px;height:21px}
.value-card h3{font-size:1rem;margin-bottom:8px;color:var(--green-900)}
.value-card p{font-size:.86rem;color:var(--muted);line-height:1.65}

/* ============================================================
   7. STEPS
============================================================ */
.steps{
  position:relative;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}
.steps::before{
  content:'';
  position:absolute;
  top:46px;
  left:16%;
  right:16%;
  height:2px;
  background:repeating-linear-gradient(to right,var(--green-300) 0 8px,transparent 8px 18px);
  z-index:0;
}
.step{
  position:relative;
  z-index:1;
  background:var(--white);
  border:1px solid var(--line);
  border-radius:var(--radius-lg);
  padding:28px 24px 26px;
  transition:transform .3s var(--ease),box-shadow .3s var(--ease);
}
.step:hover{transform:translateY(-5px);box-shadow:var(--shadow-md)}
.step-num{
  display:grid;
  place-items:center;
  width:50px;height:50px;
  margin:0 0 18px;
  border-radius:50%;
  background:var(--green-700);
  color:#fff;
  font-weight:800;
  font-size:.95rem;
  box-shadow:0 12px 22px -12px rgba(63,107,80,.9);
  border:4px solid var(--white);
}
.step h3{font-size:1.05rem;margin-bottom:9px;color:var(--green-900)}
.step p{font-size:.86rem;color:var(--muted);line-height:1.65;margin-bottom:14px}
.step-list{
  list-style:none;
  display:grid;
  gap:8px;
  padding-top:14px;
  border-top:1px dashed var(--green-200);
}
.step-list li{
  display:flex;
  align-items:flex-start;
  gap:9px;
  font-size:.78rem;
  color:var(--green-800);
  line-height:1.5;
}
.step-list li svg{width:14px;height:14px;flex:none;margin-top:2px;color:var(--green-500)}

/* ============================================================
   8. FEATURES
============================================================ */
.feature-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}
.feature-card{
  position:relative;
  background:var(--white);
  border:1px solid var(--line);
  border-radius:var(--radius-lg);
  padding:28px 24px 26px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  transition:transform .3s var(--ease),box-shadow .3s var(--ease),border-color .3s;
}
.feature-card::after{
  content:'';
  position:absolute;
  top:-60px;right:-60px;
  width:150px;height:150px;
  border-radius:50%;
  background:var(--green-50);
  transition:transform .5s var(--ease);
}
.feature-card:hover{
  transform:translateY(-5px);
  box-shadow:var(--shadow-md);
  border-color:var(--green-200);
}
.feature-card:hover::after{transform:scale(1.2)}
.feature-icon{
  position:relative;
  z-index:1;
  width:50px;height:50px;
  border-radius:16px;
  background:var(--green-100);
  color:var(--green-700);
  display:grid;
  place-items:center;
  margin-bottom:18px;
}
.feature-icon svg{width:23px;height:23px}
.feature-card h3{
  position:relative;
  z-index:1;
  font-size:1.08rem;
  margin-bottom:9px;
  color:var(--green-900);
}
.feature-card > p{
  position:relative;
  z-index:1;
  font-size:.86rem;
  color:var(--muted);
  line-height:1.65;
  margin-bottom:14px;
}
.feature-list{
  position:relative;
  z-index:1;
  list-style:none;
  display:grid;
  gap:8px;
  padding:14px 0;
  border-top:1px dashed var(--green-200);
  border-bottom:1px dashed var(--green-200);
  margin-bottom:16px;
  flex:1;
}
.feature-list li{
  display:flex;
  align-items:flex-start;
  gap:9px;
  font-size:.79rem;
  color:var(--green-800);
  line-height:1.5;
}
.feature-list li svg{width:13px;height:13px;flex:none;margin-top:3px;color:var(--green-500)}
.feature-tag{
  position:relative;
  z-index:1;
  display:inline-block;
  align-self:flex-start;
  padding:5px 13px;
  border-radius:999px;
  background:var(--green-50);
  color:var(--green-600);
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.05em;
  text-transform:uppercase;
}

/* ============================================================
   9. E-BOOK
============================================================ */
.ebook-section{
  background:linear-gradient(180deg,var(--cream) 0%,var(--green-50) 100%);
  position:relative;
  overflow:hidden;
}
.ebook-section::before{
  content:'';
  position:absolute;
  top:-120px;right:-120px;
  width:380px;height:380px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(185,212,180,.5),transparent 70%);
  pointer-events:none;
}

.ebook-showcase{
  position:relative;
  display:grid;
  grid-template-columns:.85fr 1.15fr;
  gap:clamp(36px,5vw,72px);
  align-items:center;
}

.ebook-visual{
  position:relative;
  display:flex;
  justify-content:center;
  perspective:1200px;
}

.ebook-book{
  position:relative;
  width:100%;
  max-width:280px;
  aspect-ratio:3/4;
  border-radius:6px 12px 12px 6px;
  overflow:hidden;
  box-shadow:
    0 30px 60px -20px rgba(34,57,44,.5),
    0 12px 24px -8px rgba(34,57,44,.3),
    -8px 0 0 -1px rgba(255,255,255,.6),
    -10px 0 0 -2px rgba(34,57,44,.15),
    -20px 0 20px -8px rgba(34,57,44,.25);
  transform:rotateY(-8deg) rotateX(2deg);
  transition:transform .6s var(--ease),box-shadow .6s var(--ease);
  animation:bookFloat 7s ease-in-out infinite;
}
@keyframes bookFloat{
  0%,100%{transform:rotateY(-8deg) rotateX(2deg) translateY(0)}
  50%{transform:rotateY(-8deg) rotateX(2deg) translateY(-10px)}
}
.ebook-book:hover{
  transform:rotateY(-4deg) rotateX(1deg) translateY(-6px);
  box-shadow:
    0 40px 70px -22px rgba(34,57,44,.55),
    0 16px 30px -10px rgba(34,57,44,.35),
    -8px 0 0 -1px rgba(255,255,255,.65),
    -10px 0 0 -2px rgba(34,57,44,.15),
    -24px 0 24px -10px rgba(34,57,44,.28);
}
.ebook-book svg{width:100%;height:100%;display:block}

.ebook-flag{
  position:absolute;
  top:-12px;
  right:-12px;
  z-index:2;
  padding:8px 14px;
  background:var(--green-700);
  color:#fff;
  font-size:.68rem;
  font-weight:800;
  letter-spacing:.08em;
  text-transform:uppercase;
  border-radius:999px;
  box-shadow:0 12px 24px -10px rgba(63,107,80,.8);
  transform:rotate(4deg);
}

.ebook-info h2{
  font-size:clamp(1.7rem,3.2vw,2.3rem);
  margin-bottom:16px;
}
.ebook-info .ebook-sub{
  font-size:1.02rem;
  color:var(--muted);
  line-height:1.7;
  margin-bottom:24px;
}

.ebook-highlights{
  list-style:none;
  display:grid;
  gap:12px;
  margin-bottom:26px;
}
.ebook-highlights li{
  display:flex;
  align-items:flex-start;
  gap:11px;
  font-size:.9rem;
  color:var(--ink);
  line-height:1.55;
}
.ebook-highlights li svg{
  width:20px;height:20px;
  flex:none;
  margin-top:1px;
  color:var(--green-600);
}

.ebook-chapters{
  background:var(--white);
  border:1px solid var(--line);
  border-radius:var(--radius-md);
  padding:18px 20px;
  margin-bottom:26px;
}
.ebook-chapters h4{
  font-size:.78rem;
  color:var(--green-700);
  letter-spacing:.1em;
  text-transform:uppercase;
  font-weight:700;
  margin-bottom:12px;
}
.ebook-chapters ol{
  list-style:none;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px 20px;
}
.ebook-chapters li{
  display:flex;
  align-items:center;
  gap:9px;
  font-size:.82rem;
  color:var(--ink);
  line-height:1.4;
}
.ebook-chapters li span{
  display:grid;
  place-items:center;
  width:22px;height:22px;
  flex:none;
  border-radius:50%;
  background:var(--green-100);
  color:var(--green-700);
  font-size:.68rem;
  font-weight:800;
}

.ebook-buy{
  display:flex;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;
  padding:22px 24px;
  background:var(--white);
  border:1px solid var(--line);
  border-radius:var(--radius-lg);
  box-shadow:var(--shadow-sm);
}
.ebook-buy-price{
  display:flex;
  flex-direction:column;
  gap:2px;
  min-width:120px;
}
.ebook-buy-price small{
  font-size:.78rem;
  color:var(--muted);
}
.ebook-buy-price small s{
  color:var(--muted);
  opacity:.7;
}
.ebook-buy-price strong{
  font-size:1.6rem;
  font-weight:800;
  color:var(--green-800);
  letter-spacing:-.02em;
  line-height:1.1;
}
.ebook-buy-price strong em{
  font-style:normal;
  color:var(--green-600);
  font-size:.95rem;
  font-weight:700;
}

.ebook-buy-action{
  flex:1;
  min-width:200px;
  display:flex;
  flex-direction:column;
  gap:8px;
}
.ebook-buy-action .btn{width:100%}
.ebook-trust{
  display:flex;
  align-items:center;
  gap:6px;
  justify-content:center;
  font-size:.74rem;
  color:var(--muted);
  line-height:1.4;
}
.ebook-trust svg{
  width:14px;height:14px;
  color:var(--green-500);
  flex:none;
}

/* ============================================================
   10. BONUS (Q&A)
============================================================ */
.bonus-card{
  position:relative;
  background:linear-gradient(150deg,#fff 0%,var(--green-50) 100%);
  border:1px solid var(--green-100);
  border-radius:clamp(24px,3vw,32px);
  padding:clamp(32px,4.5vw,56px) clamp(24px,4vw,52px);
  overflow:hidden;
}
.bonus-card::before{
  content:'';
  position:absolute;
  bottom:-160px;left:-120px;
  width:400px;height:400px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(127,174,135,.18),transparent 70%);
  pointer-events:none;
}

.bonus-badge{
  position:relative;
  z-index:1;
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:7px 16px;
  background:var(--green-700);
  color:#fff;
  border-radius:999px;
  font-size:.75rem;
  font-weight:700;
  letter-spacing:.05em;
  text-transform:uppercase;
  margin-bottom:22px;
  box-shadow:0 12px 22px -12px rgba(63,107,80,.7);
}

.bonus-grid{
  position:relative;
  z-index:1;
  display:grid;
  grid-template-columns:1.15fr .85fr;
  gap:clamp(32px,4.5vw,60px);
  align-items:center;
}

.bonus-content h2{
  font-size:clamp(1.6rem,3vw,2.15rem);
  margin-bottom:14px;
}
.bonus-lead{
  font-size:1rem;
  color:var(--muted);
  line-height:1.7;
  margin-bottom:24px;
}
.bonus-lead strong{
  color:var(--green-800);
}

.bonus-list{
  list-style:none;
  display:grid;
  gap:16px;
  margin-bottom:28px;
}
.bonus-list li{
  display:flex;
  align-items:flex-start;
  gap:14px;
}
.bonus-list-icon{
  width:42px;height:42px;
  flex:none;
  border-radius:13px;
  background:var(--white);
  color:var(--green-600);
  display:grid;
  place-items:center;
  box-shadow:var(--shadow-sm);
}
.bonus-list-icon svg{width:20px;height:20px}
.bonus-list li strong{
  display:block;
  font-size:.95rem;
  color:var(--green-900);
  margin-bottom:3px;
}
.bonus-list li p{
  font-size:.85rem;
  color:var(--muted);
  line-height:1.55;
}

.bonus-actions{
  display:flex;
  flex-direction:column;
  gap:10px;
  max-width:460px;
}
.bonus-actions .btn{width:100%}
.bonus-note{
  font-size:.78rem;
  color:var(--muted);
  text-align:center;
  line-height:1.5;
}

/* Chat mockup */
.chat{
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--radius-lg);
  padding:20px;
  box-shadow:var(--shadow-lg);
  max-width:400px;
  margin-inline:auto;
}
.chat-head{
  display:flex;
  align-items:center;
  gap:11px;
  padding-bottom:14px;
  border-bottom:1px solid var(--line);
  margin-bottom:16px;
}
.chat-avatar{
  width:40px;height:40px;
  flex:none;
  border-radius:50%;
  background:linear-gradient(140deg,var(--green-600),var(--green-800));
  color:#fff;
  display:grid;
  place-items:center;
  font-weight:800;
  font-size:.92rem;
}
.chat-head strong{display:block;font-size:.88rem;color:var(--green-900)}
.chat-head small{
  display:flex;
  align-items:center;
  gap:6px;
  font-size:.7rem;
  color:var(--green-600);
  font-weight:600;
}
.chat-head small::before{
  content:'';
  width:6px;height:6px;
  border-radius:50%;
  background:#5FBF7A;
}
.chat-body{display:flex;flex-direction:column;gap:9px}
.bubble{
  max-width:88%;
  padding:10px 14px;
  font-size:.81rem;
  line-height:1.55;
  border-radius:15px;
}
.bubble.in{
  align-self:flex-start;
  background:var(--green-50);
  color:var(--green-900);
  border-bottom-left-radius:5px;
}
.bubble.out{
  align-self:flex-end;
  background:var(--green-700);
  color:#fff;
  border-bottom-right-radius:5px;
}
.chat-foot{
  display:flex;
  align-items:center;
  gap:9px;
  margin-top:16px;
  padding-top:14px;
  border-top:1px solid var(--line);
  font-size:.72rem;
  color:var(--muted);
}
.chat-foot svg{width:14px;height:14px;color:var(--green-500);flex:none}

/* ============================================================
   11. FINAL CTA
============================================================ */
.cta-panel{
  position:relative;
  overflow:hidden;
  background:linear-gradient(150deg,var(--green-800),var(--green-900));
  border-radius:clamp(24px,3vw,36px);
  padding:clamp(40px,5vw,60px) clamp(26px,4vw,48px);
  color:#fff;
  text-align:center;
}
.cta-panel::before{
  content:'';
  position:absolute;
  top:-200px;right:-120px;
  width:400px;height:400px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(185,212,180,.35),transparent 70%);
  pointer-events:none;
}
.cta-inner{position:relative;z-index:1}
.cta-panel h2{
  color:#fff;
  font-size:clamp(1.5rem,3vw,2.1rem);
  max-width:600px;
  margin:0 auto 14px;
}
.cta-panel p{
  color:rgba(255,255,255,.78);
  max-width:500px;
  margin:0 auto 26px;
  font-size:.95rem;
  line-height:1.7;
}
.cta-actions{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  justify-content:center;
}

/* ============================================================
   12. FOOTER
============================================================ */
.footer{
  background:var(--green-900);
  color:rgba(255,255,255,.7);
  padding:clamp(44px,6vw,64px) 0 0;
}
.footer-grid{
  display:grid;
  grid-template-columns:1.6fr 1fr 1fr;
  gap:clamp(28px,4vw,56px);
  padding-bottom:40px;
}
.footer .logo-text{color:#fff}
.footer .logo-mark circle{fill:rgba(255,255,255,.12)}
.footer-desc{
  margin-top:16px;
  font-size:.86rem;
  line-height:1.7;
  max-width:320px;
  color:rgba(255,255,255,.6);
}
.footer h4{
  color:#fff;
  font-size:.78rem;
  letter-spacing:.12em;
  text-transform:uppercase;
  margin-bottom:16px;
  font-weight:700;
}
.footer ul{list-style:none;display:grid;gap:10px}
.footer ul a{
  font-size:.86rem;
  color:rgba(255,255,255,.65);
  text-decoration:none;
  transition:color .22s;
}
.footer ul a:hover{color:#fff}
.footer-contact{
  display:inline-flex;
  align-items:center;
  gap:9px;
  font-size:.86rem;
  color:rgba(255,255,255,.75);
  text-decoration:none;
  transition:color .22s;
}
.footer-contact:hover{color:#fff}
.footer-contact svg{width:15px;height:15px;color:var(--green-400)}

.socials{display:flex;gap:10px;margin-top:20px}
.socials a{
  width:38px;height:38px;
  border-radius:11px;
  display:grid;
  place-items:center;
  background:rgba(255,255,255,.07);
  color:rgba(255,255,255,.8);
  text-decoration:none;
  transition:background .25s,transform .25s,color .25s;
}
.socials a:hover{
  background:var(--green-600);
  color:#fff;
  transform:translateY(-3px);
}
.socials svg{width:17px;height:17px}

.footer-bottom{
  border-top:1px solid rgba(255,255,255,.1);
  padding:20px 0 24px;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  align-items:center;
  justify-content:space-between;
  font-size:.76rem;
  color:rgba(255,255,255,.45);
}

/* ============================================================
   13. REVEAL
============================================================ */
[data-reveal]{
  opacity:0;
  transform:translateY(22px);
  transition:opacity .7s var(--ease),transform .7s var(--ease);
  will-change:opacity,transform;
}
[data-reveal].in{opacity:1;transform:none}

.value-grid [data-reveal]:nth-child(2),
.steps [data-reveal]:nth-child(2),
.feature-grid [data-reveal]:nth-child(2){transition-delay:.1s}

.value-grid [data-reveal]:nth-child(3),
.steps [data-reveal]:nth-child(3),
.feature-grid [data-reveal]:nth-child(3){transition-delay:.2s}

/* ============================================================
   14. RESPONSIVE
============================================================ */
@media (max-width:900px){
  .nav-toggle{display:flex}
  .nav-links{
    position:absolute;
    top:calc(100% + 10px);
    left:16px;
    right:16px;
    flex-direction:column;
    align-items:stretch;
    gap:4px;
    background:#fff;
    border-radius:22px;
    padding:14px;
    box-shadow:0 30px 60px -30px rgba(34,57,44,.45);
    border:1px solid var(--line);
    display:none;
  }
  .nav-links.open{display:flex}
  .nav-links a{padding:11px 14px;border-radius:12px;font-size:.92rem}
  .nav-links a::after{display:none}
  .nav-links a:hover{background:var(--green-50)}
  .nav-links a.is-active{background:var(--green-50)}

  .hero-grid{grid-template-columns:1fr;gap:40px}
  .hero p.hero-desc{max-width:none}
  .hero-art{max-width:380px;order:2}
  .fc-1{left:-2%;top:4%}
  .fc-2{right:-2%;bottom:4%}

  .about-grid{grid-template-columns:1fr;gap:20px}
  .value-grid{grid-template-columns:1fr;gap:14px}

  .steps{grid-template-columns:1fr;gap:16px}
  .steps::before{display:none}
  .step{padding:26px 22px}

  .feature-grid{grid-template-columns:1fr;gap:16px}

  .ebook-showcase{grid-template-columns:1fr;gap:32px}
  .ebook-book{max-width:220px}
  .ebook-chapters ol{grid-template-columns:1fr}

  .bonus-grid{grid-template-columns:1fr;gap:32px}

  .footer-grid{grid-template-columns:1fr 1fr;gap:32px}
  .footer-brand{grid-column:1 / -1}
}

@media (max-width:560px){
  .container{padding-inline:18px}

  .hero{padding-top:20px}
  .hero-actions{flex-direction:column;align-items:stretch}
  .hero-actions .btn{width:100%}

  .float-card{padding:9px 11px;gap:8px;border-radius:13px}
  .ring{width:36px;height:36px}

  .value-card,
  .feature-card,
  .step{padding:24px 20px}

  .chat{padding:16px}
  .bubble{font-size:.78rem}

  .cta-actions{flex-direction:column}
  .cta-actions .btn{width:100%}

  .ebook-book{max-width:190px}
  .ebook-flag{top:-8px;right:-8px;padding:6px 11px;font-size:.62rem}

  .ebook-buy{
    flex-direction:column;
    align-items:stretch;
    text-align:center;
    padding:20px;
  }
  .ebook-buy-price{align-items:center}

  .bonus-actions{max-width:none}
  .bonus-card{padding:28px 20px}

  .footer-grid{grid-template-columns:1fr;gap:28px}
  .footer-bottom{flex-direction:column;align-items:flex-start}
}

@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{
    animation-duration:.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:.001ms !important;
  }
  [data-reveal]{opacity:1;transform:none}
  .ebook-book{transform:none !important;animation:none !important}
}
