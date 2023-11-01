export const replacedInputString = (string: string | null) => {
  if (!string) return;
  const match = string.match(/Limit:\s*(\d+)/);
  if (match) return match[1];
};
