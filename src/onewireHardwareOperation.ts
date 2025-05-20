export function onewireHardwareOperation(
    opers: Array<any>, // Array to hold operations
    pin: number,       // Pin number
    mode: "read" | "write" | "search" | "reset", // Allowed modes
    length: number = 0, // Length for read/write operations
    data: Array<any> = [] // Data for write operations
): number { // Return type is number
    let ret = 0;
    if (opers.constructor != Array) {
        ret = -1;
    } else if (pin == undefined || pin < 0 || pin > 19) {
        ret = -1;
    } else if (
        mode !== "read" &&
        mode !== "write" &&
        mode !== "search" &&
        mode !== "reset"
    ) {
        ret = -1;
    } else if ((mode === "read" || mode === "write") && length <= 0) {
        ret = -1;
    } else if (mode === "write" && data.length == 0) {
        ret = -1;
    } else {
        if (mode === "search") {
            opers.push(["onewire", pin, "search"]);
        } else if (mode === "reset") {
            opers.push(["onewire", pin, "reset"]);
        } else if (mode === "read") {
            opers.push(["onewire", pin, "read", length]);
        } else {
            opers.push(["onewire", pin, "write", length, ...data]);
        }
    }
    return ret;
}
