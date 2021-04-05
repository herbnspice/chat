<template>
    <nav v-if="user">
        <div>
            <p> Hi there welcome {{ user.displayName }}  </p>
            <p class="email"> Currently logged in as {{ user.email }}  </p>
        </div>
        <button @click="handleClick"> Logout </button>
    </nav>
</template>
<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser.js'

export default {
    setup(props, context ) {
        const { logout, error } = useLogout()
        const { user } = getUser()
        const handleClick = async () => {

            console.log( logout )
            await logout()
            if( !error.value ){
                context.emit('leaveChatroom')
            }
        }
    
        return { error, handleClick, user }
    },
}
</script>
<style scoped>
  nav{
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background: #f2f2f2;
    box-shadow: #e4e4ea 0px 3px 6px 1px;
    margin:20px auto;
  }
   nav p{
      margin:  2px auto;
      font-size: 16px;
  }
  
  nav p.email{
      font-size:14px;
      color: #999;
  }

  button{
      background: #999;
      color: #fff;
      padding: 10px 20px;
      border-radius: 20px;
      border: none;
  } 

</style>