<template>
<div class="bg">
  <div class="container mt-4">
    <div class="container text-center">
      <h1>Productos existentes</h1>
    </div>
    <div class="row">
      <div class="col-6">
        <p class="mt-3">Pagina numero: {{ currentPage }}</p>
      </div>
      <div class="col-6 text-right">
        <b-button variant="primary" href="/productos/crear">Nuevo</b-button>
      </div>
    </div>
    <div class="overflow-auto">
      <div>
        <b-table responsivestriped hover :fields="fields" :items="productos" id="list_products" :per-page="perPage" :current-page="currentPage" small>
          <template slot="acciones" slot-scope="row"> <!-- row trae los datos  y en este caso el id -->
            <b-button v-b-modal.modal-prevent-closing variant="info" @click="asignar(row)" class="mr-2" size="sm">Editar</b-button>
            <b-button size="sm" @click='eliminar(row.item.id)' class="mr-2" variant="danger" type="button">Eliminar</b-button>
          </template>
        </b-table>
        <b-modal id="modal-prevent-closing" ref="modal" title="Editar Producto"  @show="resetModal" @hidden="resetModal" @ok="handleOk">
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group  :state="imagenState" label="imagen" label-for="image-input" invalid-feedback="Se requiere una imagen">
                <b-form-input :state="imagenState" id="imagen"  required></b-form-input>
              </b-form-group>
             <b-form-group  :state="nombreState" label="Nombre" label-for="name-input" invalid-feedback="Nombre es requerido">
                <b-form-input :state="nombreState" id="nombre"  required></b-form-input>
              </b-form-group>
              <b-form-group  :state="precioState" label="Precio" label-for="precio-input" invalid-feedback="Precio es requerido">
                <b-form-input :state="precioState" id="precio"   required></b-form-input>
              </b-form-group>
              <b-form-group :state="cantidadState" label="Cantidad" label-for="cantidad-input" invalid-feedback="Cantidad es requerida">
                <b-form-input :state="cantidadState" id="cantidad" required></b-form-input>
              </b-form-group>
          </form>
       </b-modal>

       <b-modal id="hecho" 
          size='sm'
          buttonSize='sm'
          okVariant='success'
          headerClass='p-2 border-bottom-0'
          footerClass= 'p-2 border-top-0'
        
       >{{ String(msg) }}</b-modal>
      </div>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="list_products"></b-pagination>
    </div>
  </div>
  </div>
</template>

<script>

import { db } from "../../services/firebase";

var lec=null;

export default {

  asyncData() {
    return db
      .collection("productos")
      .get()
      .then(productosSnap => {
        let productos = [];
        productosSnap.forEach(value => {
          productos.push({id:value.id,...value.data()});
        });
        return {
          perPage: 10,
          currentPage: 1,
          productos
        };
      });
  },
  computed: {
    rows() {
      return this.productos.length;
    }
  },
  data() {
    return {
      msg:null,
      nombreState: null,
      precioState:null,
      cantidadState:null,
      fields: ["imagen", "nombre", "precio", "cantidad", "acciones"],
    };
  },
  methods: {

    eliminar(id) {
      let index;
      this.productos.map((value,key)=>{
        if(value.id==id){
          index=key;
        }
      });
      db.collection("productos").doc(id).delete().then(()=>{
        this.productos.splice(index,1);
      });
          this.msg = 'El producto ha eliminado!';
            this.$root.$emit("bv::show::modal", "hecho");("Eliminado");

    },
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nombreState = valid ? 'valid' : 'invalid'
        this.precioState = valid ? 'valid' : 'invalid'
        this.cantidadState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.nombreState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
      //this.$root.$emit("bv::show::modal", "hecho");
          let verificador=null;

          db.collection("productos").doc(lec).update({
              nombre:nombre.value,
              precio: precio.value,
              cantidad: cantidad.value
            }).catch(function(error){
              alert("Error de conexion "+ error);
            });
        this.msg = 'El producto ha sido actualizado!';
        this.$root.$emit("bv::show::modal", "hecho");

        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      },
      asignar(row){
        lec = row.item.id;
        nombre.value = row.item.nombre;
        precio.value = row.item.precio;
        cantidad.value = row.item.cantidad;

      }
 
  }
};


</script>


<style>
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("https://st3.depositphotos.com/1049573/15331/v/1600/depositphotos_153312080-stock-illustration-white-abstract-geometric-seamless-pattern.jpg");

    /* Half height */
    height: 50%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
