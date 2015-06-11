var AlertDialog = function() {
  this.alert     = document.getElementById('alert');
  this.backdrop  = document.getElementById('backdrop');
}

AlertDialog.prototype.show = function() {
  this.backdrop.style.display = 'block';
  this.alert.style.display    = 'block';
}

AlertDialog.prototype.hide = function() {
  this.backdrop.style.display = 'none';
  this.alert.style.display    = 'none';
}

var webview     = document.getElementById('idobata'),
    alertDialog = new AlertDialog;

webview.addEventListener('newwindow', function(e) {
  e.preventDefault();

  window.open(e.targetUrl);
});

webview.addEventListener('dialog', function(e) {
  e.preventDefault();

  var dialog = e.dialog;

  alertDialog.show()

  document.querySelector('span.ok').onclick = function() {
    dialog.ok();
    alertDialog.hide()
  };

  document.querySelector('span.no').onclick = function() {
    dialog.cancel();
    alertDialog.hide()
  }
})
