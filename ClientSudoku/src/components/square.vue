<template>
    <ion-button v-if="InitialValue === '0'" fill="outline">{{value}}</ion-button>
    <ion-button v-else fill="outline" :disabled="true">{{value}}</ion-button>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SquareCell',
  props: ["InitialValue"],
  components: {
    IonButton,
  },
  data() {
      return {
        value: this.InitialValue === '0' ? '' : this.InitialValue
      }
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