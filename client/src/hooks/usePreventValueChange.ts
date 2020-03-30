import useMutationObserver from "./useMutationObserver";

/**
 * Prevents the value of an HTMLElement from changing.
 * @param observe Whether or not to observer mutations.
 * @param ref The React Ref of the HTMLElement to observer.
 * @param value The value to restore if the HTMLElement is changed.
 * @param onValueChange A function to call whenever athe value is changed.
 */
function usePreventValueChange(
    observe: boolean, 
    ref: React.MutableRefObject<any>,
    value?: string,
    onValueChange?: (changedValue: string, restoredValue: string) => void
) {
    useMutationObserver(observe, ref, () => {
        if (ref.current && value && ref.current.innerHTML !== value) {
            const changedValue = ref.current.innerHTML;
            ref.current.innerHTML = value;
            if (onValueChange)
                onValueChange(changedValue, value);
        }
    });
}

export default usePreventValueChange;