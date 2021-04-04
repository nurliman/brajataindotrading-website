export const minDigits = (minimumIntegerDigits: number, input: number) =>
  input.toLocaleString("en-US", {
    minimumIntegerDigits,
    useGrouping: false,
  });

export default minDigits;
