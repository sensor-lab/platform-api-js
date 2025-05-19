export async function setState(
  state: "normal" | "fwupdate" | "appupdate" // Restrict state to specific string values
): Promise<any | -1> {
  const request = "/hardware/config";

  if (state !== "normal" && state !== "fwupdate" && state !== "appupdate") {
    return -1;
  } else {
    try {
      const response = await fetch(request, {
        method: "post",
        body: JSON.stringify({
          state: state,
        }),
      });
      const ret = await response.json();
      return ret;
    } catch (error) {
      console.log("Error call API:", error);
    }
  }
  return -1;
}