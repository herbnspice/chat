import { ref } from "@vue/reactivity"
import { porjectAuthentication } from "../firebase/config"

const error = ref(null)
const logout = async () => {
    error.value = null
    try{
        await porjectAuthentication.signOut()
    } catch( err ){
        error.value = error.message
    }
}

const useLogout = () => {
    return { logout, error }
}

export default useLogout;