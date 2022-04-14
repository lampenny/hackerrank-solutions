/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 * 
 *
* Constraints
* 1 ≤ a[i] ≤ 100
* 1 ≤ b[i] ≤ 100
*/

// Submitted answer

function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    
    for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
        aliceScore++;
    }
    else {
      if (a[i] < b[i]) {
        bobScore++;
     }
    }
    }
    let comparison = [aliceScore, bobScore];
    return comparison;
    }

/*
* Alternative
*/

function compareTriplets(a, b) {
    let points = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        } else if (a[i] != b[i]) {
            points[1]++;
        }
    }
    return points;
}

/*
* Alternative
*/

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i <= 100; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }

    return [alice, bob];
}