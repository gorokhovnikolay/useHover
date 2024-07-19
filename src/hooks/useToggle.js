import { useCallback, useReducer, useRef } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'boolean':
            return !state
        default:
            return action.payload
    }
}

export const useToggle = (arr) => {
    const [value, dispatch] = useReducer(reducer, typeof arr === 'object' ? arr[0] : arr)
    const indexRef = useRef(0)

    const toggle = useCallback(() => {
        let payload
        if (typeof arr === 'object') {
            indexRef.current =
                indexRef.current < arr.length - 1 ? indexRef.current + 1 : 0
            payload = arr[indexRef.current]
        } else {
            payload = arr
        }
        dispatch({ type: typeof arr, payload })
    }, [arr])

    return [value, toggle]
}
