import fetching from './basic-fetch'

export function signup({fullname, username, email, password}) {
    console.log("signup:", fullname, username, email, password);
    return fetching({ path: 'api/signup', method: 'POST' , data: {
        fullname, username, email, password
    }})
}

export function login({username, password}) {
    return fetching({ path: 'api/login', method: 'POST', data: {
        username, password
    }})
}

export function logout() {
    return fetching({ path: 'api/logout', method: 'DELETE'})
}