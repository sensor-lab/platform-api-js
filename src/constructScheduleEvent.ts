interface ScheduleEvent {
    event: string;
    actions: any[];
    cycle?: number;
    interval?: string;
    start?: string;
}

export function constructScheduleEvent(
    opers: any[], // Array of operations
    interval?: string, // Optional interval as a string
    cycle?: number, // Optional cycle as a number
    start?: string, // Optional start time as a string
    repeat?: any // Unused parameter, kept for compatibility
): ScheduleEvent | null {
    let schedule_event: ScheduleEvent | null = null;
    let pass = true;

    if (cycle === undefined) {
        schedule_event = {
            event: "schedule",
            actions: opers,
        };
    } else if (typeof cycle === "number") {
        schedule_event = {
            event: "schedule",
            actions: opers,
            cycle: cycle,
        };
    } else {
        console.log(`Bad cycle keyword ${cycle}`);
        pass = false;
    }

    if (pass && interval !== undefined) {
        if (typeof interval === "string") {
            if (schedule_event) {
                schedule_event.interval = interval;
            }
        } else {
            console.log(`Bad interval keyword ${interval}`);
            pass = false;
        }
    }

    if (pass && start !== undefined) {
        if (typeof start === "string") {
            if (schedule_event) {
                schedule_event.start = start;
            }
        } else {
            console.log(`Bad start keyword ${start}`);
            pass = false;
        }
    }

    if (!pass) {
        schedule_event = null;
    }

    return schedule_event;
}