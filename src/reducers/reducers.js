import { ADD_LIST, REMOVE_LIST, EDIT_LIST } from "../action/action-type"


const initState=[]
const listReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_LIST:
            return state.concat({todo:action.payload})
        
        case REMOVE_LIST:
            return state.filter((el,i)=> i!==action.payload)

            case EDIT_LIST:
                return state.map((el,i)=>{
                    if(i===action.index){
                        return{...el,todo:action.payload}
                    }
                    else{
                        return {el}
                    }
                })
        
        
        default:return state
    }
}
export default listReducer