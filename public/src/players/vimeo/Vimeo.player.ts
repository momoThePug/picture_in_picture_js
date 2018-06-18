import { IPlayerComponent } from "./../interfaces/IPlayer";
import { Component } from 'vue';


export default class VimeoPlayer implements IPlayerComponent {
    readonly name: string = "Vimeo";
    private regex = /(?:https?:[\\\/][\\\/])?(?:www.)?(?:player.)?(vimeo.com)[\\\/]/ig;
    private videoidrgx = /(video[\\\/])/ig;
    test(input: string): boolean {
        const isPlayer = input.trim().match(this.regex);
        if (!isPlayer) {
            return false;
        }
        const videoURLBody = input.replace(isPlayer[0], '');
        const videoId = videoURLBody.trim().replace(this.videoidrgx, '');

        if (!videoId) {
            return false;
        }
        return true;
    }

    getComponent(): Component {
        return require('./Vimeo.vue').default;
    }
}