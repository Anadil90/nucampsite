export const ValidateContactForm = (values) => {
    const errors = {};
   
   
    if (!values.firstName) {
     errors.firstName = 'First name required';
   
    } else if (values.firstName.length < 2) {
     errors.firstName = 'First name should be at least 2 characters'
    } else if (values.firstName.length > 15) {
     errors.firstName = 'First name should be 15 characters or less'
    }
   
   
    if (!values.lastName) {
     errors.lastName = 'required';
   
    } else if (values.lastName.length < 2) {
     errors.lastName = 'Last name should be at least 2 characters'
    } else if (values.lastName.length > 15) {
     errors.lastName = 'Last name should not be over 25 characters'
   
    }
    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
     errors.phoneNum = "Please enter your phone number only in digits"
    }
    
    if (!values.email.includes('@')) {
     errors.email = 'Improper email address. Email should contain an @';
    }
    return errors;
   }