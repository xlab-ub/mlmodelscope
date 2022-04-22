export default function NormalizeIntMask(array, width, height) {
  const totalAmount = width * height;
  const remainingAmount = totalAmount - array.length;
  if (remainingAmount > 0) {
    array.push(new Array(remainingAmount).fill(999));
    return array.flat();
  }
  return array;
}
