import { cn } from "./cn"

test("merges class names", () => {
  const result = cn("foo", "bar")
  expect(result).toBe("foo bar")
})

test("removes conflicting tailwind classes", () => {
  const result = cn("p-4", "p-6")
  expect(result).toBe("p-6")
})