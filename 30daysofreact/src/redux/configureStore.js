import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducers';
import apiMiddleware from './apiMiddleware';

export const configureStore = () => {
    //la función createStore siempre recibe como primer argumento el reducer raíz y como segundo argumento el estaod inicial
    const store = createStore(
       rootReducer,
       initialState,
       applyMiddleware(
           apiMiddleware
       ) 
    );
    return store;
}

export default configureStore;