// Emmylou Rees - main.js
// Shared utilities loaded on every page that includes this file.
// Some pages include this script even if they have no data-rotate elements yet,
// so it's ready to go if rotations are added later.

// -------------------------------------------------------
// Random image rotation utility
//
// How to use:
//   Add data-rotate to any <img> (or other element) you
//   want to receive a small random tilt on page load.
//
//   Example:
//     <img src="..." data-rotate alt="...">
//
//   The element gets a CSS transform: rotate(Xdeg) where X
//   is always between 3 and 7 degrees, in either direction.
// -------------------------------------------------------
function applyRandomRotations() {
  var elements = document.querySelectorAll('[data-rotate]');
  elements.forEach(function (el) {
    // Always 3-7 degrees, randomly positive or negative
    var magnitude = Math.random() * 4 + 3; // 3-7
    var sign = Math.random() < 0.5 ? 1 : -1;
    var deg = (magnitude * sign).toFixed(2);
    el.style.transform = 'rotate(' + deg + 'deg)';
  });
}

// Run once the DOM is ready
document.addEventListener('DOMContentLoaded', applyRandomRotations);
