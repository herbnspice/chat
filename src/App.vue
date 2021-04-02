<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Home msg="Welcome to Your Vue.js App"/>
  <SignupForm />
  <LoginForm />
</template>

<script>
import Home from './components/Home.vue'
import SignupForm from './components/SignupForm.vue'
import LoginForm from './components/SignupForm.vue'

export default {
  name: 'App',
  components: {
    Home,
    SignupForm,
    LoginForm
  }
}
</script>