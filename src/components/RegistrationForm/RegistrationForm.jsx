import React, { useState }                             from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'


function RegistrationForm({toSend, validarCPF}){
    const [ name, setName ] = useState('')
    const [ lastname, setLastName ] = useState('')
    const [ cpf, setCPF ] = useState('')
    const [ promotions, setPromotions ] = useState(true)
    const [ news, setNews ] = useState(true)
    const [ error, setError ] = useState({cpf: {valid: true, text: ''}})

    return (
        <form onSubmit={ (event) => {
            event.preventDefault()
            toSend({name, lastname, cpf, promotions, news})
        }
        }>
            <TextField
                value={ name }
                onChange={ (event) => {
                    setName(event.target.value)
                } }
                id="name"
                label="Name"
                variant="outlined"
                autoFocus={ true }
                fullWidth
                margin={ 'normal' }
            />
            <TextField
                value={ lastname }
                onChange={ (event) => {
                    setLastName(event.target.value)
                } }
                id="lastname"
                label="LastName"
                variant="outlined"
                fullWidth
                margin={ 'normal' }
            />
            <TextField
                value={ cpf }
                inputProps={{ maxLength: 11 }}
                error={ !error.cpf.valid }
                helperText={ error.cpf.text }
                onChange={ (event) => {
                    setCPF(event.target.value)
                } }
                onBlur={ (event) => {
                    const valid = validarCPF(cpf)
                    setError({cpf: valid})
                } }
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin={ 'normal' }
            />

            <FormControlLabel
                // checked={promotions}
                control={
                    <Switch
                        onChange={ (event) => {
                            setPromotions(event.target.checked)
                        }
                        }
                        name="promotions"
                        color="primary"
                        checked={ promotions }
                        // defaultChecked={ promotions }
                    />
                }
                label="Promotions"
            />


            <FormControlLabel
                control={
                    <Switch
                        onChange={ (event) => {
                            setNews(event.target.checked)
                        }
                        }
                        name="news"
                        color="primary"
                        checked={ news }
                    />
                }
                label="News"
            />


            <Button
                type={ 'submit' }
                variant="contained"
                color="primary"
            > Register </Button>
        </form>
    )
}

export default RegistrationForm
