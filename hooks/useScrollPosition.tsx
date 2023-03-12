/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useLayoutEffect, DependencyList } from 'react'

const isBrowser: boolean = typeof window !== `undefined`

function getScrollPosition(): Position {
    if (!isBrowser) return { x: 0, y: 0 }
    return { x: window.scrollX, y: window.scrollY }
}

export default function useScrollPosition(
    effect: ({ prevPos, currPos }: { prevPos: Position, currPos: Position }) => void,
    deps: DependencyList,
    wait: number | undefined
) {
    const position = useRef(getScrollPosition())

    let throttleTimeout: any = null

    const callBack = () => {
        const currPos = getScrollPosition()
        effect({ prevPos: position.current, currPos })
        position.current = currPos
        throttleTimeout = null
    }

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait)
                }
            } else {
                callBack()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, deps)
}

type Position = { x: number, y: number }
