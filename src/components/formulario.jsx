import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import Schema from './Schema';

const Formularios = () => {


    return ( 
        <Formik 
        initialValues={{name: '', email: ''}}
        onSubmit={(values) => {
            console.log(values)
        }}
        validateOnMount
        validationSchema={Schema}
        >
        
        {({errors, touched}) => (
            <Form>
                <div>
                    <label>Nome:</label>
                    <Field name='name' type='text'/>
                    <ErrorMessage name='name'/>
                </div>

                <div>
                    <label>Email:</label>
                    <Field name='email' type='text'/>
                    <ErrorMessage name='email'/>
                </div>
                <button type='submit'>Enviar</button>
            </Form>  
        )}

        </Formik>
     );
}
 
export default Formularios;