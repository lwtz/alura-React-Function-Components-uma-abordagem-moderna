import React, { useState }   from 'react'
import { Button, TextField } from '@material-ui/core'


function DeliveryData({toSend}){
    const [ cep, setCep ] = useState('')
    const [ city, setCity ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ state, setState ] = useState('')
    return (
        <form onSubmit={
            (event) => {
                event.preventDefault()
                toSend({cep, address, city, number, state})
            }
        }>
            <TextField
                value={ cep }
                onChange={ (event) => {
                    setCep(event.target.value)
                } }
                name={ 'cep' }
                id={ 'cep' }
                label={ 'CEP' }
                type={ 'number' }
                variant="outlined"
                margin={ 'normal' }
                required={ true }
            />

            <TextField
                value={ city }
                onChange={ (event) => {
                    setCity(event.target.value)
                } }
                id={ 'city' }
                name={ 'city' }
                label={ 'City' }
                type={ 'text' }
                variant="outlined"
                margin={ 'normal' }
                required={ true }
            />

            <TextField
                value={ address }
                onChange={ (event) => {
                    setAddress(event.target.value)
                } }
                id={ 'address' }
                name={ 'address' }
                label={ 'Address' }
                type={ 'text' }
                variant="outlined"
                fullWidth
                margin={ 'normal' }
                required={ true }
            />

            <TextField
                value={ number }
                onChange={ (event) => {
                    setNumber(event.target.value)
                } }
                id={ 'number' }
                name={ 'Number' }
                label={ 'Number' }
                type={ 'number' }
                variant="outlined"
                margin={ 'normal' }
                required={ true }
            />


            <TextField
                value={ state }
                onChange={ (event) => {
                    setState(event.target.value)
                } }
                id={ 'state' }
                name={ 'State' }
                label={ 'State' }
                type={ 'text' }
                variant="outlined"
                margin={ 'normal' }
                required={ true }
            />


            <Button type={ 'submit' }
                    variant="contained"
                    color="primary"
                    fullWidth
            > Register </Button>
        </form>
    )
}

export default DeliveryData
