import { Menu } from "graphql/generated/graphql"

export type MenuProps = Pick<Menu, 'name' | 'link'>;

export const menuMapper = (menus: MenuProps[]) => {
  return menus.map((menu) => ({
    name: menu.name,
    route: `/#${menu.link}`,
  }))
}
