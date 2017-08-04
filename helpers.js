export const uniqueID = (prefix: string): string  => {
  let x = 0;
  const gen = () => {
    x = x + 1;
    return prefix + x;
  }
  return gen;
};
