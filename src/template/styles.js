import styled from 'styled-components';

export const Header = styled.header`
    border-bottom: 2px solid #9b4dca;
    margin-bottom: 8px;
    padding: 0;

    div {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Logo = styled.h1`
    margin: 0;
    padding-left: 60px;
    background: no-repeat left center url(./logo.png);
    background-size: contain;
    font-size: 4rem;

    a {
        color: #606c76;
    }

`;

export const HeaderActions = styled.nav`
    a {
        margin-left: 8px;
    }
`;
