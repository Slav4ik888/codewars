const { ORDER_BACKGROUND, ORDER_COLOR } = require("./color.js");


const OrderRowCells = {
  'empty': {
    label: '',
    order: 1,
    style: {
      width: 48,
      color: ORDER_COLOR.ADMIN,
      background: ORDER_BACKGROUND.ADMIN,
      div: ORDER_COLOR.ADMIN
    },
    visible: true
  },
  'managerId': {
    label: 'Менеджер по заявке',
    order: 10,
    style: {
      width: 100,
      color: ORDER_COLOR.ADMIN,
      background: ORDER_BACKGROUND.ADMIN,
      div: ORDER_COLOR.ADMIN
    },
    visible: true
  },
  'logisPayee': {
    label: 'Компания от Логис',
    order: 20,
    style: {
      width: 120,
      color: ORDER_COLOR.ADMIN,
      background: ORDER_BACKGROUND.ADMIN,
      div: ORDER_COLOR.ADMIN
    },
    visible: true
  },
  'customerId': {
    label: 'Заказчик',
    order: 30,
    style: {
      width: 200,
      color: ORDER_COLOR.ADMIN_DARK,
      background: ORDER_BACKGROUND.ADMIN_DARK,
      div: ORDER_COLOR.ADMIN_DARK
    },
    visible: true
  },
};

module.exports = { OrderRowCells };