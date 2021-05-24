<template>
  <q-page>
     <div class="row justify-center  header-family">
  
          <div class="col-2">
              <img src="../../../public/images/logotipo_green.png" alt="exum">             
          </div>
          <div class="col-2 news">
              <a href="#" class="news-title"><span class="news-icon"><q-icon  name="article" /></span> Ver noticias</a>             
          </div>
          <div class="col-4">
            <q-input class="search"   outlined v-model="search" label="Buscar..."  @keyup="searching()">
              <template v-slot:prepend>
                <q-icon name="search" color="#66728A" />
              </template>
            </q-input>
         </div>
          <div class="col-2 address">
             <span>Av. Ave del Paraiso...</span>             
          </div>
          <div class="col-1 session">
            <q-btn size="md"  style="background: #fff; color: #68D9A9" label="Acceder" @click="Showsession()" />      
          </div> 
        
    </div>

       <div class="row justify-center" style="border: 0;">
         <!-- <div class="col- q-pa-md row items-start q-gutter-md" v-for="(category, index) in categories" :key="category.id">-->
             <div class="col- q-pa-md row items-start q-gutter-md"> 
              <q-card class="my-card card-categories" @click="ShowSubFamilies(1)" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../public/images/meat.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">Alimentación</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
             
            </div>

            <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../public/images/drink.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">Bebidas</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

            <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../public/images/food.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">C.preparada</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

            <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../public/images/health.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">salud y hogar</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

           <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../public/images/shoes.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">retail</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>

             <div class="col- q-pa-md row items-start q-gutter-md"> 
             <q-btn push round @click="GotoCategories()" >
              <q-card class="my-card card-categories" >                
                <q-item> 
                   <div class="row">  
                     <div class="col-12">        
                      <q-item-section>
                        <!--<q-img  :src="category.image"></q-img> -->
                        <img src="../../../public/images/iso.png" alt="">     
                      </q-item-section> 
                       <q-item-section>
                          <!-- <q-item-label class="tittle-cat">{{ category.name}}</q-item-label>-->
                          <q-item-label class="tittle-cat">exum</q-item-label>
                      </q-item-section> 
                      </div>  
                    </div>  
                </q-item>    
              </q-card>
              </q-btn>
            </div>
        </div>
      <q-separator />


      <q-dialog persistent v-model="showInitSession" >
        <q-card class="my-card" style="max-width:100%; width:440px">
          <q-toolbar class="text-bluesito">
            <q-toolbar-title class="title-session">
                Inicia Sesión 
            </q-toolbar-title>
            <q-btn flat icon="close" round v-close-popup />
          </q-toolbar>
          <q-separator />
          <q-item class="q-pt-md">
            <q-item-section>
              <div class="row q-pt-md">
                <div class="col-12 col-md q-px-md">
                <!--<q-input label="Email" v-model="email" class="font-input"></q-input>-->
                  <q-input label="Email"  class="font-input"></q-input>
                </div>
              </div>
              <div class="row q-pt-md">
                <div class="col-12 col-md q-px-md">
                 <!-- <q-input label="Contraseña" v-model="password" :type="isPwd ? 'password' : 'text'" class="font-input"> -->
                  <q-input label="Contraseña" v-model="password" :type="isPwd ? 'password' : 'text'" class="font-input">
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="row q-pt-md">
                <div class="col col-md q-px-md">
                  <a href="" class="enlace-olvido-password">He olvidado mi contraseña</a>
                </div>
              </div>
            </q-item-section>
          </q-item>
          <q-card-actions vertical align="center">
            <q-btn label="Iniciar Sesión" style="background: #fff color: #68D9A9" class="btn-init-session q-mb-md" size="md" ></q-btn>
          </q-card-actions>
          <q-separator />
          <q-item-section>
            <div class="row q-pt-md">
              <div class="col">
                <div class="container text-center q-pa-md">
                  <q-item-label class="label-register">¿No tienes cuenta? </q-item-label>
                  <q-btn flat label="REGÍSTRATE"></q-btn>
                </div>
              </div>
            </div>
          </q-item-section>
        </q-card>
      </q-dialog>   
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
<style>

@font-face {
  font-family: ProximaNovaAltRegular;
  src: url(../../assets/fonts/FontsFree-Net-ProximaNovaAltRegular.ttf);
}

 .header-family{
   justify-content: center;
   align-items: center;
   background-color: #FBFBFC;
   border:none;
   padding: 10px 0;
   border-bottom: #666;
 }
 .news{
   text-align: center;

 }

 .news-title{
    font-family: 'ProximaNovaAltRegular';
    text-decoration: none;
    color: #3A455B;
    font-weight: 500;
 }

 .news-icon{
    font-family: 'ProximaNovaAltRegular';
    text-decoration: none;
    color: #3A455B;
    font-weight: 500;
    font-size: 1.5em;
 }

 .search{
  background-color: #fff;
  color:#939BA9;
  border-radius: 7px;
  margin:10px 0;
}

.search i{
  color: #66728A;
}

.search:hover{
  border: #66728A;
}

.address{
    font-family: 'ProximaNovaAltRegular';
    text-decoration: none;
    color: #3A455B;
    font-weight: 500;
    padding: 0 5px;
    text-align: center;
}

  .session{
   display: grid;
   justify-content:end;
 }


 .card-categories{
  padding: 3% 0 0 0;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  text-align: center;
  align-items: center;
  transition: all .3s;
  cursor: pointer;
}

.card-categories:hover{
  height: 140px;
  width: 140px;
  
}


.card-categories img{
 
  width: 70%;
  margin: 0 auto;
  align-items: center;
}

.card-categories:hover img{

   filter: invert(0.2) sepia(1) hue-rotate(120deg) saturate(380%);
   -webkit-filter: invert(0.2) sepia(1) hue-rotate(120deg) saturate(380%);
 /* -webkit-filter:  hue-rotate(90deg);
  filter:  hue-rotate(90deg);*/
}

.tittle-cat{
  color: #66728A;
  font-weight: 400;
  font-size: .8rem;
  margin: 2px 0 0 0;
}

</style>
