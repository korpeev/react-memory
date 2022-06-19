import {useEffect, useLayoutEffect, useRef} from "react";

export const usePrevious = <T extends unknown>(value: T) => {
    const ref = useRef<T>(value)
    useLayoutEffect(() => {
        ref.current = value
    }, [value])
    return {value: ref.current}
}
