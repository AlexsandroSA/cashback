import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFormik } from 'formik';

import { registerAction, resetRegisterAction } from '../../store/ducks/users';
import { maskEnum, loadingState } from '../../utils/enums';

import Template from '../../template';
import { Input } from '../../components';

import validationSchema from './schema';

const initialValues = { name: '', cpf: '', email: '', password: '' };

function RegisterPage({ register, resetRegister, users }) {
    const formik = useFormik({
        onSubmit,
        initialValues,
        validationSchema,
    });

    useEffect(() => {
        resetRegister();
    }, [resetRegister]);

    function onSubmit({ name, cpf, email, password }) {
        register({ name, cpf, email, password });
        formik.resetForm();
    }

    return (
        <Template showLogin>
            <section>
                <h3>Bem vindo ao BCash!</h3>
                <p>
                    Uma plataforma de cashback que busca fornecer uma melhor experiência online para os usuários,
                    retornando parte do valor gasto de suas compras em sites parceiros.
                </p>
            </section>

            <hr />

            <section>

                <h3>Cadastre-se.</h3>

                {users.loading === loadingState.success && (
                    <blockquote className="animated fadeIn">
                        <p><em>Cadastro realizado com sucesso!</em></p>
                    </blockquote>
                )}

                {users.loading === loadingState.failure && (
                    <blockquote className="animated fadeIn">
                        <p><em>{users.error.message}</em></p>
                    </blockquote>
                )}

                <form onSubmit={formik.handleSubmit}>
                    <Input
                        testId="input-name"
                        id="name"
                        name="name"
                        label="Nome completo"
                        touched={formik.touched.name}
                        error={formik.errors.name}
                        value={formik.values.name}
                        onBlur={formik.onBlur}
                        onChange={formik.handleChange}
                    />

                    <Input
                        testId="input-cpf"
                        id="cpf"
                        name="cpf"
                        label="CPF"
                        mask={maskEnum.cpf}
                        touched={formik.touched.cpf}
                        error={formik.errors.cpf}
                        value={formik.values.cpf}
                        onBlur={formik.onBlur}
                        onChange={formik.handleChange}
                    />

                    <Input
                        testId="input-email"
                        id="email"
                        name="email"
                        label="E-mail"
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        value={formik.values.email}
                        onBlur={formik.onBlur}
                        onChange={formik.handleChange}
                    />

                    <Input
                        testId="input-password"
                        id="password"
                        name="password"
                        label="Senha"
                        htmlType="password"
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        value={formik.values.password}
                        onBlur={formik.onBlur}
                        onChange={formik.handleChange}
                    />

                    <div className="float-right">
                        <button type="submit" id="submit">Cadastra-se</button>
                    </div>
                </form>
            </section>
        </Template>
    );
};

RegisterPage.propTypes = {
    register: PropTypes.func.isRequired,
    resetRegister: PropTypes.func.isRequired,
    users: PropTypes.shape({
        loading: PropTypes.string,
        error: PropTypes.shape({
            status: PropTypes.string,
            message: PropTypes.string,
        }),
    }).isRequired,
};

RegisterPage.defaultProps = {
    users: {
        loading: loadingState.none,
        error: {
            status: '',
            message: '',
        },
    },
};

const mapStateToProps = ({ users }) => ({
    users,
});

const mapDispatchToProps = {
    register: registerAction,
    resetRegister: resetRegisterAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
