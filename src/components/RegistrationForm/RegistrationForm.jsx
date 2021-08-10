import React                                           from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

// import TextField  from '@material-ui/core/TextField'


function RegistrationForm() {
    return (
        <form>
            <TextField id="name" label="Name" variant="outlined" autoFocus={ true } fullWidth margin={ 'normal' } />
            <TextField id="lastname" label="LastName" variant="outlined" fullWidth margin={ 'normal' } />
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin={ 'normal' } />

            <FormControlLabel
                control={
                    <Switch
                        name="Promotions"
                        color="primary"
                        defaultChecked={ true }
                    />
                }
                label="Promotions"
            />


            <FormControlLabel
                control={
                    <Switch
                        name="News"
                        color="primary"
                        defaultChecked={ true }
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
