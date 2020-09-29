/**
 * Deno includes:
 * 
 * 1. The test runner in the CLI
 * 2. Assertions in the std lib
 * 3. Built-in test fixtures with Deno.test()
 */

Deno.test({
  name: "example test",
  fn() {
    console.log("hello from our tests");
  },
});
