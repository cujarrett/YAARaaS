import { describe, it, expect } from "vitest"
import { handler } from "../src/handler.js"
import { ResponseSchema } from "../src/schema.js"

describe("YAARaaS", () => {
  it("returns a properly-shaped affirmation response", async () => {
    const res = await handler()
    const parsed = ResponseSchema.parse(res)
    const body = JSON.parse(parsed.body)
    expect(body.message).toBe("You are absolutely right — absolutely!")
  })
})
