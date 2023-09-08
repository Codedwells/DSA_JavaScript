// Binary Search
// Data should be sorted
// Time Complexity: O(log n)
// Space Complexity: O(1)

// Binary Search is a searching algorithm that searches for an element in a sorted array.
// A binary search works by comparing the target value to the middle element of the array.
// If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half,
// again taking the middle element to compare to the target value, and repeating this until the target value is found.
// If the search ends with the remaining half being empty, the target is not in the array.
// Binary search runs in logarithmic time in the worst case, making O(log n) comparisons, where n is the number of elements in the array.

// Binary Search is a divide and conquer algorithm.

function binary_search(arr: number[], target: number): boolean {
  let high = arr.length
  let low = 0

  do {
    const mid = Math.floor(low + (high - low) / 2)

    if (arr[mid] === target) {
      return true
    } else if (arr[mid] > target) {
      high = mid
    } else {
      low = mid + 1
    }
  } while (low < high)

  return false
}

console.log(binary_search([1, 2, 3, 4, 5], 3)) // true
console.log(binary_search([1, 2, 3, 4, 5], 6)) // false
