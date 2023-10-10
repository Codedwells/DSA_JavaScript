function bubble_sort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr;
}


// Test with random array of unsorted numbers
let arr = []
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100))
}
console.log("usorted: ",arr)
console.log(bubble_sort(arr))
