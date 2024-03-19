import { DataTypes } from 'sequelize';
import Database from './Database.js';
import OrderState from './OrderState.js';

const Order = Database.define("Order", {
    product_entity_uuid: {
        type: DataTypes.UUID,
        primaryKey: true
    },
}, {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

Order.belongsTo(OrderState, { foreignKey: 'order_state_name', targetKey: 'name' });
OrderState.hasMany(Order);

export default Order;
