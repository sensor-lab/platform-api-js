interface SetupAdvanceOutputResponse {
  errorcode: number;
  [key: string]: any; // Additional properties if present
}

export async function setupAdvanceOutput(
    pin_id: number, // Pin ID as a number
    zero_total_duration_us: number, // Total duration for logic 0 in microseconds
    zero_high_duration_us: number, // High duration for logic 0 in microseconds
    one_total_duration_us: number, // Total duration for logic 1 in microseconds
    one_high_duration_us: number // High duration for logic 1 in microseconds
): Promise<void> {
    const request = "/hardware/operation";
    const body = {
        event: "now",
        actions: [
            [
                "advance_output",
                pin_id,
                "setup",
                "us",
                "zero",
                zero_total_duration_us,
                zero_high_duration_us,
                "one",
                one_total_duration_us,
                one_high_duration_us,
            ],
        ],
    };

    try {
        const response = await fetch(request, {
            method: "post",
            body: JSON.stringify(body),
        });
        const data: SetupAdvanceOutputResponse = await response.json();
        if (data.errorcode !== 0) {
            console.log("API returns error code:", data.errorcode);
        }
    } catch (error) {
        console.log("Error call API:", error);
    }
}