import {ADD_LIST, REMOVE_LIST, EDIT_LIST}from '../action/action-type'

export const addList=(newTodo)=>{

    return {type:ADD_LIST,payload:newTodo}
}
export const removeList=(id)=>{
    return {type:REMOVE_LIST,payload:id}
}
export const editList=(editTodo,id)=>{
    return {type:EDIT_LIST,index:id,payload:editTodo}
}