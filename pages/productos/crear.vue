<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>Ingreso de Nuevos Productos</h1>
            </div>
        </div>
        <form name="frmdatos" @submit.prevent="guerdarProducto">
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <label for="imagen">IMAGEN</label>
                        <input type="file" class="form-control"  placeholder="Carga Una Imagen" name="imagen" id="imagen">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre del Producto:</label>
                        <input type="text" class="form-control" required v-model="form.nombre" placeholder="Ingresa el nombre del producto" name="nombre" id="nombre">
                    </div>
                    <div class="form-group">
                        <label for="precio">Precio:</label>
                        <input type="number" class="form-control" required v-model="form.precio" placeholder="Ingresa Precio" name="precio" id="precio">
                    </div>
                    <div class="form-group">
                        <label for="cantidad">Cantidad:</label>
                        <input type="number" class="form-control"  required v-model="form.cantidad" placeholder="Ingresa la Cantidad" name="cantidad" id="cantidad">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>        
    </div>
</template>

<script>

import {db} from '../../services/firebase'

export default {
    data(){
        return{
            form: {
                nombre: '',
                cantidad: '',
                precio: ''
            }
        }
    },
    methods: {
        guerdarProducto(){
            db.collection("productos").add(this.form).then(res => {
                this.$router.push({
                    path: "/productos"
                })
            })
        }
    }
}
</script>
