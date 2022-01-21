import { Message, Whatsapp } from 'venom-bot';
import { randPass } from '../functions/randPass';
import { isAdmin } from '../functions/isAdmin';

export async function credentials(message: Message, client: Whatsapp) {
  try {
    if (message.isGroupMsg) {
      if (await isAdmin(client, message.from, message.author)) {
        const credential = { group: message.from, pass: randPass(6) };
        client.sendText(
          message.sender.id,
          `Aqui estão os dados de autenticação do grupo: *${message.chat.contact.name}* \n\nGrupo: ${credential.group} \nSenha: ${credential.pass} \n\nVocê pode logar no painel do grupo pela seguinte url: \nhttps://www.google.com.br/`
        );
      }
    }
  } catch (err) {}
}
