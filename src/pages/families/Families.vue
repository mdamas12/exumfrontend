<template>
  <q-page>
     <div class="row justify-center">
         <div class="col-8">
             <h3>pagina familias</h3>
         </div>
     </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import FamiliesService from '../../services/families/families.services'
import { Loading } from "quasar";

export default Vue.extend({
  data () {
    return {

    }
  },
  methods: {
    showNotif (message, color) {
      this.$q.notify({
        message: message,
        color: color,
        actions: [
          { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
        ]
      })
    },
  }
})
</script>
