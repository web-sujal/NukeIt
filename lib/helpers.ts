export const getBgColor = (status: string) => {
  let bgColor = "";

  switch (status) {
    case "completed":
      bgColor = "green";
      break;
    case "haven't done":
      bgColor = "red";
      break;
    case "tomorrow":
      bgColor = "orange";
      break;
    case "in progress":
      bgColor = "cyan";
      break;
    case "not started":
    default:
      bgColor = "bg-modal-highlight-primary dark:bg-modal-highlight-secondary";
      break;
  }

  return bgColor;
};
