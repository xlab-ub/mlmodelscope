export default function splitIntoRows(arr, width) {
  const result = [];
  for (let i = 0; i < arr.length; i += width) {
    const chunk = arr.slice(i, i + width);
    result.push(chunk);
  }

  return result;
}
