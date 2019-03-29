<template>
    <!--div>
        <a href="/">Inicio</a>
        <a href="/contacto">Contacto</a>
    </div-->

    <b-navbar variant="danger" type="dark" toggleable="md">
    
    <b-navbar-brand href="/">BootstrapVue</b-navbar-brand>
   <b-navbar-toggle target="menu">
       </b-navbar-toggle>
    <b-collapse is-nav id="menu">
    <b-navbar-nav>
        <b-nav-item href="/contacto">contacto</b-nav-item>
        <b-nav-item href="/producto">producto</b-nav-item>
       </b-navbar-nav> 
       </b-collapse>
    </b-navbar>

</template>
<script>

export default {
    
}
</script>
