<template>
  <b-form @submit.prevent="registro">
    <div class="row mt-3">
      <div class="col-xs-6 col-md-6">
        <h4>Registro de Usuarios</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <b-form-group label="Nombre" laber-for="nombre">
          <b-form-input
            id="nombre"
            type="text"
            required
            v-model="form.name"
            placeholder="Ingresar el nombre del Usuario"
          />
        </b-form-group>
        <b-form-group label="Email" laber-for="email">
          <b-form-input
            id="email"
            type="email"
            required
            v-model="form.email"
            placeholder="Ingresar el Email del Usuario"
          />
        </b-form-group>
        <b-form-group label="Contraseña" laber-for="password">
          <b-form-input
            id="password"
            type="password"
            required
            v-model="form.password"
            placeholder="Ingresar la Contraseña del Usuario"
          />
        </b-form-group>
      </div>
    </div>
    <div class="row">
       <!-- <div class="col-xs-12 offset-sm-5">
            <b-spinner variant="primary" v-if="guardando"></b-spinner>
        </div>-->
    </div>
    <div class="row">
        <div class="col-xs-12 offser-sm-5">
            <b-button-toolber>
                <b-button-group right class="mx-2">
                    <b-button variant="primary" type="submit" :disabled="guardando">Guardar</b-button>
                </b-button-group>
            </b-button-toolber>
        </div>
    </div>
  </b-form>
</template>

<script>
import {auth} from '../services/firebase'
export default {
    data(){
        return {
            form:{}
        }
    },
    methods:{
        registro(){
            auth.createUserWithEmailAndPassword(this.form.email, this.form.password).then(res => {
                res.user.updateProfile({
                  displayName: this.form.name,
                }).then(resUpdate =>{
                  this.$router.push({
                  path: "/"
                })
                })
                
            }).catch(error =>{
                alert("Pailas men, hay un erros: " + error.message)
            })
        }
    }
}
</script>

