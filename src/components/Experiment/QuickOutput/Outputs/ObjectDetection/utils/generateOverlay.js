import {ConvertHexToRGB} from "../../_Common/utils/HexConverter";

function splitToChunks(array, parts) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

export const splitIntoRows = (props, isFilled) => {
  return splitToChunks(props.float_mask.map(isFilled), props.height);
}

export const findContourLine = (data) => {
  const getColValue = (y, x) => {
    if (y === -1 || y > data.length - 1 || x === -1 || x > data[y].length - 1) return false;

    return data[y][x];
  }
  const every = (...values) => {
    const trueCount = values.filter(v => v).length;

    return trueCount > values.length - 1;
  }

  return data.map((row, rowIdx) => {
    return row.map((col, colIdx) => {
      const left = getColValue(rowIdx, colIdx - 1);
      const right = getColValue(rowIdx, colIdx + 1);
      const up = getColValue(rowIdx - 1, colIdx);
      const down = getColValue(rowIdx + 1, colIdx);
      const upLeft = getColValue(rowIdx - 1, colIdx - 1);
      const upRight = getColValue(rowIdx - 1, colIdx + 1);
      const downLeft = getColValue(rowIdx + 1, colIdx - 1);
      const downRight = getColValue(rowIdx - 1, colIdx + 1);

      if (col === false) return false;
      return col === true && !every(up, down, left, right, upLeft, upRight, downLeft, downRight);

    })
  })
}

export const generateOverlayDataUri = (props, getAlpha) => {
  let x = 0;
  let y = 0;


  const canvas = document.createElement('canvas');

  canvas.width = props.width;
  canvas.height = props.height;
  const context = canvas.getContext("2d");
  const imageData = context.createImageData(props.width, props.height);
  for (let index = 0; index < props.width * props.height; index++) {
    x = index % props.width;
    y = Math.floor(index / props.width);

    let value = props.float_mask[index] ?? 0;

    const rgb = ConvertHexToRGB(props.color.backgroundColor);


    imageData.data[index * 4 + 0] = rgb.r; // red
    imageData.data[index * 4 + 1] = rgb.g; // green
    imageData.data[index * 4 + 2] = rgb.b; // blue
    imageData.data[index * 4 + 3] = getAlpha(value)// alpha
  }

  context.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}
