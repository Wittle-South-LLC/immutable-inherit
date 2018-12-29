ImmutableInherit Examples
=========================

This directory contains two examples, demonstrating some of the techniques 
for working with ImmutableInherit. Both examples have test coverage as 
part of the test-ImmutableInherit.js test.

BasicInheritance
----------------

This example shows basic inheritance, inherting directly from ImmutableInherit. 
The inherited class shows all of the standard immutable behaviors. This class
also demonstrates how to handle methods that change values, returning a new
object when needed. It also shows how to override the equals method when there
is data unique to the subclass that can be changed.

MultipleInheritance
-------------------

This example extends BasicInheritance, and the associated tests demonstrate how
setProp() from BasicInheritance returns a MultipleInheritance object when called
on a MultipleInheritance instance.
