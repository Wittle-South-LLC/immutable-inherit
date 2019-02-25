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

See the examples directory for demonstrations of how to use and extend
ImmutableInherit.

Changelog
---------
* 0.1.0 - Initial publication
* 0.2.0 - Now with 100% line / branch / statement coverage
* 0.2.1 - Made Immutable a peer dependency
* 0.2.2 - Updated GitHub links after correcting repository ownership
