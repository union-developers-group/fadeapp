import { GetMainQuery } from "graphql/generated/graphql"
import { menuMapper } from "."

const menu = [
  {
    name: 'Serviços',
    link: 'services',
  },
  {
    name: 'Sobre',
    link: 'about',
  },
  {
    name: 'Depoimentos',
    link: 'testimonials',
  },
  {
    name: 'Planos',
    link: 'plans',
  },
] as GetMainQuery["menus"]

describe('menuMapper', () => {
  it('should return the right format when mapped', () => {
    expect(menuMapper(menu)).toStrictEqual([
      {
        name: 'Serviços',
        route: '/#services',
      },
      {
        name: 'Sobre',
        route: '/#about',
      },
      {
        name: 'Depoimentos',
        route: '/#testimonials',
      },
      {
        name: 'Planos',
        route: '/#plans',
      },
    ])
  })
})
