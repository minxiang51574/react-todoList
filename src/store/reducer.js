import {
    CHANGE_INPUT_VALUE,
    SUBMIT,
    REMOVE,
    INITLIST

} from "./actionTypes.js"

const defaultState = {
    inputValue:"",
    list:[],
}

//recuder只能接收不能修改state 这就是为什么要深拷贝的原因
export default (state = defaultState , action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newSatate = JSON.parse(JSON.stringify(state)) 
        newSatate.inputValue = action.value
        return newSatate
    }
    if (action.type === SUBMIT) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }
    if (action.type === REMOVE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
     if (action.type === INITLIST) {
         const newState = JSON.parse(JSON.stringify(state))
         newState.list = action.data
         return newState
     }
    return state ;
}