// what we are keeping track of. and what data types they are.
const initialState = {
    value1: '',
    value2: '',
    value3: '',
    value4: ''
}


// Action Types - what they do
const UPDATE_VALUE1 = 'UPDATE_VALUE1'
const UPDATE_VALUE2 = 'UPDATE_VALUE2'
const UPDATE_VALUE3 = 'UPDATE_VALUE3'
const UPDATE_VALUE4 = 'UPDATE_VALUE4'
const UPDATE_ALL_VALUES = 'UPDATE_ALL_VALUES'


// action creators - responsible for doing the updating, they will instruct our reducer how to modify our redux state
// each returns an abject with 2 properties. type & payload
export function updateValue1(newValue){
    return {
        type: UPDATE_VALUE1,
        payload: newValue
    }
}

export function updateValue2(newValue){
    return {
        type: UPDATE_VALUE2,
        payload: newValue
    }
}

export function updateValue3(newValue){
    return {
        type: UPDATE_VALUE3,
        payload: newValue
    }
}

export function updateValue4(newValue){
    return {
        type: UPDATE_VALUE4,
        payload: newValue
    }
}

export function updateAllValues(values){
    return{
        type: UPDATE_ALL_VALUES,
        payload: values
    }
}

// the action is the object created by our action creator

// Reducer Function - takes in current value of state & the action created by our function. it will switch on the type property & change the redux state based on what action creator is called.
export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_VALUE1:
            return{...state, value1: action.payload} // leave all other state values as they are except for value 1. that will be the payload
        case UPDATE_VALUE2:
            return {...state, value2: action.payload}
        case UPDATE_VALUE3:
            return {...state, value3: action.payload}
        case UPDATE_VALUE4:
            return {...state, value4: action.payload}
        case UPDATE_ALL_VALUES:
            return {...state, ...action.payload} //passing in an object containing values 1, 2, 3 & 4
        default: 
            return state
    }
}