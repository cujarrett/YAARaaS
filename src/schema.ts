import { z } from "zod"

export const ResponseSchema = z.object({
  statusCode: z.number(),
  headers: z.record(z.string(), z.string()),
  body: z.string()
})

export type ResponseType = z.infer<typeof ResponseSchema>
