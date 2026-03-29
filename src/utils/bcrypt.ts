import bcrypt from 'bcrypt';
export function hashPassword(text: string): string {
  return bcrypt.hashSync(text, 10);
}

export async function comparePassword(
  plainPassword: string,
  hashPassword: string,
): Promise<boolean> {
  const isMatch = await bcrypt.compare(plainPassword, hashPassword);
  return isMatch;
}
