<template>
    <div>
        <div class="row  app-install">
              <div class="col-1"> </div>
              <div class="col-1">
                <div class="logo-app">
                  <img src="../../../public/images/iso.png" alt="exum" style="width: 100%;"> 
                </div> 
              </div>
              <div class="col-7">
                <div class="row">
                   <div class="col-12">
                      <spam class="exum-app-tittle">Exum</spam> 
                   </div>
                   <div class="col-12 exum-app-info">
                      <span>Instalar la app de <b>EXUM</b></span>
                   </div>
                </div>
              </div>
              <div class="col-2 b-install">
                <q-btn size="xs" rounded  style="background: #2E7CF6; color: #fff" label="Instalar" @click="link()" />
              </div>
              <div class="col-1"> </div>
        </div>

         <div class="row justify-center  header">
              <div class="col-1"></div>
              <div class="col-5">
                    <img src="../../../public/images/logotipo.png" alt="exum" style="width: 40%;">             
               </div>
              <div class="col-5 session">
                   <q-btn size="md"  style="background: #fff; color: #68D9A9" label="Acceder" @click="Showsession()" />      
              </div> 
             <div class="col-1 "></div>
           </div>
      

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
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({

    name: 'Header-Home',
    data() {
        return {
            leftDrawerOpen: false,
            showInitSession : false
            
        }
        
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
    Showsession(){
      this.showInitSession = true;
    },

    link(){
          this.showNotif("Listo para descargar", 'green-10')
    },
    
  }  
    
})
</script>
<style>


.header{
   justify-content: center;
   align-items: center;
   background-color: #68D9A9;
   border:none;
   padding: 10px 0;

 }
 .app-install{
   background-color: #EEEFF2;
   padding: 10px 0;
   display: none;
   
 }

 .logo-app{
   background-color: #fff;
   width: 80px;
   padding: 10px;
   border: 1px solid #EEEFF2;
   border-radius: 10px;
 }
 .exum-app-tittle{
    font-family: 'ProximaNovaAltRegular';
    font-size: 1.5rem;
    font-weight: 600;
    margin: 10px 0 5px 15px;
    color: #3A455B;
 }

  .exum-app-info{
    font-family: 'ProximaNovaAltRegular';
    font-size: 1.5rem;
    font-weight: 200;
    color: #66728A;
    margin: 0 0 0 15px;
    
 }

 .b-install{

   justify-content:end;
    
 }

 .session{
   display: grid;
   justify-content:end;
 }

 

 @media (max-width: 768px) {
  .app-install{
    display:flex;
  }
  .exum-app-tittle{
      font-size: 1rem;
   }

  .exum-app-info{
       font-size: .8rem;
     }
  .logo-app{
    padding: 5px;
      width: 60px;
  }

    @media (max-width: 425px) {
      .logo-app{
        padding: 5px;
        width: 40px;
      }

    }

  @media (max-width: 320px) {
  .logo-app{
       width: 35px;
     }

  .exum-app-tittle{
    font-size: .8rem;
 }

  .exum-app-info{
    font-size: .6rem;  
 }

  }

 }

</style>
