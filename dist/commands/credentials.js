"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = void 0;
const randPass_1 = require("../functions/randPass");
const isAdmin_1 = require("../functions/isAdmin");
function credentials(message, client) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (message.isGroupMsg) {
                if (yield (0, isAdmin_1.isAdmin)(client, message.from, message.author)) {
                    const credential = { group: message.from, pass: (0, randPass_1.randPass)(6) };
                    client.sendText(message.sender.id, `Aqui estão os dados de autenticação do grupo: *${message.chat.contact.name}* \n\nGrupo: ${credential.group} \nSenha: ${credential.pass} \n\nVocê pode logar no painel do grupo pela seguinte url: \nhttps://www.google.com.br/`);
                }
            }
        }
        catch (err) { }
    });
}
exports.credentials = credentials;
