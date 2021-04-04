<template>
<div class="card">
    <h1> Login </h1>
    <form @submit.prevent="handleSubmit">
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
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log( email, password, handleSubmit )
        }
        return { email,  password, handleSubmit }
    }
}
</script>

<style>
body{
    background: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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