// ** React Imports
import { useState, MouseEvent, useCallback, Dispatch, SetStateAction, useMemo } from 'react'

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
import {
  CargoEntityResponse,
  Enum_Pedido_Stage,
  Maybe,
  PedidoEntity,
  UsersPermissionsUserEntityResponse,
  usePedidosQuery
} from 'src/generated/graphql'
import { toast } from 'react-hot-toast'

import TableHeader from 'src/components/shared/TableHeader'
import AddUserDrawer from 'src/views/apps/pedidos/AddUserDrawer'
import { usePedidosServices } from 'src/service/usePedidosServices'
import Link from 'next/link'
import { format, formatDistance } from 'date-fns'
import { Chip, FormControl, InputLabel, Select, TablePagination } from '@mui/material'

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

const stages = {
  [Enum_Pedido_Stage.StandBy]: 'Solicitado',
  [Enum_Pedido_Stage.InitialPoint]: 'Inicializado',
  [Enum_Pedido_Stage.FinalPoint]: 'Finalizado',
  [Enum_Pedido_Stage.Read]: 'Enterado'
}

const colors = {
  [Enum_Pedido_Stage.StandBy]: 'warning',
  [Enum_Pedido_Stage.Read]: 'info',
  [Enum_Pedido_Stage.InitialPoint]: 'info',
  [Enum_Pedido_Stage.FinalPoint]: 'success'
} as const

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

  const [selectedStage, setSelectedStage] = useState<string | null>(null)

  const pedidosQuery = usePedidosQuery({
    fetchPolicy: 'network-only',
    variables: {
      sort: 'createdAt:desc',
      pagination: paginationModel,
      filters: {
        ...(selectedStage && { stage: { eq: selectedStage } })
      }
    }
  })

  const dataPedidos = pedidosQuery.data?.pedidos?.data ?? []
  const total = pedidosQuery.data?.pedidos?.meta.pagination.total ?? 0

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
                {row?.attributes?.cliente}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 280,
      field: 'identificacion',
      headerName: 'Identificacion',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {row?.attributes?.identificacion}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 280,
      field: 'estacionInicio',
      headerName: 'Estacion inicial',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {row?.attributes?.estacionInicio}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 280,
      field: 'estacionFin',
      headerName: 'Estacion final',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {row?.attributes?.estacionFin}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 280,
      field: 'user.data.id',
      headerName: 'ASIGNADO A',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {row?.attributes?.user?.data?.attributes?.nombreCompleto}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 280,
      field: 'cargo.data.id',
      headerName: 'CARGO',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {row?.attributes?.cargo?.data?.attributes?.nombre}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 280,
      field: 'tiempo',
      headerName: 'tiempo',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {formatDistance(new Date(row?.attributes?.fehcaInicio), new Date(row?.attributes?.fechaFin))}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 280,
      field: 'creadoPor',
      headerName: 'Creado por',
      renderCell: ({ row }: CellType) => {
        console.log(row?.attributes?.creadoPor?.data?.attributes?.nombreCompleto)

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {row?.attributes?.creadoPor?.data?.attributes?.nombreCompleto}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 180,
      field: 'stage',
      headerName: 'Estado',
      renderCell: ({ row }: CellType) => {
        const stage = row?.attributes?.stage as Enum_Pedido_Stage

        return <Chip color={colors?.[stage]} label={stages?.[stage]} />
      }
    },
    {
      flex: 0.25,
      minWidth: 180,
      field: 'fehcaInicio',
      headerName: 'Hora de inicio',
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {row?.attributes?.fehcaInicio ? format(new Date(row?.attributes?.fehcaInicio), 'hh:mm a') : '_'}
          </Typography>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 180,
      field: 'fechaFin',
      headerName: 'Hora de fin',
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {row?.attributes?.fechaFin ? format(new Date(row.attributes.fechaFin), 'hh:mm a') : '_'}
          </Typography>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 180,
      field: 'createdAt',
      headerName: 'Hora de creacion',
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {format(new Date(row?.attributes?.createdAt), 'hh:mm a')}
          </Typography>
        )
      }
    },

    {
      flex: 0.1,
      minWidth: 150,
      sortable: false,
      field: 'actions',
      headerName: 'Accciones',
      renderCell: ({ row }: CellType) => (
        <RowOptions
          data={row}
          setIsModal={setIsModal}
          setDataPedido={setDataPedido}
          refetch={pedidosQuery.refetch}
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

  const dataExport = useMemo(
    () =>
      dataPedidos?.map(pedido => {
        return {
          cliente: pedido?.attributes?.cliente,
          descripcion: pedido?.attributes?.descripcion,
          estacionInicio: pedido?.attributes?.estacionInicio,
          estacionFin: pedido?.attributes?.estacionFin,
          fechaInicio: pedido?.attributes?.fehcaInicio!,
          fechaFin: pedido?.attributes?.fechaFin!,
          fecha: pedido?.attributes?.fecha!,
          cargo: pedido?.attributes?.cargo?.data?.attributes?.nombre,
          cuantoTardo: pedido?.attributes?.cuantoTardoInicioFin,
          tipoIdentificacion: pedido?.attributes?.tipoIdentificacion,
          identificacion: pedido?.attributes?.identificacion
        }
      }),
    [pedidosQuery.loading]
  )

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Divider sx={{ m: '0 !important' }} />
          <TableHeader
            value={value}
            handleFilter={handleFilter}
            toggle={toggleAddUserDrawer}
            name='Agregar Pedido'
            nameSearch='Buscar pedidos'
            data={dataExport}
            filters={
              <Box>
                <FormControl sx={{ marginRight: 12, width: 200 }}>
                  <InputLabel id='form-stage'>Estado</InputLabel>
                  <Select
                    value={selectedStage ?? ''}
                    label='Estado'
                    labelId='form-stage'
                    onChange={e =>
                      setSelectedStage(e.target.value.trim().length === 0 ? null : (e.target.value as string))
                    }
                  >
                    <MenuItem value=''>Todos</MenuItem>
                    {Object.entries(stages).map(([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            }
          />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={dataPedidos}
            columns={columns}
            hideFooterPagination
            disableRowSelectionOnClick
            localeText={{ noRowsLabel: 'No hay información' }}
            loading={pedidosQuery.loading}
            componentsProps={{
              pagination: {
                labelRowsPerPage: 'Filas por página'
              }
            }}
          />
          <Box
            sx={{
              marginLeft: 'auto'
            }}
          >
            <TablePagination
              rowsPerPageOptions={[5, 10, 50, 100]}
              colSpan={4}
              count={total}
              rowsPerPage={paginationModel.pageSize}
              page={paginationModel.page - 1}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page'
                },
                native: true
              }}
              onRowsPerPageChange={event => {
                console.log({ size: event.target.value })
                setPaginationModel(prev => ({ ...prev, pageSize: parseInt(event.target.value, 10) }))
              }}
              onPageChange={(_, newPage) => {
                console.log({ newPage })
                setPaginationModel(prev => ({ ...prev, page: newPage + 1 }))
              }}
            />
          </Box>
        </Card>
      </Grid>

      <AddUserDrawer
        open={isModal}
        toggle={toggleAddUserDrawer}
        data={dataPedido}
        refetch={pedidosQuery.refetch}
        nameModal={nameModal}
      />
    </Grid>
  )
}

export default PedidosPage
