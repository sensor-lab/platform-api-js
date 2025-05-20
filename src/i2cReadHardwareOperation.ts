export function i2cReadHardwareOperation(
    opers: any[], // Array to hold operations
    sda_pin: number | undefined, // SDA pin number
    scl_pin: number | undefined, // SCL pin number
    speed_khz: number | undefined, // Speed in kHz
    device_addr: number | undefined, // Device address
    reg_addr1: number | undefined, // First register address
    reg_addr2: number = -1, // Second register address (optional, defaults to -1)
    read_len: number = 0 // Length of data to read (optional, defaults to 0)
): number {
    let ret = 0;

    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (
        sda_pin === undefined ||
    scl_pin === undefined ||
    speed_khz === undefined ||
    device_addr === undefined ||
    reg_addr1 === undefined
    ) {
        ret = -1;
    } else if (device_addr >= 0x80) {
        ret = -1;
    } else if (reg_addr1 >= 256) {
        ret = -1;
    } else {
        const i2c_oper = [
            "i2c",
            0,
            "read",
            sda_pin,
            scl_pin,
            speed_khz,
            device_addr,
            reg_addr1,
            reg_addr2,
            read_len,
        ];
        opers.push(i2c_oper);
    }

    return ret;
}