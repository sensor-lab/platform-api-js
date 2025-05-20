interface Operation {
  frequency: number; // Frequency in Hz
  duration: number; // Duration in seconds
}

interface SyncPwmResponse {
  errorcode: number;
  [key: string]: any; // Additional properties if present
}

export async function syncPwmReq(
    pin_id: number, // Pin ID as a number
    operations: Operation[] // Array of operations
): Promise<void> {
    const request = "/hardware/operation";
    const body = {
        event: "now",
        actions: [] as (string | number)[][], // Array of actions
    };

    for (let i = 0; i < operations.length; i++) {
        if (operations[i].frequency !== 0) {
            body.actions.push([
                "pwm",
                0,
                operations[i].frequency,
                operations[i].duration,
                "sync",
                parseInt(pin_id.toString(), 10),
                512,
            ]);
        } else {
            body.actions.push([
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
        const data: SyncPwmResponse = await response.json();
        if (data.errorcode !== 0) {
            console.log("API returns error code:", data.errorcode);
        }
    } catch (error) {
        console.log("Error call API:", error);
    }
}