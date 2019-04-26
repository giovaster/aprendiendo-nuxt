<template>
  <div class="row mt-3">
    <div class="col-sm-6">
      <h2>Listado de categorias</h2>
    </div>

    <div class="col-sm-6">
      <b-button class="primary" href="/categorias/crear">Nuevo</b-button>
    </div>

    <div class="rown mt-2">
      <div class="col-sm-12">
        <b-table responsive striped hover 
        :fields="fields" 
        :items="categorias" id="categorias" 
        :current-page="currentPage"
         :per-page="perPage">
<template slot="acciones" slot-scope="data">

<b-button variant="success">
    Editar
</b-button>
<b-button variant="danger" @click="eliminarCategorias(data.item.id)">
    Eliminar
</b-button>
    accion
</template>
    </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="categorias"
        ></b-pagination>
      </div>
    </div>
  </div> 
</template>

<script>
import { db } from "../../services/firebase";
export default {
  asyncData() {
    return db
      .collection("categorias")
      .get()
      .then(categoriasSnap => {
        let categorias = [];

        categoriasSnap.forEach(value => {
          categorias.push({
            id:value.id,
            ...value.data()
          });
        });

       // console.log(categorias)
        return {
          categorias,
          currentPage: 1,
          perPage: 5
        };
      });
  },
  data() {
    return {
      fields: ["nombre","acciones"]
    };
  },
  computed: {
    rows() {
      return this.categorias.length;
    }
    
  },
  methods:{
      eliminarCategorias(id){
        
         db.collection("categorias").doc(id).delete().then(()=>{
         let index;
         this.categorias.map((value,key)=>{
           if(value.id == id) index = key })
         this.categorias.splice(index,1)
         
        })
      }
  }
};
</script>