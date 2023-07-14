// ** React Imports
import { useEffect } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { UpdateEstacion } from 'src/pages/estaciones'
import { useEstacionesServices } from 'src/service/useEstacionesServices'
import { toast } from 'react-hot-toast'

interface SidebarAddUserType {
  open: boolean
  toggle: () => void
  dataEstacion: UpdateEstacion | undefined
  refetch: () => void
  nameModal: string
}

interface UserData {
  nombre: string
  codigoNFC: string
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const schema = yup.object().shape({
  nombre: yup.string().required(),
  codigoNFC: yup.string().required()
})

const defaultValues = {
  nombre: '',
  codigoNFC: ''
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  // ** Props
  const { open, toggle, dataEstacion, refetch, nameModal } = props

  // ** Llama a graphql
  const { CreateEstacion, UpdateEstacion } = useEstacionesServices()

  useEffect(() => {
    if (nameModal === 'editar') {
      setValue('nombre', dataEstacion?.nombre!)
      setValue('codigoNFC', dataEstacion?.codigoNFC!)
    } else {
      setValue('nombre', '')
      setValue('codigoNFC', '')
    }
  }, [nameModal])

  // ** Hooks
  const {
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const onSubmit = async (data: UserData) => {
    if (nameModal === 'crear') {
      const res = await CreateEstacion(data)
      if (res.res) {
        toggle()
        reset()
        toast.success('Estación creada', {
          duration: 2000
        })
        refetch()
      } else {
        toast.error(res.response as string, {
          duration: 2000
        })
      }
    }
    if (nameModal === 'editar') {
      const res = await UpdateEstacion({
        updateEstacioneId: dataEstacion?.id!,
        data
      })
      if (res.res) {
        toggle()
        reset()
        toast.success('Estación actualizada', {
          duration: 2000
        })
        refetch()
      } else {
        toast.error(res.response as string, {
          duration: 2000
        })
      }
    }
  }

  const handleClose = () => {
    toggle()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h5'>Agregar Estación</Typography>
        <IconButton
          size='small'
          onClick={handleClose}
          sx={{
            p: '0.438rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </Header>
      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='codigoNFC'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Codigo NFC'
                onChange={onChange}
                placeholder='Codigo NFC'
                error={Boolean(errors.codigoNFC)}
                {...(errors.codigoNFC && { helperText: errors.codigoNFC.message })}
              />
            )}
          />
          <Controller
            name='nombre'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Nombre'
                onChange={onChange}
                placeholder='Escriba el nombre de la estación'
                error={Boolean(errors.nombre)}
                {...(errors.nombre && { helperText: errors.nombre.message })}
              />
            )}
          />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              {nameModal === 'crear' ? 'Crear estación' : 'Editar estación'}
            </Button>
            <Button variant='tonal' color='secondary' onClick={handleClose}>
              Cancelar
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser
