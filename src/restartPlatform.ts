interface RestartResponse {
  errorcode?: number;
  [key: string]: any; // Additional properties if present
}

export async function restartPlatform(): Promise<number> {
  const request = "/hardware/restart";
  try {
    const response = await fetch(request, {
      method: "post",
    });
    const ret: RestartResponse = await response.json();
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