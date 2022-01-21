import * as venom from 'venom-bot';
import commands from './commands';

venom
  .create({ session: 'pokebot' })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client: venom.Whatsapp) {
  client.onMessage((message: venom.Message) => {
    if (commands[message.body]) {
      commands[message.body](message, client);
    }
  });

  
  client.onAddedToGroup((chatEvent: venom.Chat) => {
    //client.sendText(String(chatEvent.id), 'Teste');
  });
}
