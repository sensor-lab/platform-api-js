export async function setConfig(config: Record<string, any>): Promise<any | -1> {
    const request = "/hardware/config";
    try {
        const response = await fetch(request, {
            method: "post",
            body: JSON.stringify(config),
        });
        const ret = await response.json();
        return ret;
    } catch (error) {
        console.log("Error call API:", error);
    }
    return -1;
}