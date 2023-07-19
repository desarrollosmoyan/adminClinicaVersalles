// ** React Imports
import { useState, MouseEvent, useCallback, Dispatch, SetStateAction } from 'react'

// ** Next Imports
import Link from 'next/link'

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

import TableHeader from 'src/views/apps/user/list/TableHeader'

// ** Services
import { useEstacionesServices } from 'src/service/useEstacionesServices'
import AddUserDrawer from 'src/views/apps/user/list/AddUserDrawer'

import { format } from 'date-fns'

import { EstacioneEntity } from 'src/generated/graphql'

import { toast } from 'react-hot-toast'

interface CellType {
  row: any
}

export interface UpdateEstacion {
  codigoNFC?: string | undefined | null
  createdAt?: string | undefined | null
  nombre?: string | undefined | null
  updatedAt?: string | undefined | null
  id?: string | undefined | null
}

const RowOptions = ({
  data,
  setIsModal,
  setDataEstacion,
  refetch,
  setNameModal
}: {
  data: EstacioneEntity
  setIsModal: Dispatch<SetStateAction<boolean>>
  setNameModal: Dispatch<SetStateAction<string>>
  setDataEstacion: Dispatch<SetStateAction<UpdateEstacion | undefined>>
  refetch: () => void
}) => {
  // ** Llamada a graphql
  const { DeleteEstacion } = useEstacionesServices()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setNameModal('editar')
    setIsModal(true)
    setDataEstacion({ ...data.attributes!, id: data.id! })
    setAnchorEl(null)
  }

  const handleDelete = async () => {
    const res = await DeleteEstacion({ deleteEstacioneId: data.id! })
    if (res.res) {
      toast.success('Estación eliminada', {
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

const EstacionesPage = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [isModal, setIsModal] = useState(false)
  const [dataEstacion, setDataEstacion] = useState<UpdateEstacion | undefined>()
  const [paginationModel, setPaginationModel] = useState({ page: 1, pageSize: 10 })
  const [nameModal, setNameModal] = useState('crear')

  // ** Llama de graphql
  const { Estaciones } = useEstacionesServices()
  const { dataEstaciones, refetch, loadingEstaciones } = Estaciones()

  // ** Columns
  const columns: GridColDef[] = [
    {
      flex: 0.25,
      minWidth: 280,
      field: 'nombre',
      headerName: 'Nombre',
      renderCell: ({ row }: CellType) => {
        const { nombre } = row.attributes

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography
                noWrap
                component={Link}
                href='/apps/user/view/account'
                sx={{
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {nombre}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'codigoNFC',
      minWidth: 170,
      headerName: 'Codigo NFC',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.attributes.codigoNFC}
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
          setDataEstacion={setDataEstacion}
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
            name='Agregar Estación'
            nameSearch='Buscar estaciones'
          />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={dataEstaciones}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            localeText={{
              noRowsLabel: 'No hay información'
            }}
            loading={loadingEstaciones}
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
        dataEstacion={dataEstacion}
        refetch={refetch}
        nameModal={nameModal}
      />
    </Grid>
  )
}

export default EstacionesPage
