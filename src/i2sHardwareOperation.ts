export function i2sStartHardwareOperation(
    opers: any[],
    i2s_module_index: number,
    read_write: 'read' | 'write',
    number_of_bytes: number,
    data: undefined | number[]
): number {
    let ret = 0;
    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (i2s_module_index !== 0 && i2s_module_index !== 1) {
        ret = -1;
    } else {
        if (read_write === 'read') {
            opers.push(["i2s", i2s_module_index, "start", "read", number_of_bytes]);
        } else {
            // write
            if (data === undefined) {
                ret = -1;
            }else {
                const binary_str = String.fromCharCode(...data);
                const base64_data = btoa(binary_str);
                opers.push(["i2s", i2s_module_index, "start", "write", base64_data.length, base64_data]);
            }
        }
    }

    return ret;
}

export function i2sStopHardwareOperation(
    opers: any[],
    i2s_module_index: number,
): number {
    let ret = 0;
    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (i2s_module_index !== 0 && i2s_module_index !== 1) {
        ret = -1;
    } else {
        opers.push(["i2s", i2s_module_index, "stop"]);
    }
    return ret;
}

export function i2sSetupHardwareOperation(
    opers: any[], // Array to hold operations
    i2s_module_index: number,
    data_in_pin: number | undefined,
    data_out_pin: number | undefined,
    sclk_pin: number,
    lrsclk_pin: number,
    mclk_pin: number | undefined,
    frame_bit_len: 16 | 24 | 32,
    mono_stereo: 'mono' | 'stereo',
    sample_rate: number
): number {
    let ret = 0;

    if (!Array.isArray(opers)) {
        ret = -1;
    } else {
        if (data_in_pin === undefined) {
            data_in_pin = -1;
        }
        if (data_out_pin === undefined) {
            data_out_pin = -1;
        }
        if (mclk_pin === undefined) {
            mclk_pin = -1;
        }

        const i2s_oper: (string | number)[] = [
            "i2s",
            i2s_module_index,
            "setup",
            data_in_pin,
            data_out_pin,
            sclk_pin,
            lrsclk_pin,
            mclk_pin,
            frame_bit_len,
            mono_stereo,
            sample_rate,
        ];
        opers.push(i2s_oper);
    }

    return ret;
}