const enhancer = require('./enhancer.js');
const { repair, succeed, fail } = require('./enhancer.js');
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

    //Enhancement Succeeds
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

    //Enhancement Fails
    describe('test fail(item)', () => {
        it('returns new item with failed enhancement', () => {

            const e15_less = {
                name: 'item',
                durability: 5,
                enhancement: 14
            }

            const e15_less_fail = {
                name: 'item',
                durability: 0,
                enhancement: 14
            }

            const e15 = {
                name: 'item',
                durability: 5,
                enhancement: 15
            }

            const e15_fail = {
                name: 'item',
                durability: 0,
                enhancement: 15
            }

            const e16_orMore = {
                name: 'item',
                durability: 9,
                enhancement: 17
            }

            const e16_orMore_fail = {
                name: 'item',
                durability: 0,
                enhancement: 16
            }

            expect(fail(e15_less)).not.toBe(e15_less)
            expect(fail(e15_less)).toEqual(e15_less_fail)

            expect(fail(e15)).not.toBe(e15)
            expect(fail(e15)).toEqual(e15_fail)

            expect(fail(e16_orMore)).not.toBe(e16_orMore)
            expect(fail(e16_orMore)).toEqual(e16_orMore_fail)
        })
    })
})