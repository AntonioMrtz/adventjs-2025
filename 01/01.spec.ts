import { filterGifts } from "./01";

describe("Challenge Day 1", () => {
  it("should filter out gifts with # character", () => {
    const gifts = ["car", "doll#arm", "ball", "#train"];
    const result = filterGifts(gifts);
    expect(result).toEqual(["car", "ball"]);
  });

  it("should return empty array when all gifts are defective", () => {
    const gifts = ["#broken", "#rusty"];
    const result = filterGifts(gifts);
    expect(result).toEqual([]);
  });

  it("should return empty array when input is empty", () => {
    const gifts: string[] = [];
    const result = filterGifts(gifts);
    expect(result).toEqual([]);
  });
});
