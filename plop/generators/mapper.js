module.exports = (plop) => {
  plop.setGenerator('mapper', {
    description: 'Create a mapper',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your mapper name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/mappers/{{name}}/index.ts',
        templateFile: 'templates/mapper/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/mappers/{{name}}/test.ts',
        templateFile: 'templates/mapper/test.ts.hbs'
      },
    ]
  })
}
