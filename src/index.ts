// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
// That returns sorted array by ascending.

// given
//      collection_1, collection_3 already sorted from min(0) to max
//      collection_2 already sorted from max to min(0)


export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const result: number[] = [];

    let indexCol1 = 0;
    let indexCol2 = collection_2.length - 1;
    let indexCol3 = 0;

    while (
        indexCol1 < collection_1.length || 
        indexCol2 >= 0 || 
        indexCol3 < collection_3.length
    ) {
        const valCol1 = indexCol1 < collection_1.length 
          ? collection_1[indexCol1]! 
          : Infinity;
        const valCol2 = indexCol2 >= 0
            ? collection_2[indexCol2]!
            : Infinity;
        const valCol3 = indexCol3 < collection_3.length 
          ? collection_3[indexCol3]! 
          : Infinity;

        if (valCol1 <= valCol2 && valCol1 <= valCol3) {
            result.push(valCol1);
            indexCol1++;
        } else if (valCol2 <= valCol1 && valCol2 <= valCol3) {
            result.push(valCol2);
            indexCol2--;
        } else {
            result.push(valCol3);
            indexCol3++;
        }
        // console.log(result);
    }
    
    return result;
}

function main() {
  const col1 = [1, 13, 28, 51];
  const col2 = [67, 56, 50, 15];
  const col3 = [39, 48, 66, 90];

  const startTime = performance.now();

  const merged = merge(col1, col2, col3);

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(merged);
  console.log(`Elapsed time: ${elapsedTime} ms`);
}

if (import.meta.main) {
  main();
}