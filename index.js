var webview = document.getElementById('idobata');

webview.addEventListener('newwindow', function(e) {
  e.preventDefault();

  window.open(e.targetUrl);
});
