import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'
import { useThrottle } from './useThrottle'

export const useViewportSize = () => {
    const [height, setHeight] = useState(window.outerHeight)
    const [width, setWidth] = useState(window.outerWidth)
    const throttle = useThrottle(300)

    useWindowEvent('resize', () =>
        throttle(() => {
            setHeight(window.outerHeight)
            setWidth(window.outerWidth)
        }),
    )

    return { height, width }
}
