"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocalStorage = require('node-localstorage').JSONStorage;
const storage = getContextSetting();
var PIP_PUBLIC_SETTINGS;
(function (PIP_PUBLIC_SETTINGS) {
    PIP_PUBLIC_SETTINGS[PIP_PUBLIC_SETTINGS["SIZE"] = 0] = "SIZE";
    PIP_PUBLIC_SETTINGS[PIP_PUBLIC_SETTINGS["ALWAYS_ON_TOP"] = 1] = "ALWAYS_ON_TOP";
    PIP_PUBLIC_SETTINGS[PIP_PUBLIC_SETTINGS["POSITION"] = 2] = "POSITION";
})(PIP_PUBLIC_SETTINGS = exports.PIP_PUBLIC_SETTINGS || (exports.PIP_PUBLIC_SETTINGS = {}));
function getContextSetting() {
    const PIP_APP_SETTINGS = "PIP_APP_SETTINGS";
    return new LocalStorage('./' + PIP_APP_SETTINGS);
}
exports.getContextSetting = getContextSetting;
function saveServerSettings(browser) {
    storage.setItem(PIP_PUBLIC_SETTINGS.SIZE, browser.getSize());
    storage.setItem(PIP_PUBLIC_SETTINGS.ALWAYS_ON_TOP, browser.isAlwaysOnTop());
    storage.setItem(PIP_PUBLIC_SETTINGS.POSITION, browser.getPosition());
}
exports.saveServerSettings = saveServerSettings;
function loadServerSettings(browser) {
    const isAlwaysOnTop = storage.getItem(PIP_PUBLIC_SETTINGS.ALWAYS_ON_TOP) || true;
    browser.setAlwaysOnTop(isAlwaysOnTop);
    browser.setPosition.apply(browser, storage.getItem(PIP_PUBLIC_SETTINGS.POSITION) || [0, 0]);
    browser.setSize.apply(browser, storage.getItem(PIP_PUBLIC_SETTINGS.SIZE) || [400, 400]);
}
exports.loadServerSettings = loadServerSettings;
