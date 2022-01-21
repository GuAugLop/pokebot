import { Message, Whatsapp } from 'venom-bot';

export function hello(message: Message, client: Whatsapp): void {
  if (!message.isGroupMsg) {
    client.sendText(message.from, 'Welcome PokeBot');
  }
}
