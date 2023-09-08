// Search
// Linear Search
// Time Complexity: O(n)
// Space Complexity: O(1)

function linear_search(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i
  }
  return -1
}
