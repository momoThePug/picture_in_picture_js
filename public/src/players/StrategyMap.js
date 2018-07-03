"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HashMap_1 = require("../lib/HashMap");
const Youtube_player_1 = require("./youtube/Youtube.player");
const Vimeo_player_1 = require("./vimeo/Vimeo.player");
const youtubePlayer = new Youtube_player_1.default();
const vimeoPlayer = new Vimeo_player_1.default();
const StrategyCollection = new HashMap_1.HashMap({
    youtubePlayer, vimeoPlayer
});
exports.default = StrategyCollection;
