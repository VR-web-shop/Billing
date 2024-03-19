import { DataTypes } from 'sequelize';
import Database from './Database.js';

const OrderProductEntity = Database.define("OrderProductEntity", {
    product_entity_uuid: {
        type: DataTypes.UUID,
        primaryKey: true
    },
}, {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});


export default OrderProductEntity;
