import { IPlayerComponent } from "./interfaces/IPlayer";
import StrategyMap from "./StrategyMap";
const container = StrategyMap.getAll();
export function LoadVideoStrategy(input: string): any | null {
    for (const index in container) {
        const fx: IPlayerComponent = container[index];
        if (fx.test(input)) {
            return fx.getComponent();
        }
    }
    return require('./default/Default.vue').default;
}