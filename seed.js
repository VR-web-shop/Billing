import 'dotenv/config'
import database from './src/models/Database.js';

import Order from './src/models/Order.js';
import OrderProductEntity from './src/models/OrderProductEntity.js';
import OrderState, { ORDER_STATES } from './src/models/OrderState.js';

(async () => {
    await database.sync({ force: true });

    for (const orderStateName of Object.values(ORDER_STATES)) {
        await OrderState.findOrCreate({ where: { name: orderStateName } });
    }

    await (async () => {
        const product_entity_uuid = '123e4567-e89b-12d3-a456-426614174000';
        const orderStateName = ORDER_STATES.WAITING_FOR_PAYMENT_APPROVAL;
        const order = await Order.findOrCreate({ where: { order_state_name: orderStateName } });
        const order_uuid = order[0].dataValues.uuid;
        await OrderProductEntity.findOrCreate({ where: { product_entity_uuid, order_uuid } });
    })();

    await (async () => {
        const product_entity_uuid = '123e4567-e89b-12d3-a456-426614174001';
        const orderStateName = ORDER_STATES.PAYMENT_APPROVED;
        const order = await Order.findOrCreate({ where: { order_state_name: orderStateName } });
        const order_uuid = order[0].dataValues.uuid;
        await OrderProductEntity.findOrCreate({ where: { product_entity_uuid, order_uuid } });
    })();
})();
