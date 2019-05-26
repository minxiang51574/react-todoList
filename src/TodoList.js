import React, { Component } from "react"
import {
    Input,
    Button,
    List
} from 'antd';
import 'antd/dist/antd.css'
import store from "./store"
import "./todolist.css"
import {
    getInputChangeAction,
    getSubmitAction,
    getRemoveAction
} from "./store/actionCreators.js"
// import { CHANGE_INPUT_VALUE, SUBMIT, REMOVE } from "./store/actionTypes.js"


class TodoList extends Component {
   
    constructor(props){
        super(props)
        this.state = store.getState()
        this.handleChange = this.handleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.submit = this.submit.bind(this)
        store.subscribe(this.handleStoreChange)  //订阅 监测store改变
    }

    render() {
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <Input value={this.state.inputValue} placeholder="请输入" 
                       style={{width:'300px',marginRight:'15px'}} 
                       onChange={this.handleChange}
                / >
                <Button type="primary" onClick={this.submit}>提交</Button>
                <List size ="small"
                 style={{width:"300px",marginTop:"15px"}}
                 bordered 
                 dataSource={this.state.list}
                 renderItem={(item,index) =><List.Item onClick={this.remove.bind(this,index)}>{item} </List.Item>} />

                 <div className={"wrap"}>
                     wrap
                        <span className={"content"}>content</span>
                 </div>
            </div>
        )
    }
    handleChange(e){
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    };
    handleStoreChange() {
        this.setState(store.getState())
    }
    submit() {
        //  const action = {
        //      type: SUBMIT,
        //  }
          const action = getSubmitAction()
         store.dispatch(action)
    }
    remove(index){
        // const action = {
        //     type: REMOVE,
        //     index
        // }
         const action = getRemoveAction(index)
        store.dispatch(action)
    }
    
}

export default TodoList