import React from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Graphql
import { PedidoEntity } from 'src/generated/graphql'

// ** Moment Imports
import moment from 'moment'

interface Props {
  task: PedidoEntity[]
}

const UserTask = ({ task }: Props) => {
  console.log(task)

  return (
    <>
      <Grid container spacing={12}>
        {task && task.length !== 0 ? (
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
        )}
      </Grid>
    </>
  )
}

export default UserTask
