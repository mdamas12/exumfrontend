<template>
     <div class="sec-footer">
       <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-11">
                <img class="logo-footer" src="../../../public/images/logo-footer.png" alt="exum" style="">     
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-1"></div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6"> 
                <div class="row">
                    <div class="col-12 ">
                      <p class="tittle-footer">Partners</p>
                    </div>
                    <div class="col-12">
                     <a class="partner-name" href="#"><img src="../../../public/images/north.png" alt="exum" style=""> </a>
                    </div>
                     <div class="col-12">
                     <a class="partner-name" href=""><img src="../../../public/images/sanmatech.png" alt="exum" style=""></a>
                    </div>
                  </div>
              </div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6"> 
                <div class="row">
                    <div class="col-12 ">
                      <p class="tittle-footer">Exum para</p>
                    </div>
                    <div class="col-12">
                     <a class="partner-name" href="#">Restaurantes </a>
                    </div>
                     <div class="col-12">
                     <a class="partner-name" href="#">Compradores particulares</a>
                    </div>
                    <div class="col-12">
                     <a class="partner-name" href="#">Distibuidores</a>
                    </div>
                    
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6"> 
                <div class="row">
                    <div class="col-12 ">
                      <p class="tittle-footer">Ayuda</p>
                    </div>
                    <div class="col-12">
                     <a class="partner-name" href="#">FAQ</a>
                    </div>
                     <div class="col-12">
                     <a class="partner-name" href="#">Material de Prensa</a>
                    </div>
                    <div class="col-12">
                     <a class="partner-name" href="#">hola@exum.es</a>
                    </div> 
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6"> 
                <div class="row">
                    <div class="col-12 ">
                      <p class="tittle-footer">Social media</p>
                    </div>
                    <div class="col-12">
                     <a class="partner-name" href="#">Facebook</a>
                    </div>
                     <div class="col-12">
                     <a class="partner-name" href="#">Instagram</a>
                    </div>
                    <div class="col-12">
                     <a class="partner-name" href="#">YouTube</a>
                    </div> 
                     <div class="col-12">
                     <a class="partner-name" href="#">LinkedIn</a>
                    </div> 
                </div>
            </div>
     
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
  name: 'footer',
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

.sec-footer{
  background-color: #fff;
  padding: 20px;
  border-radius: 0 ;
  box-shadow: 0 0 0 rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
}

.logo-footer{
    margin-bottom: 20px;
}

.tittle-footer{
  font-family: 'ProximaNovaAltRegular';
  font-size: 1.3rem;
  text-align: left;
  line-height: 2rem;
  font-weight: 700;
  color: #3A455B;
  
}


.partner-name{
  font-family: 'ProximaNovaAltRegular';
  font-size: .8rem;
  text-align: center;
  font-weight: 400;
  color: #3A455B;
  text-decoration: none;
}

.partner-name:hover{
  font-weight: 700;  
}




@media (max-width: 768px) {


}

@media (max-width: 425px) {

.logo-footer{
    width: 55%;
}

}
</style>
