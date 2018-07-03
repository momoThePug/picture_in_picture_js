"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StrategyMap_1 = require("./StrategyMap");
const container = StrategyMap_1.default.getAll();
function LoadVideoStrategy(input) {
    for (const index in container) {
        const fx = container[index];
        if (fx.test(input)) {
            return fx.get();
        }
    }
    return {
        component: require('./default/Default.vue').default,
        mediaId: null
    };
}
exports.LoadVideoStrategy = LoadVideoStrategy;
