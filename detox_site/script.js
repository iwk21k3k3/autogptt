document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
    this.reset();
});
