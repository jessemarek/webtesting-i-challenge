const enhancer = require('./enhancer.js');
const { repair, succeed } = require('./enhancer.js');
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

    describe('test succeed(item)', () => {
        it('returns new item with successful enhancement', () => {
            const item = {
                name: 'item',
                durability: 100,
                enhancement: 0
            }

            const enhancedItem = {
                name: 'item',
                durability: 100,
                enhancement: 1
            }

            const maxedItem = {
                name: 'item',
                durability: 100,
                enhancement: 20
            }

            expect(succeed(item)).not.toBe(item)
            expect(succeed(item)).toEqual(enhancedItem)
            expect(succeed(maxedItem)).toEqual(maxedItem)
        })
    })
})