/* BasicInheritance.js - Shows how simple inheritance can work */
import ImmutableInherit from '../src/ImmutableInherit'

// Extend the object and add a property on the new object
export default class BasicInheritance extends ImmutableInherit {
  constructor(createFrom) {
    super(createFrom)
    this._prop = "Test"
  }

  // Any method that changes a value needs to return a new object
  // This method will return the existing object if the value provided
  // is the same as the current property, otherwise a new object
  // with the new property value
  setProp(val) {
    return this._prop !== val
      ? Object.assign(new this.constructor(this._data), {
          _prop: val
      })
      : this
  }

  getProp() {
    return this._prop
  }

  // If you're maintaining any values outside of this._data, you need
  // to override equals and check that first.
  equals(obj) {
    if (!obj || ! obj instanceof BasicInheritance || obj.getProp() !== this._prop) {
        return false
    } else {
        return super.equals(obj)
    }
  }
}