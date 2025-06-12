export function captureTriggerHardwareOperation(
    opers: any[], // Array to hold operations
    pin_id: number | undefined, // Pin ID, can be undefined
    max_data_bytes: number, // Maximum number of data bytes
    time_unit: "ms" | "us", // Time unit must be "ms" or "us"
    capture_condition: "positive" | "negative" | "change", // Capture condition
    capture_time_duration: number, // Duration of capture time
    trigger_pin: number,
    trigger_level: "high" | "low",
    trigger_time_unit: "us" | "ms" | "s",
    trigger_duration: number
) : number {
    let ret = 0;

    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (pin_id === undefined || pin_id < 0 || pin_id >= 20) {
        ret = -1;
    } else if (max_data_bytes <= 0) {
        ret = -1;
    } else if (time_unit !== "ms" && time_unit !== "us") {
        ret = -1;
    } else if (
        capture_condition !== "positive" &&
        capture_condition !== "negative" &&
        capture_condition !== "change"
    ) {
        ret = -1;
    } else if (typeof capture_time_duration !== "number") {
        ret = -1;
    } else {
        const capture_oper = [
            "capture",
            pin_id,
            max_data_bytes,
            time_unit,
            capture_condition,
            capture_time_duration,
            "trigger",
            trigger_pin,
            trigger_level,
            trigger_time_unit,
            trigger_duration
        ];
        opers.push(capture_oper);
    }

    return ret;
}