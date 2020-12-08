import React, { Component } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import {
  getDashboardData,
  deleteDashboardData
} from './dashboardSlice';

const DashTable = ({ data, handleDelete }) => (
  <Table striped bordered hover size="sm" className="mt-5">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th>Phone</th>
        <th>Company Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data &&
        data.data.map((value, ind) => (
          <tr key={ind.toString()}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.city}</td>
            <td>{value.phoneNo}</td>
            <td>{value.companyName}</td>
            <td>
              <Link to={`/editUser/${value.id}`} className="btn btn-outline-primary" >Edit</Link>
              <Button className="ml-2 btn-primary" onClick={() => handleDelete(value.id)}>Delete</Button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
)

class Dashboard extends Component {
  componentDidMount() {
    const { getDashData } = this.props
    getDashData()
  }

  render() {
    const { dashData, deleteDashData } = this.props
    const { isFetching, data } = dashData
    return (
      <section className="container mt-5">
        <Link to="/addUser" className="btn btn-primary" >Add User</Link>
        {
          isFetching
            ? <div className="d-flex justify-content-center align-items-center"><Spinner animation="border" variant="primary" /></div>
            : <DashTable data={data} handleDelete={deleteDashData} />
        }
      </section>
    )
  }
}

const mapState = (state, ownProps) => {
  const { dashboard } = state
  const { dashBoardData } = dashboard
  return {
    dashData: dashBoardData
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDashData: () => dispatch(getDashboardData()),
    deleteDashData: (id) => dispatch(deleteDashboardData(id))
  }
}

export default connect(mapState, mapDispatch)(Dashboard)
