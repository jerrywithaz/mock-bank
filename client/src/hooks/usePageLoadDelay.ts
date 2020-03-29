import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';
import { StupidShitType } from "types";

const query = gql`
    query GetComponentDelay {
        stupidShit {
            pageLoadDelay
        }
    }
`;

type QueryData = {
    stupidShit: Pick<StupidShitType, "pageLoadDelay">
};

function usePageLoadDelay(): boolean {

    const client = useApolloClient();
    const [loading, setLoading] = useState<boolean>(true);
    const cache = client.readQuery<QueryData>({ query });

    useEffect(() => {

        if (cache) {

            const timeout = setTimeout(() => {
                setLoading(false);
            }, cache.stupidShit.pageLoadDelay);
    
            return () => clearTimeout(timeout);
            
        }

    }, [cache]);

    return loading;

}

export default usePageLoadDelay;