import shrink from '../src/shrink'
import chai from 'chai'

chai.should()

var largeJson = require('./data/large.json')
var expectedOutput = require('./data/large.lil.json')


describe('shrink', function () {
    it('makes it smaller', function () {
        const liljson = shrink(largeJson)

        liljson.should.deep.equal(expectedOutput)
    });
});
