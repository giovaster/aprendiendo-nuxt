let imagen = frmdatos.imagen
let nombre = frmdatos.nombre
let precio = frmdatos.precio
let cantidad = frmdatos.cantidad

let datos = JSON.parse(localStorage.getItem('datos')) || []

function guardar() {
    //agrega una pocicion al final de un arreglo
    datos.push({
        imagen: imagen.value,
        nombre: nombre.value,
        precio: precio.value,
        cantidad: cantidad.value,
    })

    localStorage.setItem('datos', JSON.stringify(datos))

    nombre.value = ""
    precio.value = ""
    cantidad.value = ""
    
    nombre.focus()
    pintar_tabla()
}

pintar_tabla()

function pintar_tabla() {
    let html = ""
    datos.map((v, k) => {
        html += `<tr>
            <td> ${v.nombre} </td>
            <td> ${v.apellido} </td>
            <td> ${v.edad} </td>
            <td> ${v.direccion} </td>
            <td> ${v.municipio} </td>
            <td> <button class="btn btn-danger" onclick="eliminar()"(${k})>Eliminar</button></td>
        </tr>`
    })
    document.getElementById("tabla").innerHTML = html
}
function eliminar(index){
    datos.splice(index, 1)
    localStorage.setItem('datos', JSON.stringify(datos))
    pintar_tabla()
}

export {guardar, pintar_tabla}