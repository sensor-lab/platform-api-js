export function uartHardwareOperation(
    opers: any[], // Array to hold operations
    tx_pin: number | undefined, // TX pin number
    rx_pin: number | undefined, // RX pin number
    wait_time: number, // Wait time in milliseconds
    rcv_num_byte: number, // Number of bytes to receive
    transmit_data: number[] = [], // Data to transmit as an array of numbers
    speed: "9.6k" | "38.4k" | "115.2k" = "9.6k", // UART speed
    odd_even_bit: "disabled" | "even" | "odd" = "disabled", // Parity bit configuration
    stop_bit: 1 | 2 = 1, // Stop bit configuration
    data_size: 5 | 6 | 7 | 8 = 8, // Data size in bits
    uart_id: number = 0 // UART ID (0-2)
  ): number {
    let ret = 0;
  
    if (!Array.isArray(opers)) {
      ret = -1;
    } else if (tx_pin === undefined || tx_pin < 0 || tx_pin > 19) {
      ret = -1;
    } else if (rx_pin === undefined || rx_pin < 0 || rx_pin > 19) {
      ret = -1;
    } else if (!Number.isInteger(wait_time)) {
      ret = -1;
    } else if (!Number.isInteger(rcv_num_byte)) {
      ret = -1;
    } else if (!Array.isArray(transmit_data)) {
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
      const uart_oper = [
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