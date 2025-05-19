interface GpioOutputScheduleResponse {
  errorcode: number;
  result?: number[][];
}

export async function gpioOutputSchedule(
  pin_id: number, // Pin ID as a number
  level: number, // GPIO output level
  start_time: Date, // Start time as a Date object
  interval: string | null, // Interval as a string or null
  repeat: number // Repeat count
): Promise<number | void> {
  const request = "/hardware/operation";

  const start_time_str =
    start_time.getFullYear() +
    "-" +
    (start_time.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    start_time.getDate().toString().padStart(2, "0") +
    "T" +
    start_time.getHours().toString().padStart(2, "0") +
    ":" +
    start_time.getMinutes().toString().padStart(2, "0") +
    ":" +
    start_time.getSeconds().toString().padStart(2, "0");

  const body: Record<string, any> = {
    event: "schedule",
    start: start_time_str,
    repeat: repeat,
    actions: [["gpio", pin_id, "output", level]],
  };

  if (interval != null) {
    // If no interval, give it default 10d
    // Not setting interval could result in the task being removed unexpectedly.
    body["interval"] = interval;
  }

  try {
    const response = await fetch(request, {
      method: "post",
      body: JSON.stringify(body),
    });
    const data: GpioOutputScheduleResponse = await response.json();

    if (data.errorcode === 0 && data.result) {
      const ret_val = data.result[0][0];
      return ret_val;
    } else {
      console.log("API returns error code:", data.errorcode);
    }
  } catch (error) {
    console.log("Error call API:", error);
  }
}