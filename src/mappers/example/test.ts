import { exampleMapper, ExampleProps } from "."

describe('exampleMapper', () => {
  it('should return the right format when mapped', () => {
    const example = [
      {
        title: 'Home',
      },
      {
        title: 'Projetos',
      },
    ] as ExampleProps[]

    expect(exampleMapper(example)).toStrictEqual([
      {
        test: 'Home',
      },
      {
        test: 'Projetos',
      },
    ])
  })
})
