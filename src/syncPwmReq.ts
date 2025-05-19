export async function syncPwmReq(pin_id, operations) {
  let request = "/hardware/operation";
  let body = {
    event: "now",
    actions: [],
  };
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].frequency != 0) {
      body["actions"].push([
        "pwm",
        0,
        operations[i].frequency,
        operations[i].duration,
        "sync",
        parseInt(pin_id),
        512,
      ]);
    } else {
      body["actions"].push([
        "delay",
        0,
        "ms",
        Math.floor(operations[i].duration * 1000),
      ]);
    }
  }
  try {
    const response = await fetch(request, {
      method: "post",
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (data.errorcode != 0) {
      console.log("API returns error code:", data.errorcode);
    }
  } catch (error) {
    console.log("Error call API:", error);
  }
}
