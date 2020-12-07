import { createSlice } from '@reduxjs/toolkit';
import { getFormValues } from "redux-form"
import { reducerFun } from '../../shared/reducerFun';
import { createActionSignals } from '../../shared/utility';
import { getDashBoardApi, deleteDashBoardApi, saveUserApi, getUserByIdApi, updatUserApi } from "./api"


const initial = {
  isFetching: false,
  data: null,
  error: null,
  finished: true,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    dashBoardData: initial,
    userData: initial,
    saveUser: {
      isSaved: false,
      error: null
    },
    updateUser: {
      isUpdated: false,
      error: null
    },
  },
  reducers: {
    dashboardDataRequest: (state) => {
      state.dashBoardData.isFetching = true
      state.dashBoardData.finished = false
    },
    dashBoardDataSuccess: (state, { payload }) => {
      state.dashBoardData.isFetching = false
      state.dashBoardData.finished = true
      state.dashBoardData.data = { status: 200, data: payload }
    },
    dashBoardDatafailure: (state, { payload }) => {
      state.dashBoardData.isFetching = false
      state.dashBoardData.finished = true
      state.dashBoardData.data = null
      state.dashBoardData.error = payload
      state.saveUser = {
        isSaved: false,
        error: null
      }
      state.updateUser = {
        isUpdated: false,
        error: null
      }
    },
    getUserRequest: (state) => {
      state.userData.isFetching = true
      state.userData.finished = false
    },
    getUserSuccess: (state, { payload }) => {
      state.userData.isFetching = false
      state.userData.finished = true
      state.userData.data = { status: 200, data: payload }
    },
    getUserFailure: (state, { payload }) => {
      state.userData.isFetching = false
      state.userData.finished = true
      state.userData.data = null
      state.userData.error = payload

    },
    isSavedUser: (state, { payload }) => {
      state.saveUser.isSaved = payload
    },
    isUpdateUser: (state, { payload }) => {
      state.updateUser.isUpdated = payload
    }
  },
});

export const {
  dashboardDataRequest,
  dashBoardDataSuccess,
  dashBoardDatafailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  isSavedUser,
  isUpdateUser
} = counterSlice.actions;


export const getDashboardData = () => {
  return (dispatch) => {
    dispatch(dashboardDataRequest())
    getDashBoardApi().then(resp => resp.json()).then(datas => {
      dispatch(dashBoardDataSuccess(datas))
    }).catch(err => dispatch(dashBoardDatafailure(err)))
  }
}

export const deleteDashboardData = (id) => {
  return (dispatch) => {
    deleteDashBoardApi(id).then(resp => resp.json()).then(resp => {
      dispatch(getDashboardData())
    })
  }
}

export const saveUserData = () => {
  return (dispatch, getState) => {
    const state = getState()
    const formData = getFormValues("userForm")(state)
    console.log("formData", formData)
    saveUserApi(formData).then(resp => resp.json()).then(resp => {
      console.log("response: ", resp)
      dispatch(isSavedUser(true))
    })
  }
}

export const getUserById = (id) => {
  return (dispatch) => {
    dispatch(getUserRequest())
    getUserByIdApi(id).then(resp => resp.json()).then(datas => {
      dispatch(getUserSuccess(datas))
    }).catch(err => dispatch(getUserFailure(err)))
  }
}

export const updateUserById = () => {
  return (dispatch, getState) => {
    const state = getState()
    const formData = getFormValues("editForm")(state)
    console.log("formData", formData)
    updatUserApi(formData).then(resp => resp.json()).then(resp => {
      console.log("response: ", resp)
      dispatch(isUpdateUser(true))
    })
  }
}

export const selectDashData = state => state.dashboard.dashBoardData

export const selectIsSaved = state => state.dashboard.saveUser.isSaved


const counterReducer = counterSlice.reducer

export const dashboardData = state => {
  console.log("state: ".state)
  return state.dashBoardData
}

export default counterReducer;
