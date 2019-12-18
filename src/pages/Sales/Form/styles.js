import styled from 'styled-components';

export const Form = styled.form`
    max-width: 600px;
    margin: 0 auto;

    .input-group {
        max-width: 100%;
        display: flex;
        justify-content: space-between;

        div {
            width: 30%;
        }

        input {
            margin-bottom: 0;
        }
    }

    footer {
        .button {
            width: 100%;
        }
    }
`;
