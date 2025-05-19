export function addReturnInformation(
    event: Record<string, any>,
    return_info: any[] | unknown
): Record<string, any> {
    if (Array.isArray(return_info)) {
        event.return = return_info;
    } else {
        console.log(`Bad repeat keyword ${return_info}`);
    }

    return event;
}