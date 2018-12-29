/* test-ImmutableInherit.js - Unit tests for ImmutableInherit */

import ImmutableInherit from '../dist/ImmutableInherit'
import { Map } from 'immutable'

var errorCount = 0

const testObj = new ImmutableInherit({key: "value"})

if (!testObj.isImmutable()) {
    console.log('Could not create ImmutableInherit from JS object')
    errorCount += 1
}
if (!testObj.getData() instanceof Map) {
    console.log('JS Object: testObj.getData() did not return a Map')
    errorCount += 1
}
if (testObj.getData().get('key') != 'value') {
    console.log('JS Object: testObj.getData().get(key) did not return value')
    errorCount += 1
}
if (errorCount === 0) {
    console.log('All tests passed!')
}