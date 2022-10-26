export interface ExampleProps {
  title: string
}

export const exampleMapper = (example: ExampleProps[]) => {
  return example.map((item) => ({
    test: item.title,
  }))
}

const data: ExampleProps[] = [
  {
    title: 'Home'
  },
  {
    title: 'Projetos'
  }
]

// use example
const items = exampleMapper(data)
console.log(items.map((item) => item))
