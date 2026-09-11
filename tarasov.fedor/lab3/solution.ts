export function moveZerosToEnd(arr: unknown[]): unknown[] {
  const nonZeros: unknown[] = [];
  const zeros: unknown[] = [];

  for (const item of arr) {
    if (item === 0) {
      zeros.push(item);
    } else {
      nonZeros.push(item);
    }
  }

  return [...nonZeros, ...zeros];
}
