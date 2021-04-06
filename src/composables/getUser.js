import { ref } from "@vue/reactivity";
import { porjectAuthentication } from "../firebase/config"

const user = ref(porjectAuthentication.currentUser)
porjectAuthentication.onAuthStateChanged( ( _user ) => {
    console.log( 'user state change', _user )
    user.value = _user

})

const getUser = () => {
    return { user }
}
export default getUser