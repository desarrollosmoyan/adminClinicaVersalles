// ** React Imports
import { useEffect } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// import { Grid, MenuItem, SelectChangeEvent } from '@mui/material'
import Switch from '@mui/material/Switch'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { toast } from 'react-hot-toast'

import { UpdateCargos } from 'src/pages/cargos'
import { useCargosServices } from 'src/service/useCargosServices'

interface SidebarAddCamposType {
  open: boolean
  toggle: () => void
  data: UpdateCargos | undefined
  refetch: () => void
  nameModal: string
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const schema = yup.object().shape({
  nombre: yup.string().required()
})

const defaultValues = {
  nombre: '',
  estado: true
}

const SidebarAddCargos = (props: SidebarAddCamposType) => {
  // ** Props
  const { open, toggle, data: dataSend, refetch, nameModal } = props

  // ** Llama de graphql
  const { CreateCargo, UpdateCargo } = useCargosServices()

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
  useEffect(() => {
    if (nameModal === 'editar') {
      setValue('nombre', dataSend?.nombre!)
      setValue('estado', dataSend?.estado!)
    } else {
      setValue('nombre', '')
      setValue('estado', true)
    }
  }, [nameModal, dataSend?.nombre, dataSend?.estado, setValue])

  const onSubmit = async (data: UpdateCargos) => {
    if (nameModal === 'crear') {
      const res = await CreateCargo({
        nombre: data.nombre,
        estado: data.estado
      })
      console.log(res)
      if (res.res) {
        toggle()
        reset()
        toast.success('Cargo creado', {
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
      const res = await UpdateCargo({
        updateCargoId: dataSend?.id!,
        data: {
          nombre: data.nombre,
          estado: data.estado
        }
      })
      if (res.res) {
        refetch()
        toggle()
        reset()
        toast.success('Cargo actualizado', {
          duration: 2000
        })
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
        <Typography variant='h5'>{nameModal === 'crear' ? 'Agregar cargo' : 'Editar cargo'}</Typography>
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
            name='nombre'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Nombre del cargo'
                onChange={onChange}
                placeholder='Ingrese un nombre de cargo'
                error={Boolean(errors.nombre)}
                {...(errors.nombre && { helperText: errors.nombre.message })}
              />
            )}
          />
          <Controller
            name='estado'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>Estado</Typography>
                <Switch name='estado' checked={value} onChange={onChange} />
              </Box>
            )}
          />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              {nameModal === 'crear' ? 'Agregar cargo' : 'Editar cargo'}
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

export default SidebarAddCargos
