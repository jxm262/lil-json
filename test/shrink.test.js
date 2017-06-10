var chai = require('chai');
var sinon = require('sinon');

var json = require('../temp1.json');


describe('shrink', function () {
    it('runs app', function () {

        var liljson = shrink(json);

        console.log('lilJson ', JSON.stringify(liljson));
    });
});

function shrink(data) {

    if (Array.isArray(data)) {
        return shrinkArray(data)
    }

    if ((typeof data === "object") && (data !== null)) {
        return shrinkObj(data)
    }

    return data;
}

function shrinkArray(arr) {
    const shortArr = arr.slice(0, 3)

    return shortArr.map((el) =>{
        return shrink(el)
    })
}

function shrinkObj(obj) {

    const keys = Object.keys(obj)

    if (keys.length === 0) {
        return obj;
    } else {
        return keys.reduce((accum, key) => {

            const value = shrink(obj[key])
            const shrunkObj = { [key] : value }

            const newObj = Object.assign({}, accum,  shrunkObj)

            return newObj
        }, {})
    }
}
