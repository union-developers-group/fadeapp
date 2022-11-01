import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/cl91z5pts2gpr01tchilleqhk/master',
  documents: 'src/**/*.tsx',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
