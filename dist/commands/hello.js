"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
function hello(message, client) {
    if (!message.isGroupMsg) {
        client.sendText(message.from, 'Welcome PokeBot');
    }
}
exports.hello = hello;
