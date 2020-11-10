const INITIAL_SATE = {
    categories:[],
    currentCategory:null,
    currentSubCategory:null,
    hasUser:false,
    currentUsername:null,
    currentUseremail:null,
    photoURL:null,
    uid:null,
    name:"huzaifa"
    
}

export default (state = INITIAL_SATE,action)=>{
    switch(action.type){
        case "SetCategory":
            return({
                ...state,
                currentCategory:action.currentCategory
            })
        case "SetSubCategory":
            return({
                ...state,
                currentSubCategory:action.currentSubCategory
            })
        case "SetUser":
            return({
                ...state,
                currentUsername:action.currentUsername,
                currentUseremail:action.currentUseremail,
                photoURL:action.photoURL,
                uid:action.uid,
                hasUser:action.hasUser
            })
        case "SignOut":
            return({
                    ...state,
                    currentUsername:action.currentUsername,
                    currentUseremail:action.currentUseremail,
                    photoURL:action.photoURL,
                    uid:action.uid,
                    hasUser:action.hasUser
            })
        default:
            return state;
    }
}

// const INITIAL_SATE ={
//     name : "Huzaifa",
// }

// export default (state= INITIAL_SATE)=>{
//     return state
// }