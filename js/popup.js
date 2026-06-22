/* Popup overlay — performance.html (Jack & Allen, Hole, Jeans Funeral) and zines.html (Daily Zines) */

document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('.popup-trigger');
  var overlays = document.querySelectorAll('.popup-overlay');

  function openPopup(id) {
    var popup = document.getElementById(id);
    if (!popup) return;
    popup.hidden = false;
    document.body.style.overflow = 'hidden';
    popup.focus();
  }

  function closeAll() {
    overlays.forEach(function (popup) {
      popup.hidden = true;
    });
    document.body.style.overflow = '';
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openPopup(trigger.dataset.popup);
    });
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPopup(trigger.dataset.popup);
      }
    });
  });

  overlays.forEach(function (popup) {
    popup.addEventListener('click', function (e) {
      if (e.target === popup) closeAll();
    });
    var closeBtn = popup.querySelector('.popup-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeAll);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });
});
