'use strict';



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
59. Using Google, StackOverflow and MDN`);
/*==============================================================*/



const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudes = function (arr) {
    console.log(arr);
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') continue;
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    };

    return max - min;    
};
console.log(calcTempAmplitudes(temperatures));

const calcTempAmplitudesNew = function (t1, t2) {
    const arr = t1.concat(t2);
    console.log(arr);
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') continue;
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    };
    
    return max - min;    
};
console.log(calcTempAmplitudesNew(temperatures, temperatures));


