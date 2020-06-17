const enhancer = require('./enhancer.js');
const { repair } = require('./enhancer.js');
// test away!
describe('item enhancer', () => {
    it('runs tests', () => {
        expect(true).toBe(true)
    })

    describe('test repair(item)', () => {
        it('returns new item with durablitiy set to 100', () => {
            const item = {
                name: 'item',
                durability: 35,
                enhancement: 0
            }

            const repairedItem = {
                name: 'item',
                durability: 100,
                enhancement: 0
            }

            expect(repair(item)).not.toBe(item)
            expect(repair(item)).toEqual(repairedItem)
        })
    })
})