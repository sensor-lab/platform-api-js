interface SetTimeResponse {
  errorcode?: number;
  [key: string]: any; // Additional properties if present
}

export async function setTime(timedate: Date): Promise<number> {
  const request = "/hardware/timedate";

  const timedate_str =
    timedate.getFullYear() +
    "-" +
    (timedate.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    timedate.getDate().toString().padStart(2, "0") +
    "T" +
    timedate.getHours().toString().padStart(2, "0") +
    ":" +
    timedate.getMinutes().toString().padStart(2, "0") +
    ":" +
    timedate.getSeconds().toString().padStart(2, "0");

  const body = {
    value: timedate_str,
  };

  try {
    const response = await fetch(request, {
      method: "post",
      body: JSON.stringify(body), // Corrected to send JSON as a string
    });
    const ret: SetTimeResponse = await response.json();
    if (!ret.hasOwnProperty("errorcode")) {
      return 0;
    } else {
      return -1;
    }
  } catch (error) {
    console.log("Error call API:", error);
  }
  return -1;
}