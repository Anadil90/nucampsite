
const ValidateUserLoginForm = (values) => {
    const errors = {
        username: '',
        password: ''
    }

    if(!values.username) {
        errors.username = 'Username required'
    }

    if(values.username.length < 6) {
        errors.username = 'Username must be at least 6 characters long'
    }

    else if(values.username.length >= 15){
        errors.username = 'Username too long'
    }

    if(values.password.length <= 8) {
        errors.password = 'Password needs to be at least 8 characters in length'
    }

    return errors;
}

export default ValidateUserLoginForm;