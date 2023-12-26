export const camelize = (string: string) =>
  string.replace(/-./g, (char) => char[1].toUpperCase());
