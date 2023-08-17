/* eslint-disable lines-around-comment */
// ** React Imports
import { useState, MouseEvent, useCallback } from 'react'

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

import { toast } from 'react-hot-toast'
import TableHeader from 'src/components/shared/TableHeader'
import { useUsuariosServices } from 'src/service/useUsuariosServices'
import { useRouter } from 'next/router'

interface CellType {
  row: any
}

export interface UpdateUsuario {
  area?: string | undefined | null
  cargo?: string | undefined | null
  email?: string | undefined | null
  nombreCompleto?: string | undefined | null
  username?: string | undefined | null
  id?: string | undefined | null
}

const RowOptions = ({ onClick, refetch, id }: { id: string; onClick: () => void; refetch: () => void }) => {
  // ** Llamada a graphql
  const { DeleteUsuario } = useUsuariosServices()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = async () => {
    const res = await DeleteUsuario({ deleteUsersPermissionsUserId: id! })
    if (res.res) {
      toast.success('Usuario elimiando eliminada', {
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
        <MenuItem onClick={onClick} sx={{ '& svg': { mr: 2 } }}>
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

const UsuariosPage = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 1, pageSize: 10 })

  const { push } = useRouter()

  // ** Llama de graphql
  const { Usuarios } = useUsuariosServices()
  const { dataUsuarios, refetch, loadingUsuarios } = Usuarios({
    pagination: { pageSize: paginationModel.pageSize, page: paginationModel.page }
  })

  // ** Columns
  const columns: GridColDef[] = [
    {
      flex: 0.25,
      minWidth: 280,
      field: 'nombreCompleto',
      headerName: 'Nombre',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                {row.attributes.nombreCompleto || ''}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'cargo',
      minWidth: 170,
      headerName: 'Cargo',
      renderCell: ({ row }: CellType) => {
        const cargo = row.attributes.cargo.data ? row.attributes.cargo.data.attributes.nombre : 'Sin cargo'

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {cargo}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'email',
      minWidth: 170,
      headerName: 'Correo',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.attributes.email}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'username',
      minWidth: 170,
      headerName: 'Username',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.attributes.username}
            </Typography>
          </Box>
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
        <RowOptions id={row.id} onClick={() => push(`usuarios/editar-usuario/${row.id}`)} refetch={refetch} />
      )
    }
  ]

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <Divider sx={{ m: '0 !important' }} />
          <TableHeader
            value={value}
            handleFilter={handleFilter}
            toggle={() => push('usuarios/crear-usuario')}
            name='Agregar Usuario'
            nameSearch='Buscar usuarios'
          />
          <DataGrid
            componentsProps={{
              pagination: {
                labelRowsPerPage: 'Filas por página'
              }
            }}
            // pagination={{ labelRowsPerPage: 'Filas por página' }}
            autoHeight
            rowHeight={62}
            rows={dataUsuarios}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            // localeText={{ noRowsLabel: 'No hay información' }}
            localeText={{ noRowsLabel: 'No hay información', footerTotalRows: 'Total Rows:' }}
            loading={loadingUsuarios}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default UsuariosPage
