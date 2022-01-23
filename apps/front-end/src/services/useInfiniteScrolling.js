import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useInfiniteScrolling(data, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [items, setItems] = useState(data)
    const [hasMore, setHasMore] = useState(false)
    console.log(data)

    useEffect(
        (query) => {
            setLoading(true)
            setError(false)

            axios
                .get(query, {
                    params: { q: query, page: pageNumber },
                    // cancelToken: new axios.CancelToken(c => cancel = c) change to abortController
                })
                .then((res) => {
                    setItems((prevItems) => {
                        return [
                            ...new Set([...prevItems, ...res.data.query.map()]),
                        ]
                    })
                    setHasMore(res.data.qeury.length > 0)
                    setLoading(false)
                })
                .catch((err) => {
                    if (axios.isCancel(err)) return
                    setError(true)
                })
        },
        [query, pageNumber]
    )

    return { loading, error, items, hasMore }
}
