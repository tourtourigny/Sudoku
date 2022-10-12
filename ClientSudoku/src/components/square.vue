<template>
    <ion-button v-if="value === '0'" fill="outline"> </ion-button>
    <ion-button v-else fill="outline" :disabled="true">{{this.value}}</ion-button>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SquareCell',
  props: ["value"],
  components: {
    IonButton,
  },
});
</script>

<style scoped>
ion-button {
  background: rgb(148, 148, 149);
  height: 2em;
  width: 2em;
  margin: 1px;
}
ion-button:focus{
  background: rgb(174, 174, 192);
  transform: scale(1.1);
  transition-duration: 20ms;
}
</style>