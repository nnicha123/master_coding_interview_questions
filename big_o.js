const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(10000).fill("nemo");

const findNemo = (arr) => {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") console.log("Found NEMO!");
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took: " + (t1 - t0) + " milliseconds");
};

findNemo(nemo);
findNemo(large);
