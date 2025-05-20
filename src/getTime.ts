interface TimeResponse {
  value: any; // Replace `any` with the actual type if known
  [key: string]: any; // Additional properties if present
}

export async function getTime(): Promise<any | -1> {
    const request = "/hardware/timedate";
    try {
        const response = await fetch(request, {
            method: "get",
        });
        const ret: TimeResponse = await response.json();
        if (!Object.prototype.hasOwnProperty.call(ret, "errorcode")) {
            return ret.value;
        } else {
            return -1;
        }
    } catch (error) {
        console.log("Error call API:", error);
    }
    return -1;
}