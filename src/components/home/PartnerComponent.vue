<template>
  <div class="sec-partner">
       <div class="row">
          <div class="col-3">imagen</div>
            <div class="col-6"> 
                <div class="row">
                    <div class="col-12 ">
                      <p class="tittle-partner">Eres un <span>distribuidor</span>  y <span> quieres vender online</span> en nuestro mercado?</p>
                    </div>
                    <div class="col-12">
                      <p class="message-partner">Descubre los beneficios de estar en EXUM</p>
                    </div>
                    <div class="col-12 flex flex-center">
                       <q-btn style="background: #68D9A9; color: white" label="Hazte Partner" />
                       
                    </div>
                  </div>
              </div>
            <div class="col-3">imagen</div>
        </div>
  </div>

</template>

<script lang="ts">
//import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/OptionsComponent.vue';
import Vue from 'vue';
import { Notify } from 'quasar'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'partner',
  // components: { ExampleComponent },
  data() {

      return {
      search : "",
      categories : {}

    }
  },
  mounted () {

  },
  methods: {


     showNotif(message: string , color: string) {
          this.$q.notify({
            message: message,
            color: color,
            //avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            actions: [
              { label: 'Ok', color: 'white', handler: () => { /* ... */ } }
            ]
          })
     },
  
  }

});

</script>
<style>
@font-face {
  font-family: ProximaNovaAltRegular;
  src: url(../../assets/fonts/FontsFree-Net-ProximaNovaAltRegular.ttf);
}

.sec-partner{
  width: 100%;
  height: auto;
  padding: 50px 0;
  display: block;
  background-color: #3A455B;
  margin: 0 0 20px 0;
}



.tittle-partner{
  font-family: 'ProximaNovaAltRegular';
  font-size: 3.5rem;
  text-align: center;
  line-height: 4rem;
  font-weight: 600;
  color: #68D9A9;
  

}

.tittle-partner span{
  color:#fff;
}


.message-partner{
  font-family: 'ProximaNovaAltRegular';
  font-size: 1.2rem;
  text-align: center;
  font-weight: 200;
  color: #CFD3DD;
}





@media (max-width: 768px) {

.tittle-partner{
  font-family: 'ProximaNovaAltRegular';
  font-size: 2.5rem;
  text-align: center;
  line-height: 3rem;
  font-weight: 600;
  
}

.message-partner{
  font-family: 'ProximaNovaAltRegular';
  font-size: .8rem;
  text-align: center;
  font-weight: 200;
  color: #CFD3DD;
}

}

@media (max-width: 425px) {

.tittle-partner{
  font-family: 'ProximaNovaAltRegular';
  font-size:  1rem;
  text-align: center;
  line-height: 1.5rem;
  font-weight: 600; 
}

.message-partner{
  font-family: 'ProximaNovaAltRegular';
  font-size: .55rem;
  text-align: center;
  font-weight: 400;
  color: #CFD3DD;
}

}
</style>
