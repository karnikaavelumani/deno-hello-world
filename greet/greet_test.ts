import { greet } from "./greet.ts";

import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";

Deno.test("greet test", () => {
  const greeting = greet("Karni");
  assertEquals(greeting, "Hello, Karni");
});
