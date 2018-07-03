import { IPlayerComponent, ILoadedVideoStrategy } from "./../interfaces/IPlayer";
import { Component } from 'vue';
export default class VimeoPlayer implements IPlayerComponent {
    readonly name: string;
    private regex;
    private videoidrgx;
    private currentMediaId;
    test(input: string): boolean;
    getComponent(): Component;
    getMediaId(): string;
    get(): ILoadedVideoStrategy;
}
