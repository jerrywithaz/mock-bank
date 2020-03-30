import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';
import { StupidShitType } from "__generated__/graphql/types";

const query = gql`
    query GetPageLoadDelay {
        stupidShit {
            pageLoadDelay
        }
    }
`;

type QueryData = {
    stupidShit: Pick<StupidShitType, "pageLoadDelay">
};

/**
 * A hook for using the `pageLoadDelay` setting. This hook
 * will return a boolean indicating whether or not 
 * the page should still be "loading".
 */
function usePageLoadDelay(): boolean {

    const client = useApolloClient();
    const [loading, setLoading] = useState<boolean>(true);
    const cache = client.readQuery<QueryData>({ query }) as QueryData;

    useEffect(() => {

        const timeout = setTimeout(() => {
            setLoading(false);
        }, cache.stupidShit.pageLoadDelay);

        return () => clearTimeout(timeout);

    }, [cache]);

    return loading;

}

export default usePageLoadDelay;