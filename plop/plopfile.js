/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./generators/component')
const mapperGenerator = require('./generators/mapper')

module.exports = (plop) => {
  componentGenerator(plop)
  mapperGenerator(plop)
}
