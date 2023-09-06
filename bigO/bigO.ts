// The time complexity of this function is O(n) because the loop runs n times
// The space complexity of this function is O(1) because the space used is constant
function sum_char_codes(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i)

    // Capital E stops the loop
    if (charCode === 69) return sum

    sum += n.charCodeAt(i)
  }

  return sum
}

console.log(sum_char_codes('abEc')) // 195

// The time complexity of this function is O(n^2) because the loop runs n^2 times
// The space complexity of this function is O(1) because the space used is constant
function sum_char_codes2(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    for (let k = 0; k < n.length; k++) {
      sum += n.charCodeAt(i)
    }
  }

  return sum
}

// The time complexity of this function is O(n^3) because the loop runs n times
// The space complexity of this function is O(1) because the space used is constant
function sum_char_codes3(n: string): number {
  let sum = 0
  for (let i = 0; i < n.length; i++) {
    for (let k = 0; k < n.length; k++) {
      for (let j = 0; j < n.length; j++) {
        sum += n.charCodeAt(i)
      }
    }
  }

  return sum
}

// The time complexity of quickSort is O(n log n) because the loop runs n log n times
// The space complexity of quickSort is O(log n) because the space used is log n
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else right.push(arr[i])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

// The time complexity of binary search trees is O(log n) because the loop runs log n times
// The space complexity of binary search trees is O(log n) because the space used is log n
class BinarySearchTree {
  value: number
  left: BinarySearchTree | null
  right: BinarySearchTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value: number): void {
    if (value < this.value) {
      if (this.left === null) this.left = new BinarySearchTree(value)
      else this.left.insert(value)
    } else {
      if (this.right === null) this.right = new BinarySearchTree(value)
      else this.right.insert(value)
    }
  }

  contains(value: number): boolean {
    if (value === this.value) return true
    if (value < this.value) {
      if (this.left === null) return false
      else return this.left.contains(value)
    } else {
      if (this.right === null) return false
      else return this.right.contains(value)
    }
  }
}
