import "chai/register-should";
import {config} from "chai";
import {describe, it} from "@jest/globals";

config.truncateThreshold = 0;

describe("Nothing to see here", () => {
  it("please leave", () => {
    expect(true).toBe(true);
  });
});
