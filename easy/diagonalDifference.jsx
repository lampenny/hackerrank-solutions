/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

const diagonalDifference = (arr) => {
    let d1 = 0;
    let d2 = 0;
    const l = arr.length
    
    arr.forEach((ele, i, arr) => {
        d1 += ele[i];
        d2 += ele[l - 1 - i];
    })
    return Math.abs(d1 - d2);
}
    