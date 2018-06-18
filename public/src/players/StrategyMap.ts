import { HashMap } from "../lib/HashMap";
import YoutubePlayer from "./youtube/Youtube.player";
import VimeoPlayer from "./vimeo/Vimeo.player";

const youtubePlayer = new YoutubePlayer();
const vimeoPlayer = new VimeoPlayer();

const StrategyCollection = new HashMap<string, any>({
    youtubePlayer, vimeoPlayer
});

export default StrategyCollection;