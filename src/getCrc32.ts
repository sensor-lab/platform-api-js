export async function getCrc32(
  fn: string, // Filename as a string
  external_url: string | undefined = undefined // Optional external URL
): Promise<number | any> {
  let request = `/hardware/getcrc32?fn=${fn}`;
  if (external_url !== undefined) {
    request = external_url + request;
  }
  try {
    const response = await fetch(request, {
      method: "get",
    });
    if (response.status === 404) {
      return -1;
    } else if (response.status === 200) {
      return await response.json();
    } else {
      // could be status code 400
      return -2;
    }
  } catch (error) {
    console.log("Error call API:", error);
  }
  return -3;
}