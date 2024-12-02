import file from './entries.json' with { type: "json" };

function parseDistances(side: string): Array<number> {
  const listDistances: Array<number> = [];

  file.forEach(entry => {
    if (side === 'right') {
      listDistances.push(entry[0]);
    } else {
      listDistances.push(entry[1])
    }
  });

  listDistances.sort();

  return listDistances;
}

function calculateDistance(): void {
  const rightList = parseDistances('right');
  const leftList = parseDistances('left');
  let sum = 0;

  for (let i = 0; i < rightList.length; i++) {
    sum += Math.abs(rightList[i] - leftList[i]);
  }

  console.log("Total difference is: ", sum);
}

function calculateFrequencyRight(): void {
  const rightList = parseDistances('right');
  const leftList = parseDistances('left');
  let sum = 0;

  rightList.forEach(rightDistance => {
    const filteredDistances = leftList.filter(leftDistance => rightDistance === leftDistance);
    sum += rightDistance * filteredDistances.length;
  });

  console.log("The similarity is: ", sum);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  calculateDistance();
  calculateFrequencyRight();
}
