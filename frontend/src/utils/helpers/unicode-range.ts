type Range = readonly [number, number];

type Ranges = Range[];

type Exceptions = number[];

export const isInRange = (number: number, range: Range) => {
  const start = range[0];
  const end = range[1];

  if (end < start) {
    console.log("The end cannot be further than the beginning");
    return false;
  }

  return start <= number && number <= end;
};

export const isValidStringCharCodes = (line: string, ranges: Ranges, exceptions?: Exceptions) => {
  let isValidStringCharCodes = true;

  for (const char of line) {
    const charCode = char.charCodeAt(0);

    ranges.forEach((range) => {
      if (!isInRange(charCode, range) || exceptions?.includes(charCode)) {
        return (isValidStringCharCodes = false);
      }
    });
  }

  return isValidStringCharCodes;
};
