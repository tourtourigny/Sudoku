<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-title>Sudoku</ion-title>
        </ion-header>
            <slot></slot>
        <ion-footer>
            <ion-title>footer</ion-title>
        </ion-footer>
    </ion-page>
</template>

<script>
import { IonHeader, IonPage, IonTitle, IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasePage',
  components: {
    IonHeader,
    IonFooter,
    IonPage,
    IonTitle,
  }
});
</script>

<style scoped>

</style>