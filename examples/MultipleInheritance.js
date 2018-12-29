/* MultipleInheritance.js - Tests multiple inheritance */
import BasicInheritance from './BasicInheritance'

// Extend the object and add a property on the new object
export default class MultipleInheritance extends BasicInheritance {
  constructor(createFrom, val) {
    super(createFrom)
    this._val = val
  }

  getVal () {
    return this._val
  }
}
