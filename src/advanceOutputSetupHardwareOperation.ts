export function advanceOutputSetupHardwareOperation(
    opers: any[], // Array to hold operations
    pin_id: number | undefined, // Pin ID, can be undefined
    time_unit: "ms" | "us", // Time unit must be "ms" or "us"
    logic_0_duration: number, // Duration for logic 0
    logic_0_duty: number, // Duty cycle for logic 0
    logic_1_duration: number, // Duration for logic 1
    logic_1_duty: number // Duty cycle for logic 1
): number {
    let ret = 0;

    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (pin_id === undefined || pin_id < 0 || pin_id > 19) {
        ret = -1;
    } else if (time_unit !== "ms" && time_unit !== "us") {
        ret = -1;
    } else {
        const adv_setup = [
            "advance_output",
            pin_id,
            "setup",
            time_unit,
            "zero",
            logic_0_duration,
            logic_0_duty,
            "one",
            logic_1_duration,
            logic_1_duty,
        ];
        opers.push(adv_setup);
    }

    return ret;
}