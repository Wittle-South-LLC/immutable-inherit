/* ImmutableInherit.js - Base object that extends any Immutable object */

import { is, fromJS, Map } from 'immutable'

const MAX_HASH_CODE = 199999999

export default class ImmutableInherit {
  constructor (createFrom) {
    // We're going to create a _data member that will hold an immutable representation
    // of whatever we received from the constructor

    if (createFrom) {
      if (typeof createFrom === 'object' || createFrom instanceof Array) {
        // We received a normal JavaScript object, so let Immutable create an immutable one
        this._data = fromJS(createFrom)
      } else if (createFrom.isImmutable && createFrom.isImmutable()) {
        // We received an Immutable object, so use it.
        this._data = createFrom
      } else {
        throw new Error('ImmutableInherit constructor called with invalid argument')
      }
    } else {
      // Constructor called with no argument, default to Map()
      this._data = new Map({})
    }
    // We need an internal hash code that will be a unique identifier for this instance
    // TODO: Improve implementation to absolutely guarantee no collisions
    this._hashCode = Math.floor(Math.random() * MAX_HASH_CODE)
  }

  getData () {
    return this._data
  }

  // Part of the Immutable interface contract
  hashCode () {
    return this._hashCode
  }

  // Another part of the Immutable interface contract
  isImmutable () {
    return true
  }

  equals (obj) {
    // This is a key method. We will return true if obj exists and is an 
    // instance of ImmutableInherit, and one of the following is true
    // - the hash codes of the two ImmutableInherit objects are identical
    // - the contained data elements are identical
    // - the two data elements are logically identical as determined by is()
    //   from the Immutable.js package
    return obj && obj instanceof ImmutableInherit &&
           (obj.hashCode() === this._hashCode ||
           obj.getData() === this._data ||
           is(obj.getData(), this._data))
  }
}
