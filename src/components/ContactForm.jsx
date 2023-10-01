import { Button, Label, Col, FormGroup } from 'reactstrap'
import { Formik, Field, Form, Error, ErrorMessage } from 'formik'
import { ValidateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('Form values', values)
        console.log('in JSON format', JSON.stringify(values))
        resetForm()
    }

    return (

        <Formik
        initialValues={{
            firstName: ' ',
            lastName: ' ',
            phoneNum: ' ',
            email: ' ',
            agree: false,
            contactType: 'By Phone',
            feedback: ' ', 
        }}
        onSubmit={handleSubmit}
        validate={ValidateContactForm}
        >

            <Form>
                <FormGroup row> {/* Form Group 1*/}
                    <Label htmlFor='firstName' md='2'>
                    First name
                    </Label>

                    <Col md='10'>
                        <Field name='firstName' className="form-control" placeholder='First Name' />

                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row> {/* Form Group 2*/}
                    <Label htmlFor='lastName' md='2'>
                    Last Name
                    </Label>

                    <Col md='10'>
                        <Field name='lastName' className="form-control" placeholder="Last Name" />

                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row> {/* Form Group 3*/}
                    <Label htmlFor='phoneNum' md='2'> 
                    Phone
                    </Label>

                    <Col md='10'>
                        <Field className="form-control" name='phoneNum' placeholder="Phone" />

                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
            
                <FormGroup row> {/* Form Group 4*/}
                    <Label htmlFor='email' md='2'>
                    Email
                    </Label>

                    <Col md='10'>
                        <Field 
                            className="form-control"
                            name='email' 
                            type='email'
                            placeholder='Email'
                        />

                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row> {/* Form Group 5*/}
                    <Label check md={{ size: 4, offset: 2 }}> 
                        <Field name="agree" type='checkbox' className='form-check-input' />
                    May We Contact You?
                    </Label>

                    <Col md='4'>
                        <Field name='contactType' as='select' className="form-control">
                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row> {/* Form Group 6*/}
                    <Label htmlFor='feedback' md='2'>
                    Your Feedback
                    </Label>

                    <Col md='10'>
                        <Field 
                            name='feedback'
                            className="form-control"
                            as='textarea'
                            rows='12'
                        />
                    </Col>
                </FormGroup>

                <FormGroup row> {/* Form Group 7*/}
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='primary'>
                        Send Feedback
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm
