import { Formik, Form, Field } from 'formik';
import React from 'react';

const Formularios = () => {

    function Validate(values){
        const erros = {}

        if(!values.name){
            erros.name = 'Nome é obrigatório'
        }
    
        if(!values.email){
            erros.email = 'Email é obrigatório'
        }
    
        return erros
    }

    return ( 
        <Formik 
        initialValues={{name: '', email: ''}}
        onSubmit={(values) => {
            console.log(values)
        }}
        validate = {Validate}
        >
        
        {({erros}) => (
            <Form>
                <div>
                    <label>Nome:</label>
                    <Field name='name' type='text'/>
                    {erros.name && (
                        <span>{erros.name}</span>
                    )}
                </div>

                <div>
                    <label>Email:</label>
                    <Field name='email' type='text'/>
                </div>
                <button type='submit'>Enviar</button>
            </Form>  
        )}

        </Formik>
     );
}
 
export default Formularios;