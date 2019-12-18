import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import { InputWrapper, Label, Input, FeedbackError } from './styles';

function InputBase({
    id,
    testId,
    name,
    label,
    value,
    mask,
    disabled,
    htmlType,
    touched,
    error,
    onBlur,
    onChange,
}) {
    const hasMask = !!mask;
    return (
        <InputWrapper>
            <Label htmlFor={id}>{label}</Label>
            {hasMask ? (
                <InputMask
                    disabled={disabled}
                    autoComplete="off"
                    data-testid={testId}
                    id={id}
                    name={name}
                    type={htmlType}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    mask={mask}
                />
            ): (
                <Input
                    disabled={disabled}
                    autoComplete="off"
                    data-testid={testId}
                    id={id}
                    name={name}
                    type={htmlType}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                />
            )}
            <FeedbackError data-testid={`${testId || id}-error`}>{touched && error}</FeedbackError>
        </InputWrapper>
    )
}

InputBase.prototype = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    htmlType: PropTypes.string,
    error: PropTypes.string,
    touched: PropTypes.bool,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

InputBase.defaultProps = {
    label: '',
    value: '',
    error: '',
    id: 'input',
    testId: 'input',
    htmlType: 'text',
    disabled: false,
};

export default InputBase;
