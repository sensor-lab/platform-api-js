export function advanceOutputStartHardwareOperation(
    opers: any[], // Array to hold operations
    pin_id: number | undefined, // Pin ID, can be undefined
    data: any[] // Data array to be appended
): number {
    let ret = 0;

    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (pin_id === undefined || pin_id < 0 || pin_id > 19) {
        ret = -1;
    } else {
        let adv_start = ["advance_output", pin_id, "start", data.length];
        adv_start = adv_start.concat(data);
        opers.push(adv_start);
    }

    return ret;
}