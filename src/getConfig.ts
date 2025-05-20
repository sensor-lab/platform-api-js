export async function getConfig(): Promise<any | -1> {
    const request = "/hardware/config";
    try {
        const response = await fetch(request, {
            method: "get",
        });
        const ret = await response.json();
        if (!Object.prototype.hasOwnProperty.call(ret, "errorcode")) {
            return ret;
        } else {
            return -1;
        }
    } catch (error) {
        console.log("Error call API:", error);
    }
    return -1;
}