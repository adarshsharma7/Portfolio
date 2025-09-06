// Alternative: use element.style.display
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openResumeModal');
  const resumeModal = document.getElementById('resumeModal'); // backdrop element
  const closeBtn = document.getElementById('closeModal');
  const inlineBtn = document.getElementById('toggleInline');
  const inlineBox = document.getElementById('inlineResume');

  // ensure hidden via inline style
  if (resumeModal) resumeModal.style.display = 'none';

  function showModal() {
    if (!resumeModal) return;
    resumeModal.style.display = 'flex'; // (backdrop uses flex in CSS)
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function hideModal() {
    if (!resumeModal) return;
    resumeModal.style.display = 'none';
    document.body.style.overflow = '';
    openBtn?.focus();
  }

  openBtn?.addEventListener('click', (e) => { e.preventDefault(); showModal(); });
  closeBtn?.addEventListener('click', (e) => { e.preventDefault(); hideModal(); });
  resumeModal?.addEventListener('click', (e) => { if (e.target === resumeModal) hideModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && resumeModal && resumeModal.style.display !== 'none') hideModal(); });

  if (inlineBtn && inlineBox) {
    // toggle inline via style
    inlineBtn.addEventListener('click', () => {
      const shown = inlineBox.style.display && inlineBox.style.display !== 'none';
      inlineBox.style.display = shown ? 'none' : 'block';
      inlineBox.setAttribute('aria-hidden', String(shown));
      inlineBtn.setAttribute('aria-expanded', String(!shown));
      inlineBtn.textContent = !shown ? '🔼 Hide / Show Resume Inline' : '🔽 Show / Hide Resume Inline';
      if (!shown) inlineBox.scrollIntoView({ behavior: 'smooth' });
    });
  }

//   document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', function (e) {
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       e.preventDefault();    
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

});
