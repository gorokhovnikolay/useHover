import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export const useWindowScroll = () => {
    const [scroll, setScroll] = useState({ x: 0, y: 0 })
    useWindowEvent('scroll', () => {
        console.log(scroll)
        setScroll({ ...scroll, y: Math.floor(window.scrollY), x: window.scrollX })
    })

    const scrollTo = () => {
        window.scrollTo(0, 0)
    }

    return [scroll, scrollTo]
}
