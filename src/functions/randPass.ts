export function randPass(sizePass: number): string {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < sizePass; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength + 1));
  }
  return result;
}
