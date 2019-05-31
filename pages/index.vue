<template>
  <div class="row mt-4">
    <div class="col-sm-3" v-for="producto in productos" :key="producto.id">
      <cardProducto :precio="producto.precio" :nombre="producto.nombre" :imagen="producto.imagen" :slug="producto.slug"/>
    </div>
  </div>
</template>

<script>
import { db } from "../services/firebase";
import cardProducto from '../components/cardProducto';

export default {
  components: {cardProducto},
  asyncData() {
    return db
      .collection("productos")
      .get()
      .then(productosSnap => {
        let productos = [];

        productosSnap.forEach(value => {
          productos.push({
            id: value.id,
            ...value.data()
          });
        });
        return {
          productos
        };
      });
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
