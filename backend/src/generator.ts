// core password-generation logic
export function generatePassword(
  length: number,
  includeLetters: boolean,
  includeNumbers: boolean,
  includeSpecial: boolean
): string {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specials = '!@#$%^&*()_+-=[]{}|;:"<>,.?/';
  let charset = '';

  if (includeLetters) charset += letters;
  if (includeNumbers) charset += numbers;
  if (includeSpecial) charset += specials;

  if (!charset || length <= 0) {
    return '';
  }

  let pwd = '';
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * charset.length);
    pwd += charset[idx];
  }
  return pwd;
}
