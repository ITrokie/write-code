const arr = [12, 8, 33, 24, 16, 1]

let temp = null;

function bubble(arr) {
    for (let i = 0; i <= arr.length; i += 1) {
        for (let j = 0; j <= arr.length - 1 - i; j += 1) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubble(arr))


function quick(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let middleIndex = Math.floor(arr.length / 2)
    let middleValue = arr[middleIndex]
    arr.splice(middleIndex, 1)
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        let value = arr[i]
        value > middleValue ? rightArr.push(value) : leftArr.push(value)
    }

    return quick(leftArr).concat(middleValue, quick(rightArr))
}


// console.log(quick(arr))

function insert(arr) {
    const handle = []
    handle.push(arr[0])
    // 从第二项开始比较，一直把台面的牌抓光
    for (let i = 1; i < arr.length; i += 1) {
        let A = arr[i]
        // 与手里的牌比较，决定插入的位置
        for (let j = handle.length - 1; j >= 0; j -= 1) {
            let B = handle[j];
            if (A > B) {
                handle.splice(j + 1, 0, A);
                break;
            }
            if (j === 0) {
                handle.unshift(A)
            }
        }
    }
    return handle
}

// insert(arr)