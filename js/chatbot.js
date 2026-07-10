(function () {
  const tryNowBtn = document.getElementById('try-now-btn');

  if (tryNowBtn) {
    tryNowBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.botpress) {
        window.botpress.open();
      }
    });
  }
})();