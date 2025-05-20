export async function gpio(
    pin_id: number, // Pin ID as a number
    mode: "input" | "output", // Mode must be either "input" or "output"
    level: number // Level as a number (used for output mode)
): Promise<number | void> {
    const request = "/hardware/operation";
    let body: {
    event: string;
    actions: (string | number)[][]; // Array of actions
  };

    if (mode === "input") {
        body = {
            event: "now",
            actions: [["gpio", pin_id, "input", 0]],
        };
    } else {
        body = {
            event: "now",
            actions: [["gpio", pin_id, "output", level]],
        };
    }

    try {
        const response = await fetch(request, {
            method: "post",
            body: JSON.stringify(body),
        });
        const data: {
      errorcode: number;
      result?: number[][]; // Optional result array
    } = await response.json();

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