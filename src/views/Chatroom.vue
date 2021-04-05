<template>
    <div class="container">
        <Navabar @leaveChatroom="leaveChatroom"/>
        <ChatWindow />
        <ChatForm />
    </div>
</template>

<script>
import Navabar from '@/components/Navbar.vue'
import ChatForm from '@/components/ChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'

import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import { watch } from 'vue'

export default {
    
    components: {
        Navabar,
        ChatForm,
        ChatWindow
        
    },
    setup(){
        const { user } = getUser() 
        const router = useRouter()

        const leaveChatroom = () => {
            router.push({ name: 'Welcome' })
         }

        watch( user, () => {
            if( !user.value ){
                leaveChatroom()
            }
        })
        
        return{ leaveChatroom }
    }
}
</script>

<style>

</style>