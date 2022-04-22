export default function FindUniqueNumbers(array) {
  const uniqueNumbers = [];
  let i = 0, len = array.length;
  while (i < len) {
    if (uniqueNumbers.indexOf(array[i]) === -1) uniqueNumbers.push(array[i]);
    i++;
  }
  return uniqueNumbers;
}
