<template>
    <square-cell></square-cell>
   <ion-buttons>
        <square-cell></square-cell>
        <square-cell></square-cell>
        <square-cell></square-cell>
   </ion-buttons>
</template>

<script>
import { IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import SquareCell from "./square.vue"

export default defineComponent({
  name: 'GridSudoku',
  components: {
    IonButtons,
    SquareCell,
  },
});

</script>

<style scoped>

</style>