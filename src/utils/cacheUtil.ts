/*
 * @Author: N0ts
 * @Date: 2023-03-07 17:15:32
 * @Description: 缓存配置操作
 * @FilePath: /chat-gpt/src/utils/cacheUtil.ts
 * @Mail：mail@n0ts.top
 */

import config from "@/config/config";

function save() {
    window.localStorage.setItem("n0ts-chatgpt-config", JSON.stringify(config));
    return config;
}

function read() {
    const cache = JSON.parse(
        window.localStorage.getItem("n0ts-chatgpt-config") ?? "{}"
    );
    if (cache.key) {
        config.key = cache.key;
        config.model = cache.model;
        config.models = cache.models;
        config.system = cache.system;
        config.apiBaseUrl = cache.apiBaseUrl;
        config.robot = cache.robot;
        config.nbCookie = cache.nbCookie;
        return config;
    }
    return save();
}

export default {
    save,
    read,
    config
};
