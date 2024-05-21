export function getCurrentTime(): string {
  const d = new Date();
  const fullTime = d.toLocaleTimeString();

  const time = fullTime.slice(0, 5);
  const [hours, minutes] = time.split(":");

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}
