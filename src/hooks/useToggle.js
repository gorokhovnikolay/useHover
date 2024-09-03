import { useCallback, useReducer, useRef } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'boolean':
            return !state
        default:
            return action.payload
    }
}

export const useToggle = (initialValue) => {
    const [value, dispatch] = useReducer(
        reducer,
        Array.isArray(initialValue) ? initialValue[0] : initialValue,
    )
    const indexRef = useRef(0)

    const toggle = useCallback(
        (toggler) => {
            if (toggler) {
                dispatch({ payload: toggler })
                return
            }
            if (Array.isArray(initialValue)) {
                if (indexRef.current >= initialValue.length - 1) {
                    indexRef.current = 0
                } else {
                    indexRef.current++
                }
                dispatch({ payload: initialValue[indexRef.current] })
                return
            }

            dispatch({ type: 'boolean' })
        },
        [initialValue],
    )

    return [value, toggle]
}
