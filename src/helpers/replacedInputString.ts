export const replacedInputString = (string: string | null) => {
  if (!string) return;
  const match = string.match(/\d+/);
  if (match) return match[0];
};
