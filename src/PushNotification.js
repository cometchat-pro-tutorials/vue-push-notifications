import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://push-comet.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const initialize = firebase.initializeApp(firebaseConfig);

const messaging = initialize.messaging();
messaging
  .requestPermission()
  .then(() => {
    return messaging.getToken();
  })
  .then(token => {
    var userType = 'group';
    var UID = process.env.VUE_APP_COMMETCHAT_GUID;
    var appId = process.env.VUE_APP_COMMETCHAT_APP_ID;

    var topic = appId + '_' + userType + '_' + UID;

    var url =
      'https://ext-push-notifications.cometchat.com/fcmtokens/' +
      token +
      '/topics/' +
      topic;

    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({appId: appId}),
    })
      .then(response => {
        if (response.status < 200 || response.status >= 400) {
          console.log(
            'Error subscribing to topic: ' +
              response.status +
              ' - ' +
              response.text()
          );
        }
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    if (error.code === 'messaging/permission-blocked') {
      console.log('Please Unblock Notification Request Manually');
    } else {
      console.log('Error Occurred', error);
    }
  });

messaging.onMessage(function(payload) {
  console.log('Receiving foreground message', JSON.parse(payload.data.message));
  var sender = JSON.parse(payload.data.message);
  var notificationTitle = 'New CometChat message';
  var notificationOptions = {
    body: payload.data.alert,
    icon: sender.data.entities.sender.entity.avatar,
  };

  var notification = new Notification(notificationTitle, notificationOptions);
  notification.onclick = function(event) {
    notification.close();
  };
});
