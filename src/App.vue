<template>
  <div v-if="showLogin" class="container">
      <LoginForm />
    <p class="text-center"> No account yet?  <span @click="showLogin=false"> Signup  </span >  instead </p>
  </div>
  <div v-else>
      <SignupForm />
    <p class="text-center"> Already registered? <span @click="showLogin=true"> Login  </span >  instead </p>

  </div>
</template>

<script>
import SignupForm from './components/SignupForm.vue'
import LoginForm from './components/LoginForm.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    SignupForm,
    LoginForm
  },
  setup(){
    const showLogin = ref( true )
    return{ showLogin }
  }
}
</script>
<style scoped>
  .text-center{
    text-align: center;
  }
</style>