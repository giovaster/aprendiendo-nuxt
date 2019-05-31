<template>
  <!--div>
        <a href="/">Inicio</a>
        <a href="/contacto">Contacto</a>
    </div>
    <b-navbar variant="danger" type="dark" toggleable="lg">
        <b-navbar-brand href="/">
            BootstrapVue
        </b-navbar-brand>
        <b-navbar-toggle target="menu"></b-navbar-toggle>
        <b-collapse is-nav id="menu">
            <b-navbar-nav>
                <b-nav-item href="/contacto">
                    Contacto
                </b-nav-item>
                <b-nav-item href="/productos">
                    Productos
                </b-nav-item>
                <b-nav-item href="/categorias">
                    Categorias
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  <div-->
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">ING PROD</b-navbar-brand>

      <b-navbar-toggle target="menu"></b-navbar-toggle>

      <b-collapse id="menu" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/contacto">Contacto</b-nav-item>
          <b-nav-item href="/productos">Productos</b-nav-item>
          <b-nav-item href="/categorias">Categorias</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Búsqueda</b-button>
            <b-button href="/registro" size="sm" class="my-2 my-sm-0" type="submit">Registrar</b-button>
            <b-button href="/login" size="sm" class="my-2 my-sm-0" type="submit" v-if="!user">Iniciar Sesion</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Idioma" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-dropdown v-if="user" :text="user.displayName">
              <b-dropdown-item @click="cerrarSesion">Cerrar Sesion</b-dropdown-item>
          </b-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {auth} from '../services/firebase'
export default {
  data(){
    return{
      user: false
    }
  },
  created(){
    auth.onAuthStateChanged(user =>{
      this.user = user
    })
  },
  methods:{
    cerrarSesion(){
      auth.signOut()
    }
  }
};
</script>

