import { gql } from 'apollo-boost';

export const stupidShitProviderQuery = gql`
    query GetStupidShit {
        stupidShit {
            confirmNavigation,
            confirmTransfer,
            pageLoadDelay,
            periodicallyDecreaseBalance,
            repeatElements,
            sessionTimeout,
            useAdvertisements,
            useTransparentOverlay
        }
    }
`;
