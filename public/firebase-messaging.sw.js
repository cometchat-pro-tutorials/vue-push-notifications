importScripts("https://www.gstatic.com/firebasejs/6.4.0/firebase.js");

var config = {
  /* Config here */
  apiKey: "AIzaSyC3v_c5ebtxga_PGUkO9aIWLJ_1g_5vo0A",
  authDomain: "push-comet.firebaseapp.com",
  databaseURL: "https://push-comet.firebaseio.com",
  projectId: "push-comet",
  storageBucket: "",
  messagingSenderId: "449000161387",
  appId: "1:449000161387:web:1cf36552035eba8c"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(' Received background message ', payload);

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
  //handle click event onClick on Web Push Notification
});
