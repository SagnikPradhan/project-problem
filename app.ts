import { phoneCalls } from "./phonecalls";

const multiplier = {
  seconds: 1,
  minutes: 60,
  hours: 60 * 60,
};

function parseHumanReadableTimeFormatElement(v: string): number {
  const [numberString, unit = "seconds"] = v.trim().split(" ");
  const number = parseInt(numberString, 10);
  const suffixedUnit = unit.endsWith("s") ? unit : unit + "s";
  return number * multiplier[suffixedUnit as keyof typeof multiplier];
}

function parseHumanReadableCallDuration(callDuration: string) {
  return callDuration
    .split(/(,|and)/g)
    .filter((v) => !["and", ","].includes(v))
    .map(parseHumanReadableTimeFormatElement)
    .reduce((sum, cur) => sum + cur, 0);
}

function getAverageCallDurationInSeconds() {
  return (
    phoneCalls.reduce((sum, phoneCall) => {
      return sum + parseHumanReadableCallDuration(phoneCall.callDuration);
    }, 0) / phoneCalls.length
  );
}

function stringifySecondsIntoHumanReadable(totalSeconds: number) {
  const { hours, minutes, seconds } = getTimeElementsValues(totalSeconds);

  const timeElements: string[] = [];

  const returnSIfGreaterThan1 = (number: number) => (number > 1 ? "s" : "");

  if (hours > 0)
    timeElements.push(`${hours} hour${returnSIfGreaterThan1(hours)}`);

  if (minutes > 0)
    timeElements.push(`${minutes} minute${returnSIfGreaterThan1(minutes)}`);

  if (seconds > 0)
    timeElements.push(`${seconds} second${returnSIfGreaterThan1(seconds)}`);

  return timeElements
    .map((element, index) => {
      if (index === timeElements.length - 2) return element + " and";
      if (index < timeElements.length - 2) return element + ",";
      else return element;
    })
    .join(" ");
}

function getTimeElementsValues(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / multiplier.hours);

  const minutes = Math.floor(
    (totalSeconds - hours * multiplier.hours) / multiplier.minutes
  );

  const seconds = Math.floor(
    totalSeconds -
      (minutes * multiplier.minutes + hours * multiplier.hours) /
        multiplier.seconds
  );

  return { hours, minutes, seconds };
}

function main() {
  const averageCallDurationInSeconds = Math.floor(
    getAverageCallDurationInSeconds()
  );

  const humanReadableAverageTimeString = stringifySecondsIntoHumanReadable(
    averageCallDurationInSeconds
  );

  console.log(humanReadableAverageTimeString);
}

main();
