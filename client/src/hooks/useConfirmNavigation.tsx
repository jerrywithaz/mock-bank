import React, { useState, useEffect } from 'react';
import { useApolloClient } from "@apollo/react-hooks";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { gql } from 'apollo-boost';
import { StupidShitType } from "__generated__/graphql/types";

const query = gql`
    query GetComponentDelay {
        stupidShit {
            confirmNavigation
        }
    }
`;

type QueryData = {
    stupidShit: Pick<StupidShitType, "confirmNavigation">
};

/**
 * Will show a confirmation dialog whenever component is mounted
 * @returns A boolean indicating whether or not the navigation 
 * has been comnfirmed.
 */
function useConfirmNavigation(): boolean {

    const client = useApolloClient();
    const cache = client.readQuery<QueryData>({ query }) as QueryData; // I'm assuming this will never be null.
    const { stupidShit } = cache;
    const { confirmNavigation } = stupidShit;
    const [confirmed, setConfirmed] = useState(stupidShit.confirmNavigation === 0);

    useEffect(() => {

        function createModal() {
            if (confirmNavigation) {
                return Modal.confirm({
                    title: 'Are you sure you want to view this page?',
                    icon: <ExclamationCircleOutlined />,
                    visible: true,
                    content: (
                        `You will be visiting a page on this website. ` +
                        `We cannot confirm what you are about to see. ` +
                        `Please confirm that you would like to navigate to this page.`
                    ),
                    onOk() {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setConfirmed(true);
                            }, [confirmNavigation]);
                        });
                    }
                });
            }
        }

        const modal = createModal();

        return () => modal && modal.destroy();

    }, [confirmNavigation]);

    return confirmed;

}

export default useConfirmNavigation;