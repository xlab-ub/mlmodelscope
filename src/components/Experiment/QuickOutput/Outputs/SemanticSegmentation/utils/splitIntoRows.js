export default function splitIntoRows(arr, width) {
  const result = [];
  for (let i = 0; i < arr.length; i += width) {
    const chunk = arr.slice(i, i + width);
    result.push(chunk);
  }

  return result;
}

export function groupRow(chunk) {
  const result = [];
  let temp = [];
  for (let i = 0; i < chunk.length; i++) {
    let val = chunk[i];
    if (temp.length === 0 || val === temp[0])
      temp.push(val);
    else {
      result.push(temp);
      temp = [val];
    }
  }
  result.push(temp);
  return result;
}
