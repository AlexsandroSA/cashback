import styled from 'styled-components';

export const InputWrapper = styled.div`
    margin-bottom: 18px;
`;

export const Label = styled.label`
    margin-bottom: 0;
`;

export const Input = styled.input`
    margin-bottom: 0;

    &:disabled {
        cursor: not-allowed;
        background: #dddddd;
        color: #000;
    }
`;

export const FeedbackError = styled.span`
    display: block;
    font-size: 12px;
    color: #f00;
    text-align: right;
`;
