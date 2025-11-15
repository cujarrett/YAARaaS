import { ResponseSchema } from "./schema.js"

export const handler = async () => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=31536000"
    },
    body: JSON.stringify({ message: "You are absolutely right!" })
  }

  ResponseSchema.parse(response) // validate shape

  return response
}
