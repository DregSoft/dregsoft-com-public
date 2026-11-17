// Make "Contact us" usable without putting the real address in the page source:
// the address is only assembled from its separate parts when a visitor clicks.
// A click opens their mail app AND shows the address (copied if allowed), so it
// still works when no mail client is configured.
document.querySelectorAll('.item[data-user]').forEach(function (el) {
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'item is-link';
  btn.textContent = el.textContent;
  var out = document.createElement('span');
  out.className = 'item contact-out';
  out.setAttribute('role', 'status');
  btn.addEventListener('click', function () {
    var addr = el.dataset.user + '@' + el.dataset.domain;
    out.textContent = addr;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(addr).then(function () {
        out.textContent = addr + ' (copied)';
      }, function () {});
    }
    var subject = el.dataset.subject ? '?subject=' + encodeURIComponent('Question about ' + el.dataset.subject) : '';
    window.location.href = 'mailto:' + addr + subject;
  });
  el.replaceWith(btn);
  btn.after(out);
});
