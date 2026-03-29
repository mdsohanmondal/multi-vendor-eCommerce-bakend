export function throwError(field: any, msg: string) {
  if (field) throw new Error(msg);
}
