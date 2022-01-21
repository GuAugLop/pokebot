"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./hello");
const credentials_1 = require("./credentials");
const commands = {
    '!hello': hello_1.hello,
    //ADM
    '!credentials': credentials_1.credentials,
};
exports.default = commands;
