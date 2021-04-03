<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Home msg="Welcome to Your Vue.js App"/>
  <div v-if="showLogin">
      <LoginForm />
    <p> No account yet?  <span @click="showLogin=false"> Signup  </span >  instead </p>
  </div>
  <div v-else>
      <SignupForm />
    <p> Already registered? <span @click="showLogin=true"> Login  </span >  instead </p>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import SignupForm from './components/SignupForm.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    Home,
    SignupForm,
    LoginForm
  },
  setup(){
    const showLogin = ref( true )
    return{ showLogin }
  }
}
</script>