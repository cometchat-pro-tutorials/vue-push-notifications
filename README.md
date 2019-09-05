# Build a Vue chat app

Read the full tutorial here:

>> Not yet published

This application detailed the step by step guide on how add push notifications to your Vue chat app using CometChat SDK and Firebase Cloud Messaging.

Take a look at the screenshot below:

<img src="screenshots/notification-shot.png">

## Technology

This demo uses:
* [CometChat](https://cometchat.com/)
* [Vuejs](https://vuejs.org/)
* [Firebase Cloud Messaging](https://firebase.google.com/)


## Running the demo
To run the demo follow these steps:

1. Head to the [CometChat dashboard](https://app.cometchat.com/) (you'll need to create a free account if you haven't already)
2. From the dashboard, create a new app called "new-push-notification"
3. Once created, click the button **Explore**
4. Click **API Keys** on the left-hand-side and note the automatically-generated Full access API Key and the application ID as well
5. Go to the **Groups** tab and note the GUID of the group automatically created by CometChat
6. Enable Push notification extension from the `Extensions menu`
7. Download the repository [here](https://github.com/cometchat-pro-tutorials/vue-push-notifications/archive/master.zip) or by running `git clone https://github.com/cometchat-pro-tutorials/vue-push-notifications.git`
7. Run `npm install` to install all the project's dependencies
8. Create a `.env` file with the root folder of the project and paste the following content in it:

```
VUE_APP_COMMETCHAT_API_KEY=YOUR_API_KEY	
VUE_APP_COMMETCHAT_APP_ID=YOUR_APP_ID
VUE_APP_COMMETCHAT_GUID=YOUR_GROUP_GUID
```
Replace `YOUR_API_KEY`, `YOUR_APP_ID` and `YOUR_GROUP_GUID` with your API KEY, APP ID and GUID as obtained from your CometChat dashboard.

9. Register a Firebase account [here](http://firebase.google.com/) and create a new Firebase project.
10. Add a new web application into your Firebase project
11. Click on the settings menu, then go to the general tab
12. Copy the Firebase config variable similar to this:
```
var firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```
and paste it in `src/pushNotification.js`. Paste only the `messagingSenderId` in `public/firebase-messaging-sw.js`. Ensure to replace the placeholders with the appropriate credentials as obtained from your firebase console.

13. In Firebase settings, click on `Cloud Messaging`tab and copy the server key there.
14. Go back into CometChat PRO dashboard and select the `Extensions` tab from the sidebar and then click on `Actions -> Settings`. Give your notification a title and paste the server key in there.

15. Run `npm run serve` to start the application and navigate to `http://localhost:8080` to view the app

16. Open the application in two separate windows and log in with any two of the test users: superhero1, superhero2, or superhero3

17. Once you are able to log in from both window, type a message and hit `Enter` on your keyboard to start a chat

The push notification will be displayed at the top right corner of your window browser.


## Useful links
* 🏠 [CometChat Homepage](https://www.cometchat.com/pro)
* 🚀 [Create your free account](https://app.cometchat.com/#/apps)
* 📚 [Documentation](https://prodocs.cometchat.com/docs)
* 👾 [GitHub](https://github.com/CometChat-Pro)
