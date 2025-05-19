export async function sendRequest(
  api: string, // API endpoint as a string
  method: string, // HTTP method (e.g., "GET", "POST")
  payload: any, // Request payload
  ipaddr: string = "" // Optional IP address, defaults to an empty string
): Promise<any | -1> {
  try {
    const response = await fetch(ipaddr + api, {
      method: method,
      body: payload,
    });
    const ret = await response.json();
    return ret;
  } catch (error) {
    console.log("Error call API:", error);
    return -1;
  }
}