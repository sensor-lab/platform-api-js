export function gpioHardwareOperation(
    opers: any[], // Array to hold operations
    pin: number | undefined, // Pin ID, can be undefined
    dir: "input" | "output", // Direction must be "input" or "output"
    val: number // Value for the operation
): number {
    let ret = 0;

    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (pin === undefined || pin < 0 || pin >= 20) {
        ret = -1;
    } else if (dir !== "input" && dir !== "output") {
        ret = -1;
    } else {
        if (dir === "input") {
            if (val !== 0 && val !== 1) {
                ret = -1;
            } else {
                opers.push(["gpio", pin, "input", val]);
            }
        } else {
            // output
            if (val !== 0 && val !== 1 && val !== 2) {
                ret = -1;
            } else {
                opers.push(["gpio", pin, "output", val]);
            }
        }
    }

    return ret;
}