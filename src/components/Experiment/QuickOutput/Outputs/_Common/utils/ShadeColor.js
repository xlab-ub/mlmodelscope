import {ConvertHexToRGB} from "./HexConverter";

export default function ShadeColor(color, percent) {
  const rgb = ConvertHexToRGB(color);

  const shade = (color) => {
    let value = Math.floor(color * (100 + percent) / 100);
    if (value > 255) value = 255;
    if (value < 0) value = 0;
    return value;
  }
  const toHex = (value) => value.toString(16).padStart(2, "0");

  const R = shade(rgb.r);
  const G = shade(rgb.g);
  const B = shade(rgb.b);

  return "#" + toHex(R) + toHex(G) + toHex(B);
}
