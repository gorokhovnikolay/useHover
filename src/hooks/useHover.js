import { useCallback, useEffect, useRef, useState } from 'react'

export const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef()

    const hendleMouse = useCallback(() => {
        setHovered((p) => !p)
    }, [])

    useEffect(() => {
        const refCopy = ref.current
        refCopy.addEventListener('mouseenter', hendleMouse)
        refCopy.addEventListener('mouseout', hendleMouse)
        return () => {
            refCopy.removeEventListener('mouseenter', hendleMouse)
            refCopy.removeEventListener('mouseout', hendleMouse)
        }
    }, [hendleMouse])

    return { hovered, ref }
}
