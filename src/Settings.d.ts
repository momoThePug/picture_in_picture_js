import { BrowserWindow } from 'electron';
export declare enum PIP_PUBLIC_SETTINGS {
    SIZE = 0,
    ALWAYS_ON_TOP = 1,
    POSITION = 2
}
export declare function getContextSetting(): any;
export declare function saveServerSettings(browser: BrowserWindow): void;
export declare function loadServerSettings(browser: BrowserWindow): void;
