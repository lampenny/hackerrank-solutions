/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const plusMinus = (arr) => {
    let [pos, neg, zero] = [0, 0, 0];
    const nEle = arr.length;
    
    if (nEle !== 0) {
        arr.map(i => {
            i > 0 ? pos++ : i < 0 ? neg++ : zero++;
        });
    }
        console.log((pos/nEle).toFixed(6));
        console.log((neg/nEle).toFixed(6));
        console.log((zero/nEle).toFixed(6));  
}
