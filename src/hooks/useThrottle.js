import { useCallback, useRef } from 'react'

export const useThrottle = (delay = 1000) => {
    const timerRef = useRef(Date.now())

    const throttle = useCallback(
        (callback) => {
            if (Date.now() - timerRef.current >= delay) {
                timerRef.current = Date.now()
                callback()
            } else {
                const timer = setTimeout(() => {
                    callback()
                }, delay)
                return () => clearTimeout(timer)
            }
        },
        [delay],
    )

    return throttle
}
