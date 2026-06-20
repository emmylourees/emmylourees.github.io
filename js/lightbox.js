// Emmylou Rees - lightbox.js
// Opens a full-screen image overlay when a .lightbox-trigger is clicked.
// The overlay markup (.lightbox-overlay) lives in the page HTML.
// Close by clicking the dark backdrop, or pressing Escape.

(function () {

  // Wait for the DOM before doing anything
  document.addEventListener('DOMContentLoaded', function () {

    var overlay = document.getElementById('lightbox');
    if (!overlay) return; // no overlay on this page, do nothing

    var overlayImg = overlay.querySelector('img');

    // --- Open ---
    // Find every element marked as a lightbox trigger
    var triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the full-size image path from data-src
        var src = trigger.getAttribute('data-src');
        var thumbImg = trigger.querySelector('img');
        var alt = thumbImg ? thumbImg.getAttribute('alt') || '' : '';

        overlayImg.src = src;
        overlayImg.alt = alt;

        overlay.classList.add('is-open');

        // Move focus to the overlay for keyboard users
        overlay.focus();
      });
    });

    // --- Close: click the backdrop (but not the image itself) ---
    overlay.addEventListener('click', function (e) {
      if (e.target !== overlayImg) {
        closeOverlay();
      }
    });

    // --- Close: Escape key ---
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeOverlay();
      }
    });

    function closeOverlay() {
      overlay.classList.remove('is-open');
      // Clear src so the old image doesn't flash on next open
      overlayImg.src = '';
      overlayImg.alt = '';
    }

  });

}());
