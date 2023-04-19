import dayjs from "dayjs";
import { type dataItem } from "./types";

const getsAndFormatsTotal = (data: dataItem[]) => {
  return data.reduce((total, item) => total + item.amount, 0);
};

const formatsUnix = (unix: number) => {
  return dayjs(unix).format("MMM D");
};

export { getsAndFormatsTotal, formatsUnix };
