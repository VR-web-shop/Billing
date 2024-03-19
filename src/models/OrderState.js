
import { DataTypes } from 'sequelize';
import Database from './Database.js';

export const ORDER_STATE = {
    WAITING_FOR_PAYMENT_APPROVAL: 'Waiting for Payment Approval',
    PAYMENT_APPROVED: 'Payment Approved',
};

const OrderState = Database.define("OrderState", {
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        primaryKey: true
    },
}, {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default OrderState;
