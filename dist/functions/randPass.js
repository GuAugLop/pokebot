"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randPass = void 0;
function randPass(sizePass) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < sizePass; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength + 1));
    }
    return result;
}
exports.randPass = randPass;
