importScripts("https://www.gstatic.com/firebasejs/6.4.0/firebase.js");

var firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(' Received background message ', payload);

  var sender = JSON.parse(payload.data.message);
  var notificationTitle = 'CometChat message';
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
