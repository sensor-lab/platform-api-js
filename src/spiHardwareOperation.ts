export function spiHardwareOperation(
  opers: any[], // Array to hold operations
  spi_module_index: number, // SPI module index (e.g., 0)
  mosi_pin: number | undefined, // MOSI pin number
  miso_pin: number | undefined, // MISO pin number (optional)
  clock_pin: number | undefined, // Clock pin number
  cs_pin: number | undefined, // Chip select pin number (optional)
  speed_khz: number, // SPI speed in kHz (1-1000)
  mode: 0 | 1 | 2 | 3, // SPI mode (0-3)
  num_bytes_skip_rcv: number, // Number of bytes to skip receiving
  num_bytes_rcv: number, // Number of bytes to receive
  ...transmit_data: number[] // Data to transmit as an array of numbers
): number {
  let ret = 0;

  if (!Array.isArray(opers)) {
    ret = -1;
  } else if (spi_module_index !== 0) {
    ret = -1;
  } else if (mosi_pin === undefined || clock_pin === undefined) {
    ret = -1;
  } else if (!speed_khz || speed_khz > 1000 || speed_khz <= 0) {
    ret = -1;
  } else if (mode < 0 || mode > 3) {
    ret = -1;
  } else {
    if (miso_pin === undefined) {
      miso_pin = -1;
    }
    if (cs_pin === undefined) {
      cs_pin = -1;
    }
    let spi_oper: (string | number)[] = [
      "spi",
      spi_module_index,
      mosi_pin,
      miso_pin,
      clock_pin,
      cs_pin,
      speed_khz,
      mode,
      num_bytes_skip_rcv,
      num_bytes_rcv,
      transmit_data.length,
    ];
    spi_oper = spi_oper.concat(transmit_data);
    opers.push(spi_oper);
  }

  return ret;
}