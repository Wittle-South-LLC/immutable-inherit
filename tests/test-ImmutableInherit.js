/* test-ImmutableInherit.js - Unit tests for ImmutableInherit */

import { describe, it, before } from 'mocha'
import chai from 'chai'
import ImmutableInherit from '../src/ImmutableInherit'
import { is, Map, List } from 'immutable'

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

describe('ImmutableInherit created from Map', () => {
  it('.getData() returns supplied object', () => {
    const testImmutableInherit = new ImmutableInherit(testMap)
    chai.expect(is(testImmutableInherit.getData(),testMap)).to.be.true
  })
})

describe('ImmutableInherit created from array', () => {
  it('.getData() returns List supplied object', () => {
    const testImmutableInherit = new ImmutableInherit(testArray)
    chai.expect(is(testImmutableInherit.getData(),testList)).to.be.true
  })
})

describe('ImmutableInherit created from List', () => {
  it('.getData() returns supplied object', () => {
    const testImmutableInherit = new ImmutableInherit(testArray)
    chai.expect(is(testImmutableInherit.getData(),testList)).to.be.true
  })
})

describe('ImmutableInherit created with no argument', () => {
  it('.getData() returns empty Map', () => {
    const testImmutableInherit = new ImmutableInherit()
    chai.expect(is(testImmutableInherit.getData(),Map({}))).to.be.true
  })
})

describe('ImmutableInherit created with simple variable throws exception', () => {
  it('.getData() returns empty Map', () => {
    chai.expect(() => {new ImmutableInherit("string")}).to.throw(Error)
  })
})
