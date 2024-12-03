export const DICTIONARY_KEYS: Record<string, string> = {
  Escape: 'C',
  Clear: 'C',
  Enter: '=',
  '*': 'x',
  '/': '÷',
  Backspace: 'C',
};

export const transformBoolean = (value: string | boolean) =>
  typeof value === 'string' ? value === '' : value;
