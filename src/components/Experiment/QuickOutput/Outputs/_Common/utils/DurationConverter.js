export default function DurationConverter(input) {
  let time = Number(input.replace("ms", ""));
  let seconds = Math.round((time / 1000) * 10) / 10;

  return `${seconds}s`;
}
