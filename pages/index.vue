<template>
  <div>
    
    <h1>INVENTARIO {{msg }}</h1>
    <input type="text" v-model="msg">
 <button @click="guardar" 
   class="btn  btn-primary">Guardar </button>
<b-button variant="primary">Guardar </b-button>
    <table>
      <tr>
        <th>NOMBRE</th>
      </tr>
      <tr v-for="(item,index) in municipios" :key="index">
         
        <td>{{item}}</td>
      </tr>
    </table>
  </div>
</template>
 
<script>


import navbar from '../components/navbar'
//import contacto from './contacto'

export default {
  components: { navbar},
  data() {
    return {
      msg: "giovanny sterling",
      municipios: ["mocoa", "villa", "pitalito"]
    };
  },
  methods:{
      guardar(){
          this.municipios.push(this.msg)
          this.msg=''
        //  alert("guardando")
      }
  }
  };
</script>
<style>
</style>
