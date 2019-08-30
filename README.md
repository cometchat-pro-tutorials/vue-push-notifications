# Build a Vue chat app

Read the full tutorial here:

>> Not yet published

This application detailed the step by step guide on how add push notifications to your Vue chat app.

Take a look at the screenshot below:

<img src="screenshots/screenshot_1.png">


## Technology

This demo uses:
* [CometChat](https://cometchat.com/)
* [Vuejs](https://vuejs.org/)


## Running the demo
To run the demo follow these steps:

1. Head to the [CometChat dashboard](https://app.cometchat.com/) (you'll need to create a free account if you haven't already)
2. From the dashboard, create a new app called "vue-group-chat"
3. Once created, click the button **Explore**
4. Click **API Keys** on the left-hand-side and note the automatically-generated Full access API Key and the application ID as well
5. Go to the **Groups** tab and note the GUID of the group automatically created by CometChat
6. Download the repository [here](https://github.com/yemiwebby/vue-group-chat-app/archive/master.zip) or by running `git clone https://github.com/yemiwebby/vue-group-chat-app.git`
7. Run `npm install` to install all the project's dependencies
8. Create a `.env` file with the root folder of the project and paste the following content in it:

```
VUE_APP_COMMETCHAT_API_KEY=YOUR_API_KEY	
VUE_APP_COMMETCHAT_APP_ID=YOUR_APP_ID
VUE_APP_COMMETCHAT_GUID=YOUR_GROUP_GUID
```
Replace `YOUR_API_KEY`, `YOUR_APP_ID` and `YOUR_GROUP_GUID` with your API KEY, APP ID and GUID as obtained from your CometChat dashboard.

9. Run `npm run serve` to start the application and navigate to `http://localhost:8080` to view the app

<img src="screenshots/screenshot_2.png">

10. Open the application in two separate windows and log in with any two of the test users: superhero1, superhero2, or superhero3

<img src="screenshots/screenshot_3.png">

11. Once you are able to log in from both window, type a message and hit `Enter` on your keyboard to start a chat

<img src="screenshots/screenshot_4.png">

<img src="screenshots/screenshot_1.png">


## Useful links
* 🏠 [CometChat Homepage](https://www.cometchat.com/pro)
* 🚀 [Create your free account](https://app.cometchat.com/#/apps)
* 📚 [Documentation](https://prodocs.cometchat.com/docs)
* 👾 [GitHub](https://github.com/CometChat-Pro)
