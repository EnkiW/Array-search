const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

function q1(arr) {
    const element = arr.filter(num => num > 0);
    const sum = element.reduce((acc, num) => acc + num, 0);
    const count = element.length;
    return { sum, count };
}

function q2(arr) {
    const minElement = Math.min(...arr);
    const index = arr.findIndex(num => num === minElement);
    return { minElement, index };
}

function q3(arr) {
    const maxElement = Math.max(...arr);
    const index = arr.findIndex(num => num === maxElement);
    return { maxElement, index };
}

function q4(arr) {
    const negElement = arr.filter(num => num < 0);
    return negElement.length;
}

    function q5(arr) {
    const positiveElement = arr.filter(num => num > 0);
    const retPositiveElement = positiveElement.filter(num => num % 2 !== 0);
    return retPositiveElement.length;
}

function q6(arr) {
    const positiveElement = arr.filter(num => num > 0);
    const vriPositiveElement = positiveElement.filter(num => num % 2 === 0);
    return vriPositiveElement.length;
}

function q7(arr) {
    const positiveElement = arr.filter(num => num > 0);
    const vriPositiveElement = positiveElement.filter(num => num % 2 === 0);
    return vriPositiveElement.reduce((acc, num) => acc + num, 0);
}

function q8(arr) {
    const positiveElement = arr.filter(num => num > 0);
    const retPositiveElement = positiveElement.filter(num => num % 2 !== 0);
    return retPositiveElement.reduce((acc, num) => acc + num, 0);
}

function q9(arr) {
    const positiveElements = arr.filter(num => num > 0);
    return positiveElements.reduce((acc, num) => acc * num, 1);
}

function q10(arr) {
    const maxElement = Math.max(...arr);
    return arr.map(num => (num === maxElement ? num : 0));
}
