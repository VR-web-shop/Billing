import { DataTypes } from 'sequelize';
import Database from './Database.js';
import OrderState from './OrderState.js';
import ProductEntity from './ProductEntity.js';

const Order = Database.define("Order", {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
}, {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});


ProductEntity.belongsTo(Order, { foreignKey: 'order_uuid', targetKey: 'uuid' });
Order.belongsTo(OrderState, { foreignKey: 'order_state_name', targetKey: 'name' });
Order.hasMany(ProductEntity);
OrderState.hasMany(Order);

export default Order;
