import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useDashboardHeaderStyles = makeStyles(theme => ({
    appBar: {
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

const Header = styled.div`
    position: relative;
    flex-shrink: 0;
`;

export const Styled = {
    Header
};