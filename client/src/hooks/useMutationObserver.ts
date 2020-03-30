import { useEffect } from "react";

/**A hook for observing mutations on an HTMLElement.
 * @param observe Whether or not to observer mutations.
 * @param ref The React Ref of the HTMLElement to observer.
 * @param onMutation A function to call whenever a mutation is observed.
 */
function useMutationObserver(
    observe: boolean,
    ref: React.MutableRefObject<any>,
    onMutation?: MutationCallback
) {

    const config = { attributes: true, childList: true, subtree: true, characterData: true };
    const observer = observe ? new MutationObserver((mutationsList, observer) => {
        if (onMutation) {
            onMutation(mutationsList, observer);
        }
    }) : null;

    useEffect(() => {

        if (observer && ref.current) {
            observer.observe(ref.current, config);
        }

        return () => {
            if (observer) observer.disconnect()
        };

    }, [observer, ref, config]);

}

export default useMutationObserver;