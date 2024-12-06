/**
 * This function takes a date in string or Date object format and
 * converts it to a formatted string in a specified format.
 * Currently supports format ("YYYY/MM/DD") and other formats.
 * If the input date is invalid, it returns an empty string.
 * @param {string | Date} date - The date to format, either as a string or Date object.
 * @param {string} formatType - The type of format to apply. Default is "YYYY/MM/DD".
 * @returns {string} The formatted date in the specified format.
 */
export const formatDate = (
  date: string | Date,
  formatType:
    | "YYYY-MM-DD"
    | "YYYY/MM/DD"
    | "YYYY-MM-DD-HH-MM-SS"
    | "YYYY/MM/DD HH:MM:SS"
    | "DD/MM/YYYY" = "YYYY/MM/DD"
): string => {
  let parsedDate: Date;

  if (date == null) {
    return "";
  }

  if (typeof date === "string") {
    parsedDate = new Date(date);
  } else {
    parsedDate = date;
  }

  if (isNaN(parsedDate.getTime())) {
    return "";
  }

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const day = String(parsedDate.getDate()).padStart(2, "0");
  const hours = String(parsedDate.getHours()).padStart(2, "0");
  const minutes = String(parsedDate.getMinutes()).padStart(2, "0");
  const seconds = String(parsedDate.getSeconds()).padStart(2, "0");

  switch (formatType) {
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "YYYY/MM/DD":
      return `${year}/${month}/${day}`;
    case "YYYY-MM-DD-HH-MM-SS":
      return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
    case "YYYY/MM/DD HH:MM:SS":
      return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    case "DD/MM/YYYY":
      return `${day}/${month}/${year}`;
    default:
      return `${year}/${month}/${day}`;
  }
};

/**
 * This function takes a file size in bytes and converts it into a human-readable
 * format, choosing the most appropriate unit (Bytes, KB, MB, GB, TB, PB) based on the size.
 * It returns an object with separate values for the size and unit.
 * @param {number} size - The file size in bytes.
 * @return {object} An object containing the formatted file size and the unit.
 */
export const formatFileSize = (
  size: number
): { value: number; unit: string } => {
  if (size < 1024) {
    return { value: size, unit: "Bytes" };
  } else if (size < 1024 * 1024) {
    return { value: Math.floor(size / 1024), unit: "KB" };
  } else if (size < 1024 * 1024 * 1024) {
    return { value: Math.floor(size / 1024 / 1024), unit: "MB" };
  } else if (size < 1024 * 1024 * 1024 * 1024) {
    return { value: Math.floor(size / 1024 / 1024 / 1024), unit: "GB" };
  } else if (size < 1024 * 1024 * 1024 * 1024 * 1024) {
    return { value: Math.floor(size / 1024 / 1024 / 1024 / 1024), unit: "TB" };
  } else {
    return {
      value: Math.floor(size / 1024 / 1024 / 1024 / 1024 / 1024),
      unit: "PB",
    };
  }
};
