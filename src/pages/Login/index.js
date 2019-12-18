import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';

import { loginAction, resetLoginAction } from '../../store/ducks/auth';
import webRouter from '../../routes/webRouter';
import { loadingState } from '../../utils/enums';

import Template from '../../template';
import { Input } from '../../components';

import validationSchema from './schema';

const initialValues = { email: '', password: '' };

function LoginPage({ history, login, resetLogin, auth }) {
    const formik = useFormik({
        onSubmit,
        initialValues,
        validationSchema,
    });

    useEffect(() => {
        resetLogin();
    }, [resetLogin])

    function onSubmit({ email, password }) {
        login({ email, password });
    }

    function goToDashboard() {
        history.push(webRouter.SALES);
    }

    return (
        <Template showRegister>
            {auth.loading === loadingState.success && goToDashboard()}

            <section>
                <h3>Login</h3>

                <form onSubmit={formik.handleSubmit}>
                    <Input
                        id="email"
                        name="email"
                        label="E-mail"
                        htmlType="email"
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        value={formik.values.email}
                        onBlur={formik.onBlur}
                        onChange={formik.handleChange}
                    />

                    <Input
                        id="password"
                        name="password"
                        label="Senha"
                        htmlType="password"
                        touched={formik.touched.password}
                        error={formik.errors.password || auth.error.message}
                        value={formik.values.password}
                        onBlur={formik.onBlur}
                        onChange={formik.handleChange}
                    />

                    <div class="float-right">
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </section>
        </Template>
    );
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

const mapStateToProps = ({ auth }) => ({
    auth,
});

const mapDispatchToProps = {
    login: loginAction,
    resetLogin: resetLoginAction,
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
