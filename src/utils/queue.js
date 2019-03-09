export class Queue {
  constructor () {
    this._oldestIndex = 1
    this._newestIndex = 1
    this._storage = {}
  }
  getStorage () {
    return this._storage
  }
  getSize () {
    return this._newestIndex - this._oldestIndex
  }
  enqueue (data) {
    this._storage[this._newestIndex] = data
    this._newestIndex++
  }
  dequeue () {
    const oldestIndex = this._oldestIndex
    const newestIndex = this._newestIndex
    let deletedData

    if (oldestIndex !== newestIndex) {
      deletedData = this._storage[oldestIndex]
      delete this._storage[oldestIndex]
      this._oldestIndex++

      return deletedData
    }
  }
}
