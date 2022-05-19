import React from 'react';
import { Formik, Field, Form } from 'formik';
 
 const Basic = () => (
  
   <div>
     <h1>Formulario</h1>
     <Formik
       initialValues={{ name: '', email: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Nome é obrigatório';
         } 

         if (!values.email) {
            errors.email = 'Email é obrigatório';
          } 
         return errors;
       }}
       onSubmit={(values) => {
         console.log(values)
       }}
     >
       {({

         errors,
       }) => (
         <Form>
           <Field
             type="text"
             name="name"
           />
           {errors.name && (
               <span>{errors.name}</span>
           )}
           <Field
             type="email"
             name="email"
           />
           {errors.email && (
               <span>{errors.email}</span>
           )}
           <button type="submit">
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;