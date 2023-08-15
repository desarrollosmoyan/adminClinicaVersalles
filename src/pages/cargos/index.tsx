// ** React Imports
import { useState, MouseEvent, useCallback, Dispatch, SetStateAction } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Alert } from '@mui/material'

import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** MUI Graphql
import { CargoEntity } from 'src/generated/graphql'
import { useCargosServices } from 'src/service/useCargosServices'

import TableHeader from 'src/components/shared/TableHeader'

import { toast } from 'react-hot-toast'
import AddCargosDrawer from 'src/views/apps/cargos/AddCargosDrawer'

interface CellType {
  row: any
}

export interface UpdateCargos {
  id?: string | undefined | null
  nombre?: string | undefined | null
  estado?: boolean | undefined | null
}

const RowOptions = ({
  data,
  setIsModal,
  setDataCargo,
  refetch,
  setNameModal
}: {
  data: CargoEntity
  setIsModal: Dispatch<SetStateAction<boolean>>
  setNameModal: Dispatch<SetStateAction<string>>
  setDataCargo: Dispatch<SetStateAction<UpdateCargos | undefined>>
  refetch: () => void
}) => {
  // ** Llamada a graphql
  const { DeleteCargo } = useCargosServices()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setNameModal('editar')
    setIsModal(true)
    setDataCargo({ ...data.attributes!, id: data.id! })
    setAnchorEl(null)
  }

  const handleDelete = async () => {
    const res = await DeleteCargo({ deleteCargoId: data.id! })
    if (res.res) {
      toast.success('Cargo eliminada', {
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

const CargosPage = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [isModal, setIsModal] = useState(false)
  const [dataCargo, setDataCargo] = useState<UpdateCargos | undefined>()
  const [paginationModel, setPaginationModel] = useState({ page: 1, pageSize: 10 })
  const [nameModal, setNameModal] = useState('crear')

  // ** Llama de graphql
  const { Cargos } = useCargosServices()
  const { dataCargos, refetch, loadingCargos } = Cargos({
    pagination: { pageSize: paginationModel.pageSize, page: paginationModel.page }
  })

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

    // EDITAR
    {
      flex: 0.25,
      minWidth: 280,
      field: 'estado',
      headerName: 'Estado',
      renderCell: ({ row }: CellType) => {
        const { estado } = row.attributes

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Alert icon={false} variant='outlined' severity={estado ? 'success' : 'error'}>
                {estado ? 'Activo' : 'Inactivo'}
              </Alert>
            </Box>
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
        <RowOptions
          data={row}
          setIsModal={setIsModal}
          setDataCargo={setDataCargo}
          refetch={refetch}
          setNameModal={setNameModal}
        />
      )
    }
  ]

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddCargosDrawer = () => {
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
            toggle={toggleAddCargosDrawer}
            name='Agregar Cargo'
            nameSearch='Buscar estaciones'
          />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={dataCargos}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            localeText={{
              noRowsLabel: 'No hay información'
            }}
            loading={loadingCargos}
            componentsProps={{
              pagination: {
                labelRowsPerPage: 'Filas por página'
              }
            }}
          />
        </Card>
      </Grid>

      <AddCargosDrawer
        open={isModal}
        toggle={toggleAddCargosDrawer}
        data={dataCargo}
        refetch={refetch}
        nameModal={nameModal}
      />
    </Grid>
  )
}

export default CargosPage
