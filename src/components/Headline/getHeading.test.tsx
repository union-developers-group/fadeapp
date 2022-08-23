import getHeading from './helpers/getHeading'

describe('getHeading', () => {
  it('should match snapshot', () => {
    const mockHeading = getHeading('h2', 'Teste')

    expect(mockHeading).toMatchSnapshot('h2')
    expect(mockHeading).toMatchSnapshot('Teste')
  })
})
