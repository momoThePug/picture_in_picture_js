import { IPlayerComponent, ILoadedVideoStrategy } from "./interfaces/IPlayer";
import StrategyMap from "./StrategyMap";
const container = StrategyMap.getAll();


export function LoadVideoStrategy(input: string): ILoadedVideoStrategy {
    for (const index in container) {
        const fx: IPlayerComponent = container[index];
        if (fx.test(input)) {
            return fx.get();
        }
    }
    return {
        component: require('./default/Default.vue').default,
        mediaId: null
    };
}