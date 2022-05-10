export default function ParseProbability(val, showPercent = true) {
  const percent = Math.round(val * 100);
  let displayed = `${percent}`;
  if (val < 0.01) displayed = "<1";

  if (showPercent) displayed += "%";

  return displayed;
}
