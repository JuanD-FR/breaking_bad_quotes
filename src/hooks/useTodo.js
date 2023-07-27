import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) || []);
}

export const useTodo = ( ) => {
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ])
    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch( action );
    }
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: 'Remove Todo',
            payload: id
        })
    }
    const handleToogleTodo = ( id ) => {
        dispatch({
            type: 'Toogle Todo',
            payload: id
        })
    }
        return {
            todos,
            todosCount: todos.length,
            pendingTodoCount: todos.filter(todo=>!todo.done).length,
            handleNewTodo,
            handleDeleteTodo,
            handleToogleTodo,
        }
}