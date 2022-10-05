<template>
    <ion-button fill="outline" :disabled=disabled>{{value}}</ion-button>
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
            value: this.InitialValue,
            disabled: false
        }
    },
});

</script>

<style scoped>

</style>