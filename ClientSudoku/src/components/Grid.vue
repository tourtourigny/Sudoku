<template>  
   <ion-buttons>
        <square-cell :InitialValue="3"></square-cell>
        <square-cell :InitialValue="2"></square-cell>
        <square-cell :InitialValue="8"></square-cell>
   </ion-buttons>
</template>

<script>
import { IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import SquareCell from "./square.vue"

export default defineComponent({
  name: 'GridSudoku',
  props: ["GridId"],
  components: {
    IonButtons,
    SquareCell,
  },
});

</script>

<style scoped>

</style>