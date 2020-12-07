export const getDashBoardApi = () => {
    return fetch("https://5f33a39acfaf5a001646b036.mockapi.io/users/users")
}

export const deleteDashBoardApi = (id) => {
    return fetch(`https://5f33a39acfaf5a001646b036.mockapi.io/users/users/${id}`, {
        method: "DELETE"
    })
}

export const saveUserApi = (body) => {
    console.log("save user api: ", body)
    return fetch("https://5f33a39acfaf5a001646b036.mockapi.io/users/users", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
}

export const getUserByIdApi = (id) => {
    return fetch(`https://5f33a39acfaf5a001646b036.mockapi.io/users/users/${id}`)
}

export const updatUserApi = (payload) => {
    const url = `https://5f33a39acfaf5a001646b036.mockapi.io/users/users/${payload.userId}`
    const body = {
        ...payload
    }
    delete body.userId
    return fetch(url, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
}