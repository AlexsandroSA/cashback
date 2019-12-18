import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import webrouter from '../../routes/webRouter';
import { createSaleAction, removeSaleAction } from '../../store/ducks/sales';

import Template from '../../template';

import FormRegister from './Form';
import SalesGroup from './Group';

function SalesPage({ history, sales, createSale, removeSale }) {
  const hasSales = !!sales.data.length;

  function add({ code, value, date }) {
    createSale({ code, value, date });
  }

  function remove(code) {
    removeSale(code);
  }

  function edit(item) {
    history.push(`${webrouter.SALES}/${item.code}`, { params: { sale: item }});
  }

  return (
    <Template showLogout>
      <h4>Cadastrar uma nova venda:</h4>
      <FormRegister register={add} />

      <hr />

      <h4>Suas vendas:</h4>
      {hasSales ? (
        <SalesGroup
          data={sales.data}
          edit={edit}
          remove={remove}
        />
      ) : (
        <p>Você ainda não tem vendas!</p>
      )}
    </Template>
  )
}

SalesPage.propTypes = {};

SalesPage.defaultProps = {};

const mapStateToProps = ({ sales }) => ({
    sales,
});

const mapDispatchToProps = {
  createSale: createSaleAction,
  removeSale: removeSaleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesPage);
