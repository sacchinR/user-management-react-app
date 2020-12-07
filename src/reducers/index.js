import { combineReducers } from '@reduxjs/toolkit'
import dashboard from '../container/Dashboard/dashboardSlice'
import { reducer as formReducer } from "redux-form"


const reducers = combineReducers({
    dashboard,
    form: formReducer
})

export default reducers