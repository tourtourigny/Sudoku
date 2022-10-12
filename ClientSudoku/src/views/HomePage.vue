<template>
  <base-page>  
    <ion-content :fullscreen="true">
      <ion-button router-link="/play">Play</ion-button>
    </ion-content>
  </base-page>
</template>

<script>
import { IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import BasePage from "./BasePageLayout.vue"

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    BasePage,
    IonButton,
  },
});
</script>

<style scoped>

</style>
