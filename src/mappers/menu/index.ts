import { GetMainQuery } from "graphql/generated/graphql"

export const menuMapper = (menu: GetMainQuery["menus"]) => {
  return menu.map((menu) => ({
    name: menu.name,
    route: `/#${menu.link}`,
  }))
}
