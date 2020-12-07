export const createDispatchAction = action => args => ({
    type: action,
    data: args,
})

export const createActionSignals = (reducerName, base) => {
    const actionsList = ["REQUEST", "SUCCESS", "FAILURE", "PENDING", "CLEAR"]
    const actions = {}
    actionsList.map(actionName => {
        actions[actionName] = `SIGNAL/${reducerName}/${base}/${actionName}`
        actions[actionName.toLowerCase()] = createDispatchAction(actions[actionName])
    })
    return actions
}