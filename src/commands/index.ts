import { Message, Whatsapp } from 'venom-bot';
import { hello } from './hello';
import { credentials } from './credentials';

export interface Commands {
  [key: string]: (message: Message, client: Whatsapp) => void;
}

const commands: Commands = {
  '!hello': hello,

  //ADM
  '!credentials': credentials,
};

export default commands;
