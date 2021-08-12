import './App.css'
import 'fontsource-roboto'
import RegistrationForm          from './components/RegistrationForm/RegistrationForm'
import { Container, Typography } from '@material-ui/core'
import RegistrationValidation    from './Context/RegistrationValidation'
import {
    validatePassword,
    validateCPF,
    validateName
}                                from './models/RegisterValidation'


function App(){
    function sendForm(data){
        console.log(data)
    }

    return (
        <Container maxWidth="sm" component={ 'article' }>
            <Typography
                variant={ 'h3' }
                align={ 'center' }
                component="h1">Registration Form</Typography>
            <RegistrationValidation.Provider
                value={ {cpf: validateCPF, password: validatePassword, nome: validateName}
                }>
                <RegistrationForm toSend={ sendForm } />
            </RegistrationValidation.Provider>
        </Container>
    )
}

export default App
