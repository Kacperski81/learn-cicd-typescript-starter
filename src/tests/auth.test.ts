import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when the authorization header is missing", () => {
    const apiKey = getAPIKey({ "content-type": "application/json" });
    expect(apiKey).toBeNull();
  });

  test("returns the API key from a valid authorization header", () => {
    const apiKey = getAPIKey({ authorization: "ApiKey test-key" });
    expect(apiKey).toBe("test-key");
  });

  test("returns null for an unsupported authorization scheme", () => {
    const apiKey = getAPIKey({ authorization: "Bearer test-key" });
    expect(apiKey).toBeNull();
  });

  test("returns null when the authorization header has no key", () => {
    const apiKey = getAPIKey({ authorization: "ApiKey" });
    expect(apiKey).toBeNull();
  });
});
