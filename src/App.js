import './App.css'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import { Container, Typography }    from '@material-ui/core'
import 'fontsource-roboto'

function App() {
    return (
        <Container maxWidth="sm" component={ 'article' }>
            <Typography variant={'h3'} align={'center'} component="h1">Registration Form</Typography>
            <RegistrationForm />
        </Container>
    )
}

export default App
