interface StartAdvanceOutputResponse {
  errorcode: number;
  [key: string]: any; // Additional properties if present
}

export async function startAdvanceOutput(
  pin_id: number, // Pin ID as a number
  cycle: number, // Cycle count as a number
  data: number[] // Data array to be sent
): Promise<void> {
  const request = "/hardware/operation";
  const body = {
    event: "now",
    cycle: cycle,
    actions: [["advance_output", pin_id, "start", data.length, ...data]],
  };

  try {
    const response = await fetch(request, {
      method: "post",
      body: JSON.stringify(body),
    });
    const responseData: StartAdvanceOutputResponse = await response.json();
    if (responseData.errorcode !== 0) {
      console.log("API returns error code:", responseData.errorcode);
    }
  } catch (error) {
    console.log("Error call API:", error);
  }
}