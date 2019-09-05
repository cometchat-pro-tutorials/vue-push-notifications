import firebase from 'firebase/app';
import 'firebase/messaging';

let firebaseUid = '';

export function initializeFirebase() {
  if (firebase.messaging.isSupported()) {
    const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    databaseURL: "YOUR_FIREBASE_DATABASE_URL",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID"
    };

    firebase.initializeApp(firebaseConfig);

    const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(() => {
    console.log("Have Permission");
    return messaging.getToken();
  })
  .then(token => {
    var userType = 'group';
    var UID = process.env.VUE_APP_COMMETCHAT_GUID;
    var appId = process.env.VUE_APP_COMMETCHAT_APP_ID;

    var topic = appId + '_' + userType + '_' + UID;

    var url = `https://ext-push-notifications.cometchat.com/fcmtokens/${token}/topics/${topic}`;

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
  var sender = JSON.parse(payload.data.message);
  console.log('Receiving foreground message', JSON.parse(payload.data.message));
  // Customize notification here

  if (sender.data.entities.sender.entity.uid !== firebaseUid) {
    var notificationTitle = 'CometChat Pro Notification';
  var notificationOptions = {
    body: payload.data.alert,
    icon: sender.data.entities.sender.entity.avatar,
  };

  var notification = new Notification(notificationTitle, notificationOptions);
  notification.onclick = function(event) {
    notification.close();
    console.log(event);
  };
  }
 });
    
  }
}

export function updateFirebaseLoggedInUser(uid){
  if (firebase.messaging.isSupported()) {
    firebaseUid = uid;
  }
}
