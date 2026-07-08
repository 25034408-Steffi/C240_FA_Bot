(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
  script.async = true;
  script.onload = function () {
    window.botpressWebChat.init({
      botId: 'YOUR_BOT_ID',
      hostUrl: 'https://cdn.botpress.cloud/webchat/v2',
      messagingUrl: 'https://messaging.botpress.cloud',
      clientId: 'YOUR_CLIENT_ID',
    });
  };
  document.head.appendChild(script);
})();
