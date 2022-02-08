import { store } from "../store"
import { setIsUser } from "../store/user"

export default async function fetching({ path = '', method = 'GET', data = null}) {
    path = `${path}`
    const options = {
        method: method,
        headers: new Headers({
        }),
    }
    if (!!data && Object.keys(data).length) {
        options.headers.append('Content-Type', 'application/json')
        options.body = JSON.stringify(data)
    }

    return fetch(path, options)
        .then((res) => {
            if (res.statusCode === 401) {
                store.dispatch(setIsUser(false))
                window.location.pathname = '/'
                throw new Error('You`r not Logged in yet')
            }
            return res.json()
        })
}
