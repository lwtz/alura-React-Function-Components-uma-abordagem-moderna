import RegistrationForm          from './components/RegistrationForm/RegistrationForm'
import { Container, Typography } from '@material-ui/core'
import './App.css'
import 'fontsource-roboto'


function App(){
    function sendForm(data){
        console.log(data)
    }

    function validateCPF(cpf){
        const regexCPF = new RegExp(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/)
        if( !regexCPF.test(cpf) || cpf.length !==  11 ){
            return {valid: false, text: 'CPF INVÁLIDO'}
        } else {
            return {valid: true, text: ''}
        }
    }

    return (
        <Container maxWidth="sm" component={ 'article' }>
            <Typography
                variant={ 'h3' }
                align={ 'center' }
                component="h1">Registration Form</Typography>
            <RegistrationForm
                toSend={ sendForm }
                validarCPF={ validateCPF }
            />
        </Container>
    )
}

export default App
