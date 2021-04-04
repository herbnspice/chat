<template>
<div class="card">
    <h1>Signup</h1>
  <form @submit.prevent="handleSubmit">
     <input type="text" required placeholder="Display Name" v-model="displayName">
     <input type="text" required placeholder="Email" v-model="email">
     <input type="password" required placeholder="password" v-model="password">
     <button> Sign up </button>
  </form> 
</div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup(){
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log( displayName, email, password, handleSubmit )
        }
        return { displayName, email,  password, handleSubmit }
    }
}
</script>
<style>
    

</style>