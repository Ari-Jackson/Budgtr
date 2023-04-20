import dayjs from "dayjs";
import { type dataItem } from "./types";

const getsAndFormatsTotal = (data: dataItem[]) => {
  return data.reduce((total, item) => {
    if (item.deposit) {
      return total + item.amount;
    }
    return total - item.amount;
  }, 0);
};

const formatsUnix = (unix: number, length = "short") => {
  {
    if (length === "long") {
      return dayjs(unix).format("MMM D, YYYY");
    }
    return dayjs(unix).format("MMM D");
  }
};

export { getsAndFormatsTotal, formatsUnix };
