import file from './entries.json' with { type: "json" };

function calculateDistance() {
  const firstList: Array<number> = [];
  const secondList: Array<number> = [];
  let sum = 0;

  file.forEach(entry => {
    firstList.push(entry[0]);
    secondList.push(entry[1]);
  });

  firstList.sort();
  secondList.sort();

  for (let i = 0; i < firstList.length; i++) {
    sum += Math.abs(firstList[i] - secondList[i]);
  }

  console.log("Total difference is: ", sum);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  calculateDistance();
}
