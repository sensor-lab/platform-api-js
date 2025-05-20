export async function postHardwareOperation(
    event: Record<string, any>, // Event object with dynamic properties
    external_url: string | undefined = undefined // Optional external URL
): Promise<any | void> {
    if (external_url === undefined) {
        const request = "/hardware/operation";
        try {
            const response = await fetch(request, {
                method: "post",
                body: JSON.stringify(event),
            });
            return await response.json();
        } catch (error) {
            console.log("Error call API:", error);
        }
    } else {
        // Used in the testing mode
        const request = external_url + "/hardware/operation";
        try {
            const response = await fetch(request, {
                method: "post",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                mode: "no-cors",
                body: JSON.stringify(event),
            });
            return await response.json();
        } catch (error) {
            console.log("Error call API:", error);
        }
    }
}