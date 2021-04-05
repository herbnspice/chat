<template>
<div class="card">
    <h1> Login </h1>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <button> Login </button>
    </form> 
    <div class="error" v-if="error"> {{ error }} </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'
export default {
    setup( props, context ){
        const email = ref('')
        const password = ref('')
        
        const { error, login } = useLogin()
        const handleSubmit = async () => {
            await login( email.value, password.value )
            if( !error.value ){
                context.emit('enterChatroom')
            }
        }
        return { email, password, handleSubmit, error }
    }
}
</script>

<style scoped>

    .error{
        padding:20px;
        border-radius: 4px;
        margin:10px 0px;
        background: #ff0000;
        color: #fff;

    }
    .card{
        width: 360px;
        margin:  150px auto;
        padding: 20px;
        border: solid 1px #f3f3f3;
        box-shadow: #e4e4ea 1px 6px 13px 1px;
        border-radius: 5px;

    }

    input{
        width:100%;
        padding:10px;
        display: block;
        box-sizing:border-box;
        margin: 10px 0px;
        border-radius: 2px;
        border: solid 2px #f3f3f3;
    }
    button{
        display: block;
        width: 120px;
        padding:10px;
        margin: 0 auto;
        border: none
    
    }

</style>