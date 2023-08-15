// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Inicio',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Estaciones',
      path: '/estaciones',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Pedidos',
      path: '/pedidos',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Usuarios',
      path: '/usuarios',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Cargos',
      path: '/cargos',
      icon: 'tabler:smart-home'
    }
  ]
}

export default navigation
