export interface IPlayer {
    height: string;
    width: string;
    videoId: string;
    route: string;
}

export interface IPlayerComponent {
    test(input: string): IPlayer | null;
}