<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>Ingreso de Nuevos Productos</h1>
            </div>
        </div>
        <form name="frmdatos">
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <label for="imagen">IMAGEN</label>
                        <input type="file" class="form-control" placeholder="Ingresa tu Nombre" name="imagen" id="imagen">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre del Producto:</label>
                        <input type="text" class="form-control" placeholder="Ingresa el nombre del producto" name="nombre" id="nombre">
                    </div>
                    <div class="form-group">
                        <label for="precio">PRECIO:</label>
                        <input type="text" class="form-control" placeholder="Ingresa Precio" name="precio" id="precio">
                    </div>
                    <div class="form-group">
                        <label for="cantidad">CANTIDAD:</label>
                        <input type="text" class="form-control" placeholder="Ingresa la Cantidad" name="cantidad" id="cantidad">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <button type="button" class="btn btn-primary" onclick="guardar()">Guardar</button>
                </div>
            </div>
        </form>        
    </div>
</template>

<script>
export default {

}
</script>
