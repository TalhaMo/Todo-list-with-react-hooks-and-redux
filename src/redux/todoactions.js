import { ADD, COMPLETE, DELETE, EDIT } from "./actiontypes"

export const addtodo=(payload)=>{
return {type:ADD, payload}
}

export const deletetodo=(payload)=>{
    return {type:DELETE, payload}
    }
export const editList=(payload)=>{
        return {type:EDIT,payload}
      }

      export const complete=(payload)=>{
        return {type:COMPLETE,payload}
      }