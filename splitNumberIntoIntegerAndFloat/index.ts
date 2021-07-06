 
 function splitNumberIntoIntegerAndFloat(
  number: number,
  decimal: number = 2
): [string, string] {
  const [_integer, _decimal] = number
    .toFixed(decimal + 1)
    .slice(0, -1)
    .split('.');
  return [_integer, _decimal];
}