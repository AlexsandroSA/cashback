import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { editSaleAction } from '../../store/ducks/sales';
import webRouter from '../../routes/webRouter'
import { maskEnum } from '../../utils/enums';

import Template from '../../template';
import { Input } from '../../components';

import schema from './schema';

const initialValues = { code: '', value: '', date: '', status: '', cashbackPersent: '' };

function FormRegister({ history, editSale, sales }) {
    const formValues = history.location.state.params.sale;
    const initialFormValues = { ...initialValues, ...formValues };

    const formik = useFormik({
        onSubmit,
        initialValues: initialFormValues,
        validationSchema: schema,
    });

    function onSubmit({ code, value, date, cashbackPersent, status }) {
        editSale({ code, value, date, cashbackPersent, status });

        formik.resetForm();
        history.push(webRouter.SALES);
    }

    return (
        <Template showLogout>
            <Link to={webRouter.SALES}>Voltar</Link>

            <h3>Atualizar venda:</h3>

            <form onSubmit={formik.handleSubmit}>
                <div className="input-group">
                    <Input
                        disabled
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

                    <Input
                        disabled
                        id="cashbackPersent"
                        name="cashbackPersent"
                        label="Porcentagem de cashback"
                        testId="input-cashbackPersent"
                        htmlType="text"
                        touched={formik.touched.cashbackPersent}
                        error={formik.errors.cashbackPersent}
                        value={formik.values.cashbackPersent}
                        onBlur={formik.onBlur}
                        onChange={formik.handleChange}
                    />

                    <label>Status</label>
                    <select
                        name="status"
                        touched={formik.touched.status}
                        error={formik.errors.status}
                        value={formik.values.status}
                        onBlur={formik.onBlur}
                        onChange={formik.handleChange}
                    >
                        <option selected={formik.values.status === 'processing'} value="processing">em avaliação</option>
                        <option selected={formik.values.status === 'approved'} value="approved">aprovado</option>
                        <option selected={formik.values.status === 'reproved'} value="reproved">reprovado</option>
                    </select>
                </div>
                <footer class="float-right">
                    <button type="submit" className="button">Atualizar</button>
                </footer>
            </form>
        </Template>
    )
}

const mapStateToProps = ({ sales }) => ({
    sales,
});

const mapDispatchToProps = {
  editSale: editSaleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
