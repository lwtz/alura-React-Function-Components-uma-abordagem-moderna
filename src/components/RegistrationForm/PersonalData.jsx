import React, { useState, useContext }                 from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
import RegistrationValidation                          from '../../Context/RegistrationValidation'
import useErros                                        from '../../hooks/useErros'


function PersonalData({toSend}){
    const [ nome, setNome ] = useState('')
    const [ lastname, setLastName ] = useState('')
    const [ cpf, setCPF ] = useState('')
    const [ promotions, setPromotions ] = useState(true)
    const [ news, setNews ] = useState(true)
    const validations = useContext(RegistrationValidation)

    const [ errors, validateFields, sendData ] = useErros(validations)





    return (
        <form onSubmit={ (event) => {
            event.preventDefault()
            if( sendData() ){
                toSend({nome, lastname, cpf, news, promotions})
            }
        }
        }>
            <TextField
                value={ nome }
                onChange={ (event) => {
                    setNome(event.target.value)
                } }
                onBlur={ validateFields }
                error={ !errors.nome.valid }
                helperText={ errors.nome.text }
                name={ 'nome' }
                label="Nome"
                variant="outlined"
                fullWidth
                margin={ 'normal' }
            />
            <TextField
                value={ lastname }
                onChange={ (event) => {
                    setLastName(event.target.value)
                } }
                name={ 'lastname' }
                id="lastname"
                label="LastName"
                variant="outlined"
                fullWidth
                required={ true }
                margin={ 'normal' }
            />
            <TextField
                value={ cpf }
                name={ 'cpf' }
                required={ true }
                inputProps={ {maxLength: 11} }
                error={ !errors.cpf.valid }
                helperText={ errors.cpf.text }
                onChange={ (event) => {
                    setCPF(event.target.value)
                } }
                onBlur={ validateFields }
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin={ 'normal' }
            />

            <FormControlLabel
                control={
                    <Switch
                        onChange={ (event) => {
                            setPromotions(event.target.checked)
                        }
                        }
                        name="promotions"
                        color="primary"
                        checked={ promotions }
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
            > Next </Button>
        </form>
    )
}

export default PersonalData
