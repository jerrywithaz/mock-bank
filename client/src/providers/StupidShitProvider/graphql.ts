import { gql } from 'apollo-boost';

export const stupidShitProviderQuery = gql`
    query GetStupidShit {
        stupidShit {
            confirmNavigation,
            confirmTransfer,
            pageLoadDelay,
            periodicallyDecreaseBalance,
            preventChangingHTMLValues,
            repeatElements,
            requireWebcamAccessForTransfer,
            sessionTimeout,
            useAdvertisements,
            useTransparentOverlay
        }
    }
`;
