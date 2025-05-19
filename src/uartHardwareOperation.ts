export function uartHardwareOperation(
    opers,
    tx_pin,
    rx_pin,
    wait_time,
    rcv_num_byte,
    transmit_data = [],
    speed = "9.6k",
    odd_even_bit = "disabled",
    stop_bit = 1,
    data_size = 8,
    uart_id = 0
) {
    let ret = 0;
    if (opers.constructor != Array) {
        ret = -1;
    } else if (tx_pin == undefined || tx_pin < 0 || tx_pin > 19) {
        ret = -1;
    } else if (rx_pin == undefined || rx_pin < 0 || rx_pin > 19) {
        ret = -1;
    } else if (Number.isInteger(wait_time) === false) {
        ret = -1;
    } else if (Number.isInteger(rcv_num_byte) === false) {
        ret = -1;
    } else if (transmit_data.constructor != Array) {
        ret = -1;
    } else if (speed !== "9.6k" && speed !== "38.4k" && speed !== "115.2k") {
        ret = -1;
    } else if (
        odd_even_bit !== "disabled" &&
        odd_even_bit !== "even" &&
        odd_even_bit !== "odd"
    ) {
        ret = -1;
    } else if (stop_bit !== 1 && stop_bit !== 2) {
        ret = -1;
    } else if (
        data_size !== 8 &&
        data_size !== 7 &&
        data_size !== 6 &&
        data_size !== 5
    ) {
        ret = -1;
    } else if (uart_id > 2) {
        ret = -1;
    } else {
        let uart_oper = [
            "uart",
            uart_id,
            tx_pin,
            rx_pin,
            speed,
            odd_even_bit,
            stop_bit,
            data_size,
            wait_time,
            rcv_num_byte,
            transmit_data.length,
            ...transmit_data,
        ];
        opers.push(uart_oper);
    }
    return ret;
}