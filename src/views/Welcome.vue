<template>
   <div v-if="showLogin" class="container">
      <LoginForm @enterChatroom="enterChatroom"   />
    <p class="text-center"> No account yet?  <span @click="showLogin=false" class="action">  Signup  </span >  instead </p>
  </div>
  <div v-else>
      <SignupForm @enterChatroom="enterChatroom" />
    <p class="text-center"> Already registered? <span @click="showLogin=true" class=""> Login  </span >  instead </p>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    SignupForm,
    LoginForm
  },
  setup(){
    const router = useRouter()
    const enterChatroom = () => {
        router.push( { name: 'Chatroom' })
    }
  
    const showLogin = ref( true )
    
    return{ showLogin, enterChatroom  }
  }
}
</script>
<style scoped>
  .text-center{
    text-align: center;
  }
  .action{
      font-weight: 600;
  }

</style>