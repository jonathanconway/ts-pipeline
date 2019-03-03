# ts-pipeline

In lieu of an official ES6 / Typescript pipe operator, here's my own simple, home-baked solution.

## Example

```ts
import { pipeline } from "ts-pipeline";

const toLowerCase = (input: string) => input.toLowerCase();
const removePunctuation = (input: string) => input.replace(/./g, "").replace(/!/g, "");
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


console.log("Output: ", output);
// Output: "this-is-a-file-name"
```
