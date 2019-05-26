//分离出action
import {
    CHANGE_INPUT_VALUE,
    SUBMIT,
    REMOVE
} from "./actionTypes.js"
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