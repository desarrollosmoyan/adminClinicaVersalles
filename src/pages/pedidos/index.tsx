// ** React Imports
import { useState, MouseEvent, useCallback, Dispatch, SetStateAction } from 'react'

// ** Next Imports

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Services
import { format } from 'date-fns'
import { CargoEntityResponse, Maybe, PedidoEntity, UsersPermissionsUserEntityResponse } from 'src/generated/graphql'
import { toast } from 'react-hot-toast'

import TableHeader from 'src/components/shared/TableHeader'
import AddUserDrawer from 'src/views/apps/pedidos/AddUserDrawer'
import { usePedidosServices } from 'src/service/usePedidosServices'
import Link from 'next/link'

interface CellType {
  row: any
}

export interface UpdatePedido {
  cliente?: string | undefined | null
  createdAt?: string | undefined | null
  descripcion?: string | undefined | null
  estacionFin?: string | undefined | null
  estacionInicio?: string | undefined | null
  nombrePedido?: string | undefined | null
  updatedAt?: string | undefined | null
  identificacion?: string | undefined | null
  tipoIdentificacion?: string | undefined | null
  id?: string | undefined | null
  user?: Maybe<UsersPermissionsUserEntityResponse> | undefined
  cargo?: CargoEntityResponse | undefined | null
}

const RowOptions = ({
  data,
  setIsModal,
  setDataPedido,
  refetch,
  setNameModal
}: {
  data: PedidoEntity
  setIsModal: Dispatch<SetStateAction<boolean>>
  setNameModal: Dispatch<SetStateAction<string>>
  setDataPedido: Dispatch<SetStateAction<UpdatePedido | undefined>>
  refetch: () => void
}) => {
  // ** Llamada a graphql
  const { DeletePedido } = usePedidosServices()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setNameModal('editar')
    setIsModal(true)
    setDataPedido({ ...data.attributes!, id: data.id! })

    setAnchorEl(null)
  }

  const handleDelete = async () => {
    const res = await DeletePedido({ deletePedidoId: data.id! })
    if (res.res) {
      toast.success('Pedido eliminado', {
        duration: 2000
      })
      refetch()
    } else {
      toast.error(res.response as string, {
        duration: 2000
      })
    }
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='tabler:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          component={Link}
          sx={{ '& svg': { mr: 2 } }}
          href={`pedidos/detalle-pedido/${data.id}`}

          // onClick={handleRowOptionsClose}
        >
          <Icon icon='tabler:eye' fontSize={20} />
          Ver
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:edit' fontSize={20} />
          Editar
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:trash' fontSize={20} />
          Eliminar
        </MenuItem>
      </Menu>
    </>
  )
}

const PedidosPage = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [isModal, setIsModal] = useState(false)
  const [nameModal, setNameModal] = useState('crear')
  const [dataPedido, setDataPedido] = useState<UpdatePedido | undefined>()
  const [paginationModel, setPaginationModel] = useState({ page: 1, pageSize: 10 })

  // ** Llama de graphql
  const { Pedidos } = usePedidosServices()
  const { dataPedidos, refetch, loadingPedidos } = Pedidos({
    pagination: { pageSize: paginationModel.pageSize, page: paginationModel.page }
  })

  // ** Columns
  const columns: GridColDef[] = [
    {
      flex: 0.25,
      minWidth: 280,
      field: 'cliente',
      headerName: 'Cliente',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {row.attributes.cliente}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'descripcion',
      minWidth: 170,
      headerName: 'Descripcion',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.attributes.descripcion}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'estacionInicio',
      minWidth: 170,
      headerName: 'Estacion Inicio',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.attributes.estacionInicio}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'estacionFin',
      minWidth: 170,
      headerName: 'Estacion Fin',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.attributes.estacionFin}
            </Typography>
          </Box>
        )
      }
    },

    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'Fecha de creacion',
      field: 'createdAt',
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {format(new Date(row.attributes.createdAt), 'yyyy-MM-dd')}
          </Typography>
        )
      }
    },

    {
      flex: 0.1,
      minWidth: 100,
      sortable: false,
      field: 'actions',
      headerName: 'Accciones',
      renderCell: ({ row }: CellType) => (
        <RowOptions
          data={row}
          setIsModal={setIsModal}
          setDataPedido={setDataPedido}
          refetch={refetch}
          setNameModal={setNameModal}
        />
      )
    }
  ]

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddUserDrawer = () => {
    setIsModal(!isModal)
    setNameModal('crear')
  }

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <Divider sx={{ m: '0 !important' }} />
          <TableHeader
            value={value}
            handleFilter={handleFilter}
            toggle={toggleAddUserDrawer}
            name='Agregar Pedido'
            nameSearch='Buscar pedidos'
          />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={dataPedidos}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            localeText={{ noRowsLabel: 'No hay información' }}
            loading={loadingPedidos}
            componentsProps={{
              pagination: {
                labelRowsPerPage: 'Filas por página'
              }
            }}
          />
        </Card>
      </Grid>

      <AddUserDrawer
        open={isModal}
        toggle={toggleAddUserDrawer}
        data={dataPedido}
        refetch={refetch}
        nameModal={nameModal}
      />
    </Grid>
  )
}

export default PedidosPage
