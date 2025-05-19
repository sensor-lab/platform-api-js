export async function getStatus(): Promise<any | -1> {
  const request = "/hardware/status";
  try {
    const response = await fetch(request, {
      method: "get",
    });
    const ret = await response.json();
    if (!ret.hasOwnProperty("errorcode")) {
      return ret;
    } else {
      return -1;
    }
  } catch (error) {
    console.log("Error call API:", error);
  }
  return -1;
}