<template>
  <div class="">
    <q-card class="my-card bg-white text-white sec-profile">
      <q-card-section>


        <div class="row justify-center">
          <div class="col-8">
             <p class="tittle-profile">¿Y tú de que perfil vas?</p>
           </div>
        </div>

       <div class="row justify-center">
         <!-- <div class="col- q-pa-md row items-start q-gutter-md" v-for="(category, index) in categories" :key="category.id">-->
          <div class="col-md-3 col-sm-5 col-xs-8 q-pa-md row q-gutter-md flex flex-center"> 
              <div class="row">
                  <div class="col-12 ">
                     <q-img  class="" src="../../../public/images/particular.png" />
                  </div>
                  <div class="col-12">
                     <h6 class="tittle-type">Soy un particular</h6>
                  </div>
                  <div class="col-12">
                     <p class="message">Excelente aplicación para mejorar y agilizar nuestras compras.</p>
                  </div>
                  <div class="col-12 flex flex-center">
                      <q-btn outline style="color: #68D9A9;" label="Quiero saber más" />
                  </div>
                 
                </div>
            </div>

            <div class="col-md-3 col-sm-5 col-xs-8 q-pa-md row q-gutter-md flex flex-center"> 
              <div class="row">
                  <div class="col-12">
                     <q-img  class="" src="../../../public/images/restaurant.png" />
                  </div>
                  <div class="col-12">
                     <h6 class="tittle-type">Soy un restaurante</h6>
                  </div>
                   <div class="col-12">
                     <p class="message">Excelente aplicación para mejorar y agilizar nuestras compras.</p>
                  </div>
                     <div class="col-12 flex flex-center">
                      <q-btn outline style="color: #68D9A9;" label="Quiero saber más" />
                  </div>
                </div>
            </div>

  

        </div>
     
    
      </q-card-section>


      <q-separator dark />

    </q-card>

    
  </div>

</template>

<script lang="ts">
//import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/OptionsComponent.vue';
import Vue from 'vue';
import { Notify } from 'quasar'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'profile',
  // components: { ExampleComponent },
  data() {

      return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      model: "Puerto Ordaz",
      options: [
        'Campo B Ferrominera', 'Unare III', 'Los Olivos', 'Alta Vista', 'Villa Africana'
      ],
      search : "",
      categories : {}

    }
  },
  mounted () {

  },
  methods: {

     GotoCategories(){
        
          this.showNotif("Listo para ir a categorias", 'green-10')
          return
     },
     searching () {
      if (this.search.length > 3) {
        this.showNotif("Listo para ir a ejecutar busqueda", 'green-10')
          } 
     },
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

.sec-profile{
  border-radius: 0 ;
  box-shadow: 0 0 0 rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
}



.tittle-profile{
  font-family: 'ProximaNovaAltRegular';
  font-size: 3.5rem;
  text-align: center;
  line-height: 4rem;
  font-weight: 600;
  color: #3A455B;
  

}
.tittle-type{
  font-family: 'ProximaNovaAltRegular';
  font-size: 1.5rem;
  text-align: center;
  font-weight: 200;
  color: #3A455B;
  margin: 10px;
}

.message{
  font-family: 'ProximaNovaAltRegular';
  font-size: .8rem;
  text-align: center;
  font-weight: 200;
  color: #3A455B;
}




@media (max-width: 768px) {

.tittle-profile{
  font-family: 'ProximaNovaAltRegular';
  font-size: 2.5rem;
  text-align: center;
  line-height: 2rem;
  font-weight: 600;
  color: #3A455B;
  
}

}

@media (max-width: 425px) {

.tittle-profile{
  font-family: 'ProximaNovaAltRegular';
  font-size: 1.1rem;
  text-align: center;
  line-height: 2rem;
  font-weight: 700;
  color: #3A455B;
  
}

}
</style>
