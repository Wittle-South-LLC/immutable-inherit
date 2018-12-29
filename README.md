ImmutableInherit
================

This package provides a single class, ImmutableInherit, that can be used 
in Immutable collections, but be extended through inheritance. Specifically,
it implements Immutable behavior for *is*, *toJS()*, etc.

It takes a single argument that can be:

* An Immutable class (e.g. Map, List, OrderedMap, ...)
* A JavaScript object
* A JavaScript list

Whatever you pass as an argument to the constructor will be converted to an
Immutable object (via fromJS) if it isn't already immutable (tested via 
isImmutable()). The argument will be available via the getData() method,
or to subclasses via the _data property.

If called without an argument, the data element will be an empty Map.

Example
-------

You can extend ImmutableInherit with additional properties, as long you
ensure that any methods that set value return a new copy of the object.
So assuming that you might want an immutable object that knows whether it
is newly created in a client but not persisted. 

class ClientObject extends ImmutableInherit {
    constructor(createFrom) {
        super(createFrom)
        this._new = false
    }
    setNew(newVal) {
        return !this._new === newVal 
            ? Object.assign(new this.constructor(this._data), {
                _new: newVal,
        })
      : this
    }
}
