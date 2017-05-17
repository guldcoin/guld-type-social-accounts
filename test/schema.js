'use strict'
const Ajv = require('ajv')
const should = require('should')
const ajv = new Ajv()
const schema = require('../schema.json')
const goodSchema = require('../examples/good.json')
const badSchema = require('../examples/bad/bad.json')

describe('schema exercises', () => {
  var validator

  it('conforms to standard', require('mocha-standard'))

  it('schema is valid JSON', () => {
    should(JSON.stringify(schema)).not.throwError()
  })

  it('schema compiles', () => {
    should(() => {
      validator = ajv.compile(schema)
    }).not.throwError()
  })

  it('good schema validates', () => {
    should(() => {
      validator(goodSchema).should.equal(true)
      should(validator.errors).equal(null)
    }).not.throwError()
  })

  it('bad schema fails', () => {
    validator(badSchema).should.equal(false)
    validator.errors.length.should.not.equal(0)
  })
})
