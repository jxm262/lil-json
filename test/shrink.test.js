import shrink from '../src/shrink'
import chai from 'chai'
import sinon from 'sinon'


var json = require('../temp1.json')


describe('shrink', function () {
    it('makes it smaller', function () {

        const expectedJson = `{"1_obj":{"2_obj":{"3_obj":{"value":"some value","arr_value":[[["nested arr val 1","nested arr val 2","nested arr val 3"],["nested arr val 1","nested arr val 2","nested arr val 3"],["nested arr val 1","nested arr val 2","nested arr val 3"]]]}}},"1_str":"level 1 string","1_num":1.01,"1_null":null,"1_arr":[["nested arr val 1","nested arr val 2","nested arr val 3"],["nested arr val 1","nested arr val 2","nested arr val 3"],["nested arr val 1","nested arr val 2","nested arr val 3"]]}`

        const liljson = shrink(json)

        JSON.stringify(liljson).should.equal(expectedJson)
    });
});
