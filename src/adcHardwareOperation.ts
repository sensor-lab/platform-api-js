export function adcHardwareOperation(
    opers: any[], // Array to hold operations
    pin: number,
    range: "3.1v" | "1.75v" | "1.25v" | "0.95v"
): number {
    let ret = 0;

    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (pin < 0 || pin >= 20) {
        ret = -1;
    } else {
        opers.push(["adc", pin, range]);
    }

    return ret;
}