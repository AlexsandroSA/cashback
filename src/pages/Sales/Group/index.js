import React from 'react';
import PropTypes from 'prop-types';

import { strintFormat } from '../../../utils/helpers';
import { saleStatus } from '../../../utils/enums';

import { List, ListItem, ListActions } from './styles';

function Group({ data, remove, edit }) {
  return (
    <List>
      {data.map(item => (
        <ListItem>
          <p><b>Código da compra</b>: {item.code} </p>
          <p><b>Valor</b>: {strintFormat.parserToMoney(item.value)}</p>
          <p><b>Data</b>: {item.date}</p>
          <p><b>% de cashback</b>: {item.cashbackPersent}</p>
          <p><b>Status</b>: {saleStatus[item.status]}</p>

          {console.log(item.status)}
          {console.warn(item.status === saleStatus.processing)}

          <ListActions className="float-right">
            {item.status === 'processing' && (
              <button  className="button button-clear button-delete" onClick={() => remove(item.code)}>Deletar</button>
            )}
            <button className="button button-outline" onClick={() => edit(item)}>Editar</button>
          </ListActions>
        </ListItem>
      ))}
    </List>
  )
};

Group.propTypes = {
    sales: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
    }))
};

Group.defaultProps = {
    sales: [],
};

export default Group;
