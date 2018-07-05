const LocalStorage = require('node-localstorage').JSONStorage;
import {BrowserWindow} from 'electron';

const storage = getContextSetting();

export enum PIP_PUBLIC_SETTINGS {
    SIZE, ALWAYS_ON_TOP, POSITION
}

export function getContextSetting(){
    const PIP_APP_SETTINGS = "PIP_APP_SETTINGS"; 
    return new LocalStorage('./' + PIP_APP_SETTINGS)
}

export function saveServerSettings(browser: BrowserWindow){
    storage.setItem(PIP_PUBLIC_SETTINGS.SIZE, browser.getSize());
    storage.setItem(PIP_PUBLIC_SETTINGS.ALWAYS_ON_TOP, browser.isAlwaysOnTop());
    storage.setItem(PIP_PUBLIC_SETTINGS.POSITION, browser.getPosition());
}

export function loadServerSettings(browser: BrowserWindow) {
    const isAlwaysOnTop = storage.getItem(PIP_PUBLIC_SETTINGS.ALWAYS_ON_TOP) || true;
    browser.setAlwaysOnTop(isAlwaysOnTop);
    browser.setPosition.apply(browser,storage.getItem(PIP_PUBLIC_SETTINGS.POSITION) || [0, 0]);
    browser.setSize.apply(browser, storage.getItem(PIP_PUBLIC_SETTINGS.SIZE) || [400,400]);
}