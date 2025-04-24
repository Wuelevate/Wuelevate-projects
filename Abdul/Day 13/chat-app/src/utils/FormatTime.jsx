import { format } from "date-fns";

export const formatTime = () => format(new Date(), "hh:mm a");
