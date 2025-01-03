function handleAPIResponse(
  response:
    | { success: true; data: string; error: string }
    | { success: false; error: string },
) {
  if (response.success) {
    console.log(`Data: ${response.data}`);
  } else {
    console.error(`Error: ${response.error}`);
  }
}
