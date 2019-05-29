//分离出action
import {
    CHANGE_INPUT_VALUE,
    SUBMIT,
    REMOVE,
    INITLIST
} from "./actionTypes.js"
import axios from "axios"
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getSubmitAction = () => ({
    type: SUBMIT,
})
export const getRemoveAction = (index) => ({
    type: REMOVE,
    index
})
export const initListAction = (data) => ({
    type: INITLIST,
    data
})

export const  getList = () => {
  return (dispatch) => {
       axios.get("/list.json").then(res => {
           const data = res.data
           const action = initListAction(data)
           dispatch(action)
       })
  }
}