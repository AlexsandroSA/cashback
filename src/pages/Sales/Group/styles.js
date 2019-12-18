import styled from 'styled-components';

export const List = styled.ol`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 8px;
    list-style: none;
    overflow: hidden;
    overflow-x: scroll
`;

export const ListItem = styled.li`
    width: 100%;
    min-width: 300px;
    border-radius: 8px;
    margin-right: 8px;
    padding: 8px;
    border: 1px solid #f1f1f1;
    border-bottom: 4px solid #f1f1f1;

    p {
        margin-bottom: 8px;
    }
`;

export const ListActions = styled.footer`
    button {
        margin-left: 8px;

        &.button-edit {
            color
        }
        &.button-delete {
            color: red;
        }
    }
`;
