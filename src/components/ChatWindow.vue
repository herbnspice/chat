<template>
    <div class="chat-window-container">
        <div v-if="document" class="message" ref="messages">
            <div v-for="doc in formattedDocuments" :key="doc.id" >
                <div class="single">
                    <span class="createdAt">  {{ doc.createdAt }} </span>
                    <span class="displayName">  {{ doc.displayName }}  </span>
                    <span class="message">  {{ doc.message }} </span>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import getCollection from '@/composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, ref,onUpdated  } from 'vue'

export default {
    setup(){
         const { document, error } = getCollection( 'messages') 
        console.log( document )

        const formattedDocuments = computed( () => {
            if( document.value ){
                return document.value.map( (doc) => {
                    let time = formatDistanceToNow( doc.createdAt.toDate() )
                    return { ...doc, createdAt: time }
                })
            }
            return document
        })
        const messages = ref( null )

        onUpdated(( ) =>{
            messages.value.scrollTop = messages.value.scrollHeight

        })
            return{ document,error, formattedDocuments, messages }
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
        padding:10px;
    }
    .displayName{
        font-weight: bold;
        padding:0px 5px 0px 0px;
        font-size: 14px;
    }
    .message{
        color: #fff;
        max-height: 200px;
        overflow: scroll;
        overflow-x: hidden;
    }
    .createdAt{
        display: block;
        color:#fff;
        font-size: 11px;

    }
    .single{
        padding:10px 10px;
        margin: 5px 0px;
        border-radius: 15px;
        background: #7cddec;
    }
</style>