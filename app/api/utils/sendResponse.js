export function sendResponse(statusCode, message = "An error occurred! ", data = null) {
    Response.json({ message: message, status: statusCode, data })
}