export default function FindStartX(array, index) {
  if (index === 0) return 0;
  return array.slice(0, index).reduce((prev, curr) => prev + curr.length, 0);
}
