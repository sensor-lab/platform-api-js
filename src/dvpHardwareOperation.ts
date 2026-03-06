export function dvpSetHardwareOperation(
    opers: any[],
    sda_pin: number,
    scl_pin: number,
    xclk_pin: number,
    pclk_pin: number,
    vsync_pin: number,
    href_pin: number,
    reset_pin: number,
    data_0_pin: number,
    format: "jpeg" | "rgb565" | "grayscale",
    pic_size: "640x480" | "1280x720"
): number {
    let ret = 0;
    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (!(sda_pin >= 0 && sda_pin < 20)) {
        ret = -1;
    } else if (!(scl_pin >= 0 && scl_pin < 20)) {
        ret = -1;
    } else if (!(pclk_pin >= 0 && pclk_pin < 20)) {
        ret = -1;
    } else if (!(vsync_pin >= 0 && vsync_pin < 20)) {
        ret = -1;
    } else if (!(href_pin >= 0 && href_pin < 20)) {
        ret = -1;
    } else if (!(data_0_pin >= 0 && data_0_pin < 20)) {
        ret = -1;
    } else {
        if (xclk_pin == undefined) {
            xclk_pin = -1;
        } else if (reset_pin == undefined) {
            reset_pin = -1;
        }
        opers.push([
            "dvp",
            0,
            "set",
            sda_pin,
            scl_pin,
            xclk_pin,
            pclk_pin,
            vsync_pin,
            href_pin,
            reset_pin,
            data_0_pin,
            format,
            pic_size,
        ]);
    }
    return ret;
}

export function dvpCaptureHardwareOperation(
    opers: any[]
): number {
    const ret = 0;
    opers.push(["dvp", 0, "capture"]);
    return ret;
}

export function dvpReadHardwareOperation(
    opers: any[]
): number {
    const ret = 0;
    opers.push(["dvp", 0, "read"]);
    return ret;
}

export function dvpStatusHardwareOperation(
    opers: any[]
): number {
    const ret = 0;
    opers.push(["dvp", 0, "status"]);
    return ret;
}

export function dvpResetHardwareOperation(
    opers: any[]
): number {
    const ret = 0;
    opers.push(["dvp", 0, "reset"]);
    return ret;
}
