import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, isValid, reduxForm } from 'redux-form'
import Button from '../../components/UI/Button'
import RenderInputField from '../../components/UI/formFields/RenderInputField'
import { saveUserData, selectIsSaved } from "../Dashboard/dashboardSlice"
import { validateName, validateEmail, validatePhoneNo, validateCity, validateCompany } from '../formValidators'

import "./styles.scss"


const NewUser = () => {
  const isSaved = useSelector(selectIsSaved)

  useEffect(() => {
    if (isSaved) window.location.href = "/"
  }, [isSaved])

  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const valid = isValid("userForm")(state)
  const handleSubmit = () => {
    if (valid) dispatch(saveUserData())
  }
  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className="mt-5 shadow p-3 mb-5 bg-white rounded">
        <Field
          component={RenderInputField}
          label="Name"
          placeholder="Enter Name"
          name="name"
          type="text"
          validate={validateName}
        />
        <Field
          component={RenderInputField}
          label="Email"
          placeholder="Enter Email"
          name="email"
          type="text"
          validate={validateEmail}
        />
        <Field
          component={RenderInputField}
          label="Phone no"
          placeholder="Enter Phone number"
          name="phoneNo"
          type="number"
          maxLength={10}
          validate={validatePhoneNo}
        />
        <Field
          component={RenderInputField}
          label="City"
          placeholder="Enter city"
          name="city"
          type="text"
          validate={validateCity}
        />
        <Field
          component={RenderInputField}
          label="Company"
          placeholder="Enter company name"
          name="companyName"
          type="text"
          validate={validateCompany}
        />
        <Button className={` ${valid ? "" : "disabled"} btn-primary`} onClick={() => handleSubmit()}>Submit</Button>
        <Link to="/" className="ml-2 btn btn-outline-primary" >Go Back</Link>
      </div>
    </section>
  )
}

export default reduxForm({
  form: "userForm",
  onSubmit: () => { },
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(NewUser)
