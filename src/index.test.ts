import { pipeline } from "./index";

describe("Pipeline function", () => {
  it("should pipe the input to the first function, and then each function's return value to the next function", () => {
    const toLowerCase = (input: string) => input.toLowerCase();
    const removePunctuation = (input: string) => input.replace(/\./g, "").replace(/\!/g, "");
    const toArray = (input: string) => input.split(" ");
    const joinWithHyphen = (input: string[]) => input.join("-");
    
    const input = "This... is a file name!";
    const output =
      pipeline(
        input,
    
        toLowerCase,
        removePunctuation,
        toArray,
        joinWithHyphen);
    
    expect(output).toBe("this-is-a-file-name");
  });
});
