export default function DurationConverter(input) {
  if (!inputIsValid(input)) return "0s";

  let functionToRun = (i) => i;
  if (input.endsWith("ms")) functionToRun = millisecondConverter;
  else if (input.endsWith("s")) functionToRun = secondConverter;
  else if (input.endsWith("m")) functionToRun = minuteConverter;

  return functionToRun(input);
}

function inputIsValid(input) {
  return input !== null && input !== undefined && input !== "" && typeof (input) === "string";
}

function secondConverter(input) {
  let time = Number(input.replace("s", ""));
  let rounded = roundToTenths(time);

  return formatResult(rounded);
}

function millisecondConverter(input) {
  let time = Number(input.replace("ms", ""));
  let seconds = time / 1000;
  let rounded = roundToTenths(seconds);

  return formatResult(rounded);
}

function minuteConverter(input) {
  let time = Number(input.replace("m", ""));
  let seconds = time * 60;
  let rounded = roundToTenths(seconds);

  return formatResult(rounded);
}

function formatResult(result) {
  return `${result}s`
}

function roundToTenths(number) {
  return Math.round(number * 10) / 10;
}
