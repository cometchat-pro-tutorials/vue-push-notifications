importScripts("https://www.gstatic.com/firebasejs/6.4.0/firebase.js");

var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://push-comet.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  var sender = JSON.parse(payload.data.message);
  var notificationTitle = 'New CometChat message';
  var notificationOptions = {
    body: payload.data.alert,
    icon: sender.data.entities.sender.entity.avatar,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
});
