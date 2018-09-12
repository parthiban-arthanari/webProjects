const util = require('./utils');
const expect = require('expect');

it('Should add twonumbers', () => {
    var res = util.add(10,20);
    expect(res).toBe(30).toBeA('number');
})

it('should async add two numbers', (done) => {
    util.asynAdd(10,40, (sum) => {
        expect(sum).toBe(50);
        done();
    })
});

it('Should suqare a number', () => {
    var res = util.square(5);
    expect(res).toBe(25).toBeA('number');
});

it('should async square numbers', function(done) {
    this.timeout(8000);
    util.asynSquare(10, (sum) => {
        expect(sum).toBe(100);
        done();
    })
})

it('Should set first name and last name', () => {
    var user = {
        age : 25,
        location : 'bangalore'
    };
    var user = util.setName(user, "parthiban arthanari");

    expect(user).toInclude({
        firstName : 'parthiban',
        lastName : 'arthanari'
    });
})

