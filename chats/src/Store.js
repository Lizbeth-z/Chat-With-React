import React from 'react'

export const CTX = React.createContext();

const iniState = {
    general:[
        {from: 'aaron', msg: 'hello'},
        {from: 'shanti', msg: 'hello'},
        {from: 'max', msg: 'hello'},
    ],
    topicZ:[
        {from: 'aaron', msg: 'hello'},
        {from: 'pikachu', msg: 'hello'},
        {from: 'nepe', msg: 'hello'},
    ]

}


function reducer(state, action){

    const {from, msg, topic} = action.payload;

    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from,msg}
                ]

            }
            default:
                return state
    }
}

export default function Store(props){

    const reducerHook = React.useReducer(reducer, iniState);

    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}