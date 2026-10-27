/* ============================================================
   REVIEW & TESTIMONIALS
============================================================ */
.review-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.review-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.review-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--green-100);
  color: var(--green-700);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 18px;
}

.review-meta h4 {
  font-size: 16px;
  color: var(--green-900);
  margin-bottom: 4px;
}

.review-stars {
  color: #F5B041;
  font-size: 14px;
  letter-spacing: 2px;
}

.review-text {
  font-size: 15px;
  color: var(--muted);
  font-style: italic;
  line-height: 1.6;
}

/* Form Review */
.form-review-wrapper {
  background: var(--green-50);
  border: 1px dashed var(--green-300);
  border-radius: var(--radius-lg);
  padding: 32px;
  max-width: 680px;
  margin: 0 auto;
}

.star-rating {
  display: flex;
  gap: 8px;
  font-size: 28px;
  color: var(--green-200);
  cursor: pointer;
  margin-bottom: 16px;
}

.star-rating span.active {
  color: #F5B041;
}

.star-rating span:hover {
  color: #F5B041;
}
