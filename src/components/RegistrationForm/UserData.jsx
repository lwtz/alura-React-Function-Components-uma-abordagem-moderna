import React, { useContext, useState } from 'react'
import { Button, TextField }           from '@material-ui/core'
import RegistrationValidation          from '../../Context/RegistrationValidation'
import useErros                        from '../../hooks/useErros'


function UserData({toSend}){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    // context
    const validations = useContext(RegistrationValidation)
    // hook
    const [ errors, validateFields, sendData ] = useErros(validations)



    return (
        <form onSubmit={ (event) => {
            event.preventDefault()
            if( sendData() ){
                toSend({email, password})
            }

        } }>
            <TextField
                value={ email }
                onChange={ (event) => {
                    setEmail(event.target.value)
                } }
                id={ 'email' }
                name={ 'email' }
                label={ 'email' }
                type={ 'email' }
                variant="outlined"
                fullWidth
                margin={ 'normal' }
                required={ true }
            />

            <TextField
                value={ password }
                onChange={ (event) => {
                    setPassword(event.target.value)
                } }
                onBlur={ validateFields }
                error={ !errors.password.valid }
                helperText={ errors.password.text }
                id={ 'password' }
                name={ 'password' }
                label={ 'password' }
                type={ 'password' }
                variant="outlined"
                fullWidth
                margin={ 'normal' }
                required={ true }
            />

            <Button type={ 'submit' }
                    variant="contained"
                    color="primary"
            > Next </Button>
        </form>
    )
}

export default UserData
