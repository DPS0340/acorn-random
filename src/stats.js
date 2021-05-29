import { ACORN } from "./main.js";

const result = [];

for (let i = 0; i < 100000; i++) {
  result.push(ACORN());
}

import { mean, std } from "mathjs";

const meanValue = mean(result);
const stdValue = std(result);

console.log({ meanValue, stdValue });
