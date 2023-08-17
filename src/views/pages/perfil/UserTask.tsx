import React from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Graphql
import { PedidoEntity } from 'src/generated/graphql'

// ** Moment Imports

import { Alert, Divider } from '@mui/material'

interface Props {
  task: PedidoEntity[]
}
interface CellType {
  row: any
}
const UserTask = ({ task }: Props) => {
  console.log(task)

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
      field: 'tipoIdentificacion',
      minWidth: 170,
      headerName: 'Tipo de Identificacion',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.attributes.tipoIdentificacion || ''}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'identidicacion',
      minWidth: 170,
      headerName: 'Identificacion',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.attributes.identificacion || ''}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.25,
      minWidth: 280,
      field: 'finalizado',
      headerName: 'Finalizado',
      renderCell: ({ row }: CellType) => {
        const { finalizado } = row.attributes

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {renderClient(row)} */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Alert icon={false} variant='outlined' severity={finalizado ? 'success' : 'error'}>
                {finalizado ? 'Finalizado' : 'No Finalizado'}
              </Alert>
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
    }
  ]

  return (
    <>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          {task !== undefined && task.length !== 0 && (
            <Card>
              <Divider sx={{ m: '0 !important' }} />
              {/* <TableHeader
              value={value}
              handleFilter={handleFilter}
              toggle={toggleAddUserDrawer}
              name='Agregar Pedido'
              nameSearch='Buscar pedidos'
              data={dataExport}
            /> */}
              <DataGrid
                autoHeight
                rowHeight={62}
                rows={task}
                columns={columns}
                disableRowSelectionOnClick
                pageSizeOptions={[10, 25, 50]}
                localeText={{ noRowsLabel: 'No hay información' }}
                componentsProps={{
                  pagination: {
                    labelRowsPerPage: 'Filas por página'
                  }
                }}
              />
            </Card>
          )}
        </Grid>
        {/* {task && task.length !== 0 ? (
          task.map(item => {
            return (
              <Grid key={item.id} item xs={12} md={6} lg={4}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='h5'>{item.attributes?.nombrePedido}</Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ my: 4, color: 'text.secondary' }}>{item.attributes?.descripcion}</Typography>
                    <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}></Box>
                    <Box
                      sx={{
                        mb: 5,
                        gap: 2,
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h5'>
                          {item.attributes?.fecha
                            ? moment(item.attributes?.fecha).format('YYYY-MM-DD')
                            : 'No hay fecha'}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Fecha</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h5'>
                          {' '}
                          {item.attributes?.fehcaInicio
                            ? moment(item.attributes?.fehcaInicio).format('YYYY-MM-DD')
                            : 'No hay fecha'}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Inicio</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h5'>
                          {' '}
                          {item.attributes?.fechaFin
                            ? moment(item.attributes?.fechaFin).format('YYYY-MM-DD')
                            : 'No hay fecha'}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Fin</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        ) : (
          <Grid item xs={12}>
            <Typography variant='h2'>No hay tareas</Typography>
          </Grid>
        )} */}
      </Grid>
    </>
  )
}

export default UserTask
