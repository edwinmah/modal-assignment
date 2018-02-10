(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var mainEl = document.getElementById('main');

    // dialog 1
    var dialogElOne = document.getElementById('dialog-1');
    var dialogOne = new window.A11yDialog(dialogElOne, mainEl);

    // dialog 2
    var dialogElTwo = document.getElementById('dialog-2');
    var dialogTwo = new window.A11yDialog(dialogElTwo, mainEl);
  });
}());