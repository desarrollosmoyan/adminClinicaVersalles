// ** React Imports
import { useState, useEffect, SyntheticEvent } from 'react'

import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { useUsuariosServices } from 'src/service/useUsuariosServices'
import UserProfileHeader from 'src/views/pages/perfil/UserProfileHeader'
import UserTask from 'src/views/pages/perfil/UserTask'

//* Graphql
import { PedidoEntity, TurnoEntity } from 'src/generated/graphql'
import UserTurs from 'src/views/pages/perfil/UserTurs'

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 38,
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 130
    }
  }
}))

const PerfilPage = () => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>('Tareas')

  // ** Local Storage
  const userToken = JSON.parse(window.localStorage.getItem('userData')!)

  const hideText = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  // ** Graphql
  const { Usuario } = useUsuariosServices()
  const { dataUsuario } = Usuario({ usersPermissionsUserId: userToken ? userToken.id : null })

  const handleChange = (event: SyntheticEvent, value: string) => {
    setActiveTab(value)
  }

  useEffect(() => {
    setActiveTab('tareas')
  }, [])

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <UserProfileHeader user={dataUsuario?.attributes!} />
        </Grid>
        {activeTab === undefined ? null : (
          <Grid item xs={12}>
            <TabContext value={activeTab}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <TabList
                    variant='scrollable'
                    scrollButtons='auto'
                    onChange={handleChange}
                    aria-label='customized tabs example'
                  >
                    <Tab
                      value='tareas'
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                          <Icon fontSize='1.125rem' icon='tabler:user-check' />
                          {!hideText && 'Tareas'}
                        </Box>
                      }
                    />
                    <Tab
                      value='turnos'
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                          <Icon fontSize='1.125rem' icon='tabler:users' />
                          {!hideText && 'Turnos'}
                        </Box>
                      }
                    />
                  </TabList>
                </Grid>
                <Grid item xs={12}>
                  <TabPanel sx={{ p: 0 }} value={activeTab}>
                    <Grid>
                      {activeTab === 'tareas' ? (
                        <UserTask task={dataUsuario.attributes?.pedidos?.data as PedidoEntity[]} />
                      ) : (
                        <UserTurs turns={dataUsuario.attributes?.turnos?.data as TurnoEntity[]} />
                      )}
                    </Grid>
                  </TabPanel>
                </Grid>
              </Grid>
            </TabContext>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default PerfilPage
