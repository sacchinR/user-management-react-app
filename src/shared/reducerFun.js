export const reducerFun = (state = {}, checkActionType, actionType, data) => {
  switch (actionType) {
    case checkActionType.REQUEST:
      return {
        ...state,
        isFetching: true,
        finished: false,
      }
    case checkActionType.SUCCESS:
      return {
        ...state,
        data: data,
        finished: true,
      }
    case checkActionType.FAILURE:
      return {
        ...state,
        error: data,
        finished: true,
      }
    default:
      return state
  }
}