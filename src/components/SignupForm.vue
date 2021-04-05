<template>
<div class="card">
    <h1>Signup</h1>
  <form @submit.prevent="handleSubmit">
     <input type="text" required placeholder="Display Name" v-model="displayName">
     <input type="text" required placeholder="Email" v-model="email">
     <input type="password" required placeholder="password" v-model="password">
     <button> Sign up </button>
    <div class="error" v-if="error"> {{ error }} </div>

  </form> 
</div>
</template>
<script>

import { ref } from 'vue'
import useSignup from '@/composables/useSignup.js'
export default {
    setup(props, context){
        const { error, signup } = useSignup()

        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
           await signup( email.value, password.value , displayName.value)

        if( !error.value ){
                context.emit('enterChatroom')
            }
        }
        return { displayName, email,  password, handleSubmit, error,signup  }
    }
}
</script>
<style>
    

</style>