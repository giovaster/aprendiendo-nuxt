<template>
  <div class="bg">
    <div class="container">
      <div class="col-sm-6">
        <h2>Listado de Categorias</h2>
      </div>
      <div class="col-sm-2">
        <b-button id="nuevo-btn" class="primary" href="/categorias/crear">Nueva</b-button>
        <b-tooltip show target="nuevo-btn">Crea nuevos items</b-tooltip>
      </div>
      <div class="row mt-2">
        <div class="col-sm-12">
          <b-table
            id="categorias"
            responsive
            striped
            hover
            :fields="fields"
            :items="categorias"
            :per-page="perPage"
            :current-page="currentPage"
            small
          >
            <template slot="acciones" slot-scope="data">
              <div>
                <b-button id="editar-btn" variant="success">Editar</b-button>
                <b-tooltip show target="editar-btn">Actualizará la información del item</b-tooltip>
                <b-button variant="danger" id="eliminar-btn" @click="mostrarModal">Eliminar</b-button>
                <b-tooltip show target="eliminar-btn">Eliminará el item seleccionado</b-tooltip>
                <b-modal ref="my-modal" hide-footer title="Eliminar">
                  <div class="d-block text-center">
                    <h3>¿Desea Eliminar Este Elemento?</h3>
                  </div>
                  <b-button class="mt-3" variant="outline-warning" block @click="esconderModal">No</b-button>
                  <b-button
                    class="mt-3"
                    variant="outline-danger"
                    block
                    @click="eliminarCategoria(data.item.id)"
                  >Si</b-button>
                </b-modal>
              </div>
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
            id: value.id,
            ...value.data()
          });
        });
        return {
          categorias,
          perPage: 10,
          currentPage: 1
        };
      });
  },
  data() {
    return {
      fields: ["categoria", "acciones"]
    };
  },
  computed: {
    rows() {
      return this.categorias.length;
    }
  },
  methods: {
    esconderModal() {
      this.$refs["my-modal"].hide();
    },
    mostrarModal() {
      this.$refs["my-modal"].toggle("#eliminar-btn");
    },
    eliminarCategoria(id) {
      db.collection("categorias")
        .doc(id)
        .delete()
        .then(() => {
          let index;
          this.categorias.map((value, key) => {
            if (value.id == id) index = key;
          });
          this.categorias.splice(index, 1);
        });
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
