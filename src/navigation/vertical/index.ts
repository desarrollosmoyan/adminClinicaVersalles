// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Inicio',
      path: '/home',
      icon: 'iconoir:home'
    },
    {
      title: 'Estaciones',
      path: '/estaciones',
      icon: 'system-uicons:tag'
    },
    {
      title: 'Pedidos',
      path: '/pedidos',
      icon: 'icon-park-outline:transaction-order'
    },
    {
      title: 'Usuarios',
      path: '/usuarios',
      icon: 'tabler:users'
    },
    {
      title: 'Cargos',
      path: '/cargos',
      icon: 'material-symbols:work-outline'
    }
  ]
}

export default navigation
