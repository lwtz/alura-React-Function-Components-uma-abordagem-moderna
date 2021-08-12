import React, { useEffect, useState }           from 'react'
import PersonalData                             from './PersonalData'
import UserData                                 from './UserData'
import DeliveryData                             from './DeliveryData'
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core'


function RegistrationForm({toSend}){
    const [ CurrentStage, setCurrentStage ] = useState(0)
    const [ dataCollected, setData ] = useState({})
    useEffect(() => {
        if( CurrentStage === forms.length - 1 ){
            toSend(dataCollected)
        }
    })

    const forms = [
        <UserData toSend={ collectData } />,
        <PersonalData toSend={ collectData } />,
        <DeliveryData toSend={ collectData } />,
        <Typography variant={ 'h5' }> Vlw </Typography>
    ]

    function collectData(data){
        setData({...dataCollected, ...data})
        nextStage()
    }


    function nextStage(){
        setCurrentStage(CurrentStage + 1)
    }


    return (
        <>
            <Stepper activeStep={ CurrentStage }>
                <Step> <StepLabel alternativeLabel> Login </StepLabel> </Step>
                <Step> <StepLabel alternativeLabel> Pessoal </StepLabel> </Step>
                <Step> <StepLabel alternativeLabel> Entrega </StepLabel> </Step>
                <Step> <StepLabel alternativeLabel> Finish </StepLabel> </Step>
            </Stepper>
            { forms[CurrentStage] }
        </>
    )
}

export default RegistrationForm
