import { asCurrency } from './number'

describe('asCurrency tests', () => {
  it('should return an empty string when amount is empty', () => {
    const amount = ''
    const result = ''
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return an empty string when amount is null', () => {
    const amount = null
    const result = ''
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return an empty string when amount is undefined', () => {
    const amount = undefined
    const result = ''
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return 123 when passed as an integer', () => {
    const amount = 123
    const result = '123'
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return 123 when passed as a string', () => {
    const amount = '123'
    const result = '123'
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return 123,456 when passed as an integer', () => {
    const amount = 123456
    const result = '123,456'
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return 123,456 when passed as a string', () => {
    const amount = '123456'
    const result = '123,456'
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return 123,456,789 when passed 123456789', () => {
    const amount = '123456789'
    const result = '123,456,789'
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return abc when passed abc', () => {
    const amount = 'abc'
    const result = 'abc'
    expect(asCurrency(amount)).toEqual(result)
  })
  it('should return abcabc when passed abcabc', () => {
    const amount = 'abcabc'
    const result = 'abcabc'
    expect(asCurrency(amount)).toEqual(result)
  })
})
