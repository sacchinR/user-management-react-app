import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, isValid, reduxForm } from 'redux-form'
import Button from '../../components/UI/Button'
import RenderInputField from '../../components/UI/formFields/RenderInputField'
import { getUserById, updateUserById } from "../Dashboard/dashboardSlice"
import { validateName, validateEmail, validatePhoneNo, validateCity, validateCompany } from '../formValidators'

class EditUser extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.dispatch(getUserById(id))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { isUpdated } = nextProps
    if (isUpdated) window.location.href = "/"
  }

  render() {
    const handleSubmit = () => {
      if (this.props.valid) this.props.updateUser()
    }
    return (
      <section className="d-flex justify-content-center align-items-center">
        {!this.props.isFetching &&
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
            <Button className={` ${this.props.valid ? "" : "disabled"} btn-primary`} onClick={() => handleSubmit()}>Submit</Button>
            <Link to="/" className="ml-2 btn btn-outline-primary" >Go Back</Link>
          </div>
        }
      </section>
    )
  }
}

const mapState = (state) => {

  const { dashboard } = state
  const { userData, updateUser } = dashboard
  const { isFetching } = userData
  const data = userData.data ? userData.data.data : {}
  const isUpdated = updateUser.isUpdated

  const returnValue = {
    valid: isValid("editForm")(state),
    isFetching,
    isUpdated,
  }
  if (!isFetching) {
    const initialValues = {
      userId: data.id,
      city: data.city,
      companyName: data.companyName,
      email: data.email,
      name: data.name,
      phoneNo: data.phoneNo
    }
    returnValue.initialValues = initialValues
  }
  return {
    ...returnValue
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateUser: () => dispatch(updateUserById())
  }
}

export default connect(mapState, mapDispatch)(reduxForm({
  form: "editForm",
  onSubmit: () => { },
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true
})(EditUser))
