export function delayHardwareOperation(
  opers: any[], // Array to hold operations
  time_unit: "s" | "ms" | "us", // Time unit must be "s", "ms", or "us"
  delay_value: number // Delay value must be a positive number within a valid range
): number {
  let ret = 0;

  if (!Array.isArray(opers)) {
      ret = -1;
  } else if (time_unit !== "s" && time_unit !== "ms" && time_unit !== "us") {
      ret = -1;
  } else if (delay_value <= 0 || delay_value > 65535) {
      ret = -1;
  } else {
      const delay_oper = ["delay", 0, time_unit, delay_value];
      opers.push(delay_oper);
  }

  return ret;
}