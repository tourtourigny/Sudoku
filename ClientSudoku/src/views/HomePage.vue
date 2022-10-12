<template>
  <base-page>  
    <ion-content :fullscreen="true">
      <ion-title id="title">Sign in</ion-title>
      <form class="container">
        <label for="username">Username</label>
        <input v-model="username" id="username" placeholder="ex:Frank" required>
        <label for="passwordlogin">Password</label>
        <input v-model="password" id="passwordlogin" type="password" placeholder="ex:password1234" required>
        <ion-button @click="loginVerification" >Submit</ion-button>
      </form>
    </ion-content>
  </base-page>
</template>

<script>
import { IonContent, IonButton, IonTitle, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import BasePage from "./BasePageLayout.vue"

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    BasePage,
    IonButton,
    IonTitle,
  },
  data() {
    return{
      username: null,
      password: null,
      validUsername: "Frank",
      validPassword: "password1234",
    }
  },
  methods: {
    loginVerification() {
      if(this.username !== this.validUsername) { this.presentAlert("Invalid username"); return }
      if(this.password !== this.validPassword) { this.presentAlert("Invalid password"); return }
      this.$router.push("./play")
    },
  }, 
    setup() {
      const presentAlert = async (message) => {
        const alert = await alertController.create({
          header: 'Failed authentification',
          message: message,
          buttons: ['OK'],
        });

        await alert.present();
      };

      return { presentAlert };
    },
});

</script>

<style scoped>
#title{
  text-align: center;
}
.container{
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  padding: 2em;
}
.container > input{
  margin-bottom: 1em;
}
</style>
