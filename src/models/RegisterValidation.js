function validateCPF(cpf){
    const regexCPF = new RegExp(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/)
    if( !regexCPF.test(cpf) || cpf.length !== 11 ){
        return {valid: false, text: 'CPF INVÁLIDO'}
    } else {
        return {valid: true, text: ''}
    }
}


function validatePassword(passwd){
    // const regexPasswd = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    if( passwd.length < 4 || passwd.length > 72 ){
        return {valid: false, text: 'Senha errada'}
    } else {
        return {valid: true, text: ''}
    }
}

function validateName(name){
    const regexPasswd = new RegExp(/^[a-zA-Z ]+$/)
    if( !regexPasswd.test(name) ){
        return {valid: false, text: 'Nome errado'}
    } else {
        return {valid: true, text: ''}
    }
}


export { validatePassword, validateCPF, validateName }
