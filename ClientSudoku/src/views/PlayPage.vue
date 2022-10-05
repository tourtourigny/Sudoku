<template>
  <base-page>  
    <ion-content :fullscreen="true">
      <grid-sudoku :GridId="idGrid"></grid-sudoku>
    </ion-content>
  </base-page>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import BasePage from "./BasePageLayout.vue"
import GridSudoku from "../components/Grid.vue"
import { useRoute } from "vue-router"

export default defineComponent({
  name: 'PlayPage',
  components: {
    IonContent,
    BasePage,
    GridSudoku
  },
  setup() {
        const route = useRoute();
        const { idGrid } = route.params;
        return { idGrid };
    },
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>