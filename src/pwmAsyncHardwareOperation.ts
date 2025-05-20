export function pwmAsyncHardwareOperation(
    opers: any[], // Array to hold operations
    pwm_id: number | undefined, // PWM ID (0-3)
    freq: number, // Frequency (1-50000 Hz)
    duration: number, // Duration in milliseconds
    mode: "sync" | "async", // Mode must be "sync" or "async"
    pwm_1_pin: number | undefined, // Pin for PWM 1
    pwm_1_duty_cycle: number | undefined, // Duty cycle for PWM 1 (1-1023)
    pwm_2_pin?: number, // Optional pin for PWM 2
    pwm_2_duty_cycle?: number, // Optional duty cycle for PWM 2 (1-1023)
    pwm_3_pin?: number, // Optional pin for PWM 3
    pwm_3_duty_cycle?: number // Optional duty cycle for PWM 3 (1-1023)
): number {
    let ret = 0;
  
    if (!Array.isArray(opers)) {
        ret = -1;
    } else if (pwm_id === undefined || pwm_id < 0 || pwm_id > 3) {
        ret = -1;
    } else if (freq < 1 || freq > 50000) {
        ret = -1;
    } else if (typeof duration !== "number") {
        ret = -1;
    } else if (mode !== "sync" && mode !== "async") {
        ret = -1;
    } else if (pwm_1_pin === undefined || pwm_1_pin < 0 || pwm_1_pin >= 20) {
        ret = -1;
    } else if (
        pwm_1_duty_cycle === undefined ||
      pwm_1_duty_cycle <= 0 ||
      pwm_1_duty_cycle >= 1024
    ) {
        ret = -1;
    } else {
        const pwm_oper: (string | number)[] = [
            "pwm",
            pwm_id,
            freq,
            duration,
            mode,
            pwm_1_pin,
            pwm_1_duty_cycle,
        ];
  
        if (pwm_2_pin !== undefined) {
            if (
                pwm_2_duty_cycle === undefined ||
          pwm_2_duty_cycle <= 0 ||
          pwm_2_duty_cycle >= 1024
            ) {
                ret = -1;
            } else {
                pwm_oper.push(pwm_2_pin, pwm_2_duty_cycle);
            }
        }
  
        if (pwm_3_pin !== undefined) {
            if (
                pwm_3_duty_cycle === undefined ||
          pwm_3_duty_cycle <= 0 ||
          pwm_3_duty_cycle >= 1024
            ) {
                ret = -1;
            } else {
                pwm_oper.push(pwm_3_pin, pwm_3_duty_cycle);
            }
        }
  
        if (ret === 0) {
            opers.push(pwm_oper);
        }
    }
  
    return ret;
}