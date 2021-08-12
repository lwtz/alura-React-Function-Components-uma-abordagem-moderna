import { useState } from 'react'


function useErros(validations){
    const initial = initialState(validations)
    const [ errors, setError ] = useState(initial)

    function validateFields(event){
        const {name, value} = event.target
        const newState = {...errors}
        newState[name] = validations[name](value)
        setError(newState)
    }

    function sendData(){
        let field
        for ( field in errors ) {
            if( !errors[field].valid ){
                return false
            }
        }
        return true
    }
    return [ errors, validateFields, sendData ]
}


function initialState(validations){
    const stateInitial = {}
    let field
    for ( field in validations ) {
        stateInitial[field] = {valid: true, text: ''}
    }
    return stateInitial
}


export default useErros
