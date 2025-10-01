const modifyArray=(arr, transformFunc) => {
    const newArray = [];
    for(let i=0;i<arr.length;i++){
        newArray.push(transformFunc(arr[i]));
    }
    return newArray;
};

const cToF = (tempsC) => {
    return tempsC * 9/5 /32;
};

const tempsC = [0, 25, 100];
const tempsF = modifyArray(tempsC, cToF);
