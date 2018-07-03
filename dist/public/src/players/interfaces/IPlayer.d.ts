import { Component } from 'vue';
export interface IPlayer {
    height: string;
    width: string;
    videoId: string;
    route: string;
}
export interface ILoadedVideoStrategy {
    component: Component;
    mediaId: string;
}
export interface IPlayerComponent {
    test(input: string): boolean;
    get(): ILoadedVideoStrategy;
    getComponent(): Component;
    getMediaId(): string;
}
