function quicksort(array, left, right) {
    if (left < right) {
        const midpoint = partition(array, left, right)
        quicksort(array, left, midpoint - 1)
        quicksort(array, midpoint + 1, right)
    }
}

function partition(array, left, right) {
    const pivot = array[right]
    let i = left - 1
    for (let j = left; j < right; j++) {
        if (array[j] > pivot) continue
        i += 1
        swap(array, i, j)
    }
    swap(array, i + 1, right)
    return i + 1
}

function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

function printArray(array) {
    console.log(`[${array.join(", ")}]`)
}

const testCases = [
    [3, 41, 52, 26, 38, 57, 9, 49],
	[ 63, 4, 70, 88, 74, 18, 55, 44, 85, 61 ],
	[ 27, 28, 35, 58, 6, 97, 23, 34, 26, 14, 99, 61, 33, 41, 49 ],
	[ 78, 52, 10, 85, 36, 90, 78, 89, 52, 58, 45, 80, 89, 78, 44, 7, 77, 89, 1, 27, 3, 84, 15, 93, 55, 42, 57, 69, 12, 16, 24, 64, 91, 1, 47 ]
]
for (const testCase of testCases) {
    printArray(testCase)
    quicksort(testCase, 0, testCase.length - 1)
    printArray(testCase)
    console.log("💀")
}