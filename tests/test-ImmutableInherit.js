/* test-ImmutableInherit.js - Unit tests for ImmutableInherit */

import { describe, it } from 'mocha'
import { is, Map, List } from 'immutable'
import chai from 'chai'
import ImmutableInherit from '../src/ImmutableInherit'
import BasicInheritance from '../examples/BasicInheritance'
import MultipleInheritance from '../examples/MultipleInheritance'

const testObj = {key: "value"}
const testMap = new Map(testObj)
const testArray = ['one', 'two']
const testList = new List(testArray)

describe('ImmutableInherit created from javascript object', () => {
  it('.getData() returns Map of supplied object', () => {
    const testImmutableInherit = new ImmutableInherit(testObj)
    chai.expect(is(testImmutableInherit.getData(),testMap)).to.be.true
  })
  it('.isImmutable() returns true', () => {
    const testImmutableInherit = new ImmutableInherit(testObj)
    chai.expect(testImmutableInherit.isImmutable()).to.be.true    
  })
  it('.equals() for the same object returns true', () => {
    const testImmutableInherit = new ImmutableInherit(testObj)
    chai.expect(testImmutableInherit.equals(testImmutableInherit)).to.be.true    
  })
  it('.equals() two separate objects created from the same Immutable object returns true', () => {
    const t1 = new ImmutableInherit(testMap)
    const t2 = new ImmutableInherit(testMap)
    chai.expect(t1.hashCode() !== t2.hashCode()).to.be.true
    chai.expect(t1._data === t2._data).to.be.true
    chai.expect(t1.equals(t2)).to.be.true    
  })
  it('.equals() two separate objects created from the same Javascript object returns true', () => {
    const t1 = new ImmutableInherit({key: 'newValue'})
    const t2 = new ImmutableInherit({key: 'newValue'})
    chai.expect(t1.hashCode() !== t2.hashCode()).to.be.true
    chai.expect(t1._data !== t2._data).to.be.true
    chai.expect(t1.equals(t2)).to.be.true    
  })
  it('.equals() two separate objects created from two different javascript object returns false', () => {
    const t1 = new ImmutableInherit({key: 'Value1'})
    const t2 = new ImmutableInherit({key: 'Value2'})
    chai.expect(t1.equals(t2)).to.be.false
  })
})

describe('ImmutableInherit other creation approaches', () => {
  it('From Map: .getData() returns supplied object', () => {
    const testImmutableInherit = new ImmutableInherit(testMap)
    chai.expect(is(testImmutableInherit.getData(),testMap)).to.be.true
  })
  it('From JS Array: .getData() returns List supplied object', () => {
    const testImmutableInherit = new ImmutableInherit(testArray)
    chai.expect(is(testImmutableInherit.getData(),testList)).to.be.true
  })
  it('From List: .getData() returns supplied object', () => {
    const testImmutableInherit = new ImmutableInherit(testArray)
    chai.expect(is(testImmutableInherit.getData(),testList)).to.be.true
  })
  it('No Argument: .getData() returns empty Map', () => {
    const testImmutableInherit = new ImmutableInherit()
    chai.expect(is(testImmutableInherit.getData(),Map({}))).to.be.true
  })
  it('Simple Type: .getData() throws an error', () => {
    chai.expect(() => {new ImmutableInherit("string")}).to.throw(Error)
  })
})

describe('Basic Inheritance Example Tests', () => {
  it('Creates a BasicInheritance object with ImmutableInherit behaviors', () => {
    const testBI = new BasicInheritance({key: "value"})
    chai.expect(testBI.isImmutable()).to.be.true
    chai.expect(is(testBI.getData(), Map({key: "value"}))).to.be.true
  })
  it('SetProp returns a new object with same internal data', () => {
    const testBI = new BasicInheritance({key: "value"})
    const testSetProp = testBI.setProp("NewValue")
    chai.expect(testBI.getData() === testSetProp.getData()).to.be.true
    chai.expect(testBI.getProp() !== testSetProp.getProp()).to.be.true
  })
  it('Object comparison works correctly', () => {
    const testBI = new BasicInheritance({key: "value"})
    const testSetProp = testBI.setProp("NewValue")
    chai.expect(testBI.equals(testSetProp)).to.be.false
    const equalsTrue = testSetProp.setProp("NewValue")
    chai.expect(testSetProp === equalsTrue).to.be.true
    const logicalEquals = equalsTrue.setProp(testBI.getProp())
    chai.expect(testBI !== logicalEquals).to.be.true
    chai.expect(testBI.equals(logicalEquals)).to.be.true
  })
})

describe('Multiple Inheritance Example Tests', () => {
  it('Creates a MultipleInheritance object with ImmutableInherit behaviors', () => {
    const testBI = new MultipleInheritance({key: "value"}, "value2")
    chai.expect(testBI.isImmutable()).to.be.true
    chai.expect(is(testBI.getData(), Map({key: "value"}))).to.be.true
  })
  it('Supports methods from both superclasses', () => {
    const testBI = new MultipleInheritance({key: "value"}, "value2")
    chai.expect(testBI.getProp()).to.equal("Test")
    chai.expect(testBI.getVal()).to.equal("value2")
  })
  it('setProp() from BasicInheritance returns a MultipleInheritance', () => {
    const testBI = new MultipleInheritance({key: "value"}, "value2")
    const testClassType = testBI.setProp("value3")
    chai.expect(testClassType instanceof MultipleInheritance).to.be.true
    chai.expect(testClassType.getProp()).to.equal("value3")
  })
})
