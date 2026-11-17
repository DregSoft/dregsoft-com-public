// Close the Projects dropdown when clicking elsewhere or pressing Escape.
document.querySelectorAll('details.nav-menu').forEach(function (menu) {
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) menu.removeAttribute('open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.open) {
      menu.removeAttribute('open');
      menu.querySelector('summary').focus();
    }
  });
});
