// Make "Contact us" clickable without putting the real address in the page source:
// the mailto: link is only assembled from its separate parts when a visitor clicks.
document.querySelectorAll('.item[data-user]').forEach(function (el) {
  var link = document.createElement('a');
  link.className = 'item is-link';
  link.href = '#';
  link.textContent = el.textContent;
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'mailto:' + el.dataset.user + '@' + el.dataset.domain;
  });
  el.replaceWith(link);
});
