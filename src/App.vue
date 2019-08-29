<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";

import "./App.css";

export default {
  created() {
    this.initializeApp();
  },

  methods: {
    initializeApp() {
      const { VUE_APP_COMMETCHAT_APP_ID } = process.env
      CometChat.init(VUE_APP_COMMETCHAT_APP_ID).then(
        () => {
          console.log("Initialization completed successfully");
        },
        error => {
          console.log("Initialization failed with error:", error);
        }
      );
    }
  }
};
</script>
