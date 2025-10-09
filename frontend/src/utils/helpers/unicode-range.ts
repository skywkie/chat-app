type Range = readonly [number, number];

type Ranges = Range[];

const isInRange = (number: number, range: Range) => {
  const start = range[0];
  const end = range[1];

  if (end < start) {
    console.log("The end cannot be further than the beginning");
    return false;
  }

  return start <= number && number <= end;
};

const getUnionRange = (ranges: Ranges) => {
  const rangeboundaries: number[] = [];

  ranges.forEach((range) => rangeboundaries.push(...range));

  const start = Math.min(...rangeboundaries);
  const end = Math.max(...rangeboundaries);

  return [start, end] as Range;
};

export const isValidStringCharCodes = (line: string, ranges: Ranges) => {
  let isValidStringCharCodes = true;

  const unionRange = getUnionRange(ranges);

  for (const char of line) {
    const charCode = char.charCodeAt(0);

    if (!isInRange(charCode, unionRange)) {
      return (isValidStringCharCodes = false);
    }
  }

  return isValidStringCharCodes;
};
