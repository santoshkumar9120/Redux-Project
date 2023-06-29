


import React from 'react';

import './App.css';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, MenuItem, FormControlLabel, RadioGroup, FormControl, FormLabel, Radio, Button } from '@material-ui/core';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  gender: Yup.string().required('Gender is required'),
  hobbies: Yup.array().min(1, 'Select at least one hobby'),
});

const countries = [
  { value: 'USA', label: 'United States' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Germany', label: 'Germany' },
];

const hobbies = [
  { value: 'reading', label: 'Reading' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'traveling', label: 'Traveling' },
  { value: 'cooking', label: 'Cooking' },
];

const App = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className='AppContainer'>
    <Formik
      initialValues={{
        name: '',
        address: '',
        country: '',
        gender: '',
        hobbies: [],
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div>
            <Field
              as={TextField}
              name="name"
              label="Name"
              fullWidth
              error={errors.name && touched.name}
              helperText={errors.name && touched.name ? errors.name : ''}
            />
          </div>

          <div>
            <Field
              as={TextField}
              name="address"
              label="Address"
              fullWidth
              multiline
              rows={4}
              error={errors.address && touched.address}
              helperText={errors.address && touched.address ? errors.address : ''}
            />
          </div>

          <div>
            <Field
              as={TextField}
              select
              name="country"
              label="Country"
              fullWidth
              error={errors.country && touched.country}
              helperText={errors.country && touched.country ? errors.country : ''}
            >
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
          </div>

          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <Field name="gender">
                {({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                )}
              </Field>
            </FormControl>
          </div>

          <div>
            <Field
              as={TextField}
              select
              name="hobbies"
              label="Hobbies/Interests"
              fullWidth
                multiple
                error={errors.hobbies && touched.hobbies}
                helperText={errors.hobbies && touched.hobbies ? errors.hobbies : ''}
              >
                {hobbies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </div>
  
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      </div>
    );
  };
  
  export default App;
  








