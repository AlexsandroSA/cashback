import React from 'react';
import { useFormik } from 'formik';

import { maskEnum } from '../../../utils/enums';

import { Input } from '../../../components';
import { Form } from './styles';
import schema from './schema';

const initialValues = { code: '', value: '', date: '' };

function FormRegister({ register }) {
    const formik = useFormik({
        onSubmit,
        initialValues,
        validationSchema: schema,
    });

    function onSubmit({ code, value, date }) {
        register({ code, value, date });
        formik.resetForm();
    }

    return (
        <Form onSubmit={formik.handleSubmit}>
            <div className="input-group">
                <Input
                    id="code"
                    name="code"
                    label="Código"
                    testId="input-code"
                    touched={formik.touched.code}
                    error={formik.errors.code}
                    value={formik.values.code}
                    onBlur={formik.onBlur}
                    onChange={formik.handleChange}
                />

                <Input
                id="value"
                name="value"
                label="Valor"
                testId="input-value"
                touched={formik.touched.value}
                error={formik.errors.value}
                value={formik.values.value}
                onBlur={formik.onBlur}
                onChange={formik.handleChange}
                />

                <Input
                    id="date"
                    name="date"
                    label="Data"
                    testId="input-date"
                    htmlType="text"
                    mask={maskEnum.date}
                    touched={formik.touched.date}
                    error={formik.errors.date}
                    value={formik.values.date}
                    onBlur={formik.onBlur}
                    onChange={formik.handleChange}
                />
            </div>

            <footer class="row">
                <button type="submit" className="button">Cadastrar</button>
            </footer>
        </Form>
    )
}

export default FormRegister;
