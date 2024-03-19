import 'dotenv/config'
import database from './src/models/Database.js';

import Order from './src/models/Order.js';
import OrderState, { ORDER_STATE } from './src/models/OrderState.js';

(async () => {
    await database.sync({ force: true });

    for (const orderStateName of Object.values(ORDER_STATE)) {
        await OrderState.findOrCreate({ where: { name: orderStateName } });
    }

    await (async () => {
        const product_entity_uuid = '123e4567-e89b-12d3-a456-426614174000';
        const orderStateName = ORDER_STATE.WAITING_FOR_PAYMENT_APPROVAL;
        await Order.findOrCreate({ where: { product_entity_uuid, order_state_name: orderStateName } });
    })();

    await (async () => {
        const product_entity_uuid = '123e4567-e89b-12d3-a456-426614174001';
        const orderStateName = ORDER_STATE.PAYMENT_APPROVED;
        await Order.findOrCreate({ where: { product_entity_uuid, order_state_name: orderStateName } });
    })();
})();
