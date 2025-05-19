interface NowEvent {
    event: string;
    actions: any[];
    cycle?: number;
}

export function constructNowEvent(opers: any[], cycle?: number): NowEvent | undefined {
    let now_event: NowEvent | undefined;

    if (cycle === undefined) {
        now_event = {
            event: "now",
            actions: opers,
        };
    } else if (typeof cycle === "number") {
        now_event = {
            event: "now",
            actions: opers,
            cycle: cycle,
        };
    }

    return now_event;
}