import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import webRouter from '../routes/webRouter';
import { Header, HeaderActions, Logo } from './styles';

function logout() {
    localStorage.removeItem('persist:root');
    window.location.href = webRouter.DEFAULT;
}

function Template({ children, showLogout, showLogin, showRegister }) {
    return (
        <>
            <Header>
                <div className="container">
                    <Logo>
                        <Link to="/">
                            <span>BCash</span>
                        </Link>
                    </Logo>
                    <HeaderActions>
                        {showLogin && <Link to={webRouter.LOGIN} className="button button-outline">Login</Link>}
                        {showRegister && <Link to={webRouter.REGISTER} className="button button-outline">Cadastro</Link>}
                        {showLogout && <button onClick={() => logout()} className="button button-outline">Sair</button>}
                    </HeaderActions>
                </div>
            </Header>

            <main role="main" className="container">
                {children}
            </main>
        </>
    );
};

Template.propTypes = {
    children: PropTypes.node.isRequired,
    showLogin: PropTypes.bool,
    showRegister: PropTypes.bool,
    showLogout: PropTypes.bool,
};

Template.defaultProps = {
    showLogin: false,
    showRegister: false,
    showLogout: false,
}

export default Template;
