import styled from 'styled-components';

export const _Header = styled('div')`
    background: ${({ theme }) => theme.colorMode.bgSecondary};
    height: ${({ theme }) => theme.layout.headerHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 1;
`;
