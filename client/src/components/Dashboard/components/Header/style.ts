import styled from 'styled-components';

export const Header = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    .ant-layout-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0px 20px;
        background: #fff;
    }
`;

export const Search = styled.div``;

export const Icons = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.span`
    margin-right: 20px;
`;