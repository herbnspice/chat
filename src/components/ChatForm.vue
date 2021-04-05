<template>
    <div class="chat-container">
        <textarea name="chat"  @keypress.enter="handleSubmit"
        placeholder="Type a message in hit and enter to send..."
        id="chat" v-model="message"></textarea>
    </div>
</template>

<script>
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import { timestamp } from '@/firebase/config'
import { ref } from 'vue'
export default {
    setup(){
        const { user } = getUser()
        const { addDoc, error } = useCollection( 'messages')
    
        const message =  ref('')
        const handleSubmit = async () => {
            const chat = {
                displayName: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
                await addDoc( chat)
                if( !error.value  ){
                    message.value = ''
                } 
            message.value = ''
        }

        return{ handleSubmit,message }
    }
}
</script>

<style>
    .chat-container{
        padding: 20px;
    }
    .chat-container textarea{
        border: none;
        width: 100%;
        height: 100px;
        padding: 10px;
        border-radius: 20px;
        outline: solid 1px #7cddec;
        outline-style: auto;
        box-sizing: border-box;
    }
</style>