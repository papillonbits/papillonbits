(function(module) {
  document.addEventListener('details:toggled', function(event) {
    if (event.detail.open && event.target.classList.contains('styleguide-example')) {
      // Restart the animation event when it's toggled
      event.target.classList.remove('open', 'Details--on')
    }
  })
})(this);
