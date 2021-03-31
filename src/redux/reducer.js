import { ADD, COMPLETE, DELETE, EDIT } from "./actiontypes";

const initialState={
    tasks:[
        { id: 0,isCompleted:false, text: "task1" },
        { id: 1,isCompleted:false, text: "task2" },
        { id: 2,isCompleted:false, text: "task3" },
    ]
}
const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch (type) {
        case ADD:
            return {...state,tasks:state.tasks.concat(payload)};
       
            case DELETE:
                return{
                ...state,
                tasks: state.tasks.filter((todo) => todo.id !== payload),
              };
    
            case EDIT:
                return {
                    ...state,tasks:state.tasks.map(task=>task.id===payload.id ? {...task,isCompleted:false,text:payload.text}:task )
                };
                case COMPLETE:
                    return {
                      ...state,
                      tasks: state.tasks.map(task =>
                        task.id === payload ? { ...task, isCompleted: !task.isCompleted } : task
                      ),
                    };
        default:
            return state;
    }
}
export default reducer