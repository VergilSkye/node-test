const expect = require('expect');
const utils = require('./utils');
describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');

        });

    })
    describe('#async add', () => {
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    })


    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(10);

            expect(res).toBe(100).toBeA('number');
        });
    })
    describe('#async square', () => {
        it('should async square a number', (done) => {
            utils.asyncSquare(10, (square) => {
                expect(square).toBe(100).toBeA('number');
                done();
            });
        });
    });


});


// should verify fist and last names are set 
// assert it include fistName and Lastname with proper values
it('should set fistName and lastName', () => {
    var user = {
        location: 'Brasília',
        age: 25
    };
    var res = utils.setName(user, 'Vergil Skye');

    expect(user).toEqual(res);
    expect(res).toInclude({
        fistName: 'Vergil',
        lastName: 'Skye'
    });
});

// it('should expect some values',()=>{
//     // expect(12).toNotBe(12);
//     // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toExclude({
//         age: 23
//     })
// });