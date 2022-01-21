import { Whatsapp } from 'venom-bot';

export async function isAdmin(
  client: Whatsapp,
  groupId: string,
  userId: string
) {
  try {
    const admins = await client.getGroupAdmins(groupId);
    return admins.some((user: any) => user._serialized === userId);
  } catch (err) {
    console.log(err);
    return false;
  }
}
