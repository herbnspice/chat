import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const getCollection = ( collection ) =>{

    const document = ref(null)
    const error = ref( null )

    let collectionRef = projectFirestore.collection( collection )
        .orderBy( 'createdAt' )
        
    collectionRef.onSnapshot( ( snap ) => {
        let results = []
        snap.docs.forEach( doc => {
            doc.data().createdAt && results.push( { ...doc.data(), id : doc.data().id } )
        })
        document.value = results
        error.value = null 
    }, ( err) => {
        console.log( err.message )
        document.value = null
        error.value = err.message
    })

    return { document, error }

}

export default getCollection 