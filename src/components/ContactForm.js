import React, {useEffect} from 'react';
import '../components/ContactForm.css';
import '../Portfolio/index.css';
import { useFormik, validateYupSchema } from "formik";
import useSubmit from "../Hooks/UseSubmit";
import { useAlertContext } from "../Hooks/AlertContext";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Spinner,

} from "@chakra-ui/react";
import * as Yup from 'yup';

function ContactForm() {

  const {isLoading, response, submit, errors} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      Name:'',
      email:'',
      subject:'',
      comment:'',
    },
    onSubmit: values => {
      submit('https://example.com/contactre', values)
      // You can perform form submission logic here
    },
    validationYupSchema: Yup.object({
      name: Yup.string().required(' Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('subject is required'), 
      comment: Yup.string()
      .min(25, 'Must be 25 characters at minimum')
      .required
    }),
    
  });
  useEffect(() =>{
    if(response) {
      onOpen(response.type, response.message);
      if(response.type === "success") {
        formik.resetForm();
      }
    } 
  }, [response]);
  return (
    <div className="form">
        <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid = {!!formik.errors.Name && formik.touched.Name} >
                <FormLabel className="" htmlFor="Name">Name</FormLabel>
                <Input
                  id="input"
                  name="Name"
                  type="text"
                  {...formik.getFieldProps("Name")}
                />
                <FormErrorMessage>{formik.errors.Name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid = {!!formik.errors.email && formik.touched.email} >
                <FormLabel className="" htmlFor="email">Email</FormLabel>
                <Input
                  id="input"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid = {!!formik.errors.subject && formik.touched.subject} >
                <FormLabel className="" htmlFor="subject">Subject</FormLabel>
                <Input
                  id="input"
                  name="subject"
                  type="text"
                  {...formik.getFieldProps("subject")}
                />
                <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid = {!!formik.errors.comment && formik.touched.comment} >
                <FormLabel className="" htmlFor="comment">Message</FormLabel>
                <Textarea
                  id="textarea"
                  name="comment"
                  height={250}

                  {...formik.getFieldProps("comment")}
                />
                
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              
              </FormControl>
              <Button className='btn' disabled={isLoading} type="submit">
              {isLoading ? <Spinner/> : 'Submit'}
              </Button>
            
             
        </form>

    </div>
  )
}

export default ContactForm