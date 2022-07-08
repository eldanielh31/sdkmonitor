var data = [1, 2, 3, 4, 5]

const putNewValue = (newValue, listData) => {
    let cont = 1
    let newData = [newValue]
    while (cont < listData.length) {
        newData[cont] = listData[cont - 1]
        cont ++
    }
    return newData
};
console.log(data)
data = putNewValue(6, data)
console.log(data)