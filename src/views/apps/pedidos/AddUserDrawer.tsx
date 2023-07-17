// ** React Imports
import { useCallback, useEffect, useState } from 'react'

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

import { toast } from 'react-hot-toast'

import { UpdatePedido } from 'src/pages/pedidos'

import { usePedidosServices } from 'src/service/usePedidosServices'
import { useUsuariosServices } from 'src/service/useUsuariosServices'
import { Grid, MenuItem, SelectChangeEvent } from '@mui/material'

interface SidebarAddUserType {
  open: boolean
  toggle: () => void
  data: UpdatePedido | undefined
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
  cliente: yup.string().required(),
  descripcion: yup.string().required(),
  estacionFin: yup.string().required(),
  estacionInicio: yup.string().required(),
  nombrePedido: yup.string().required()
})

const defaultValues = {
  cliente: '',
  descripcion: '',
  estacionFin: '',
  estacionInicio: '',
  nombrePedido: ''
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  const [status, setStatus] = useState<string>('')
  const handleStatusChange = useCallback((e: SelectChangeEvent<unknown>) => {
    setStatus(e.target.value as string)
  }, [])

  // ** Props
  const { open, toggle, data: dataSend, refetch, nameModal } = props

  // ** Llama a graphql
  const { CreatePedido, UpdatePedido } = usePedidosServices()

  // ** Llama de graphql
  const { Usuarios } = useUsuariosServices()
  const { dataUsuarios } = Usuarios({
    pagination: { pageSize: 10, page: 1 }
  })

  useEffect(() => {
    if (nameModal === 'editar') {
      setValue('cliente', dataSend?.cliente!)
      setValue('descripcion', dataSend?.descripcion!)
      setValue('estacionInicio', dataSend?.estacionInicio!)
      setValue('estacionFin', dataSend?.estacionFin!)
      setValue('nombrePedido', dataSend?.nombrePedido!)
      setStatus(dataSend?.user?.data?.id as string)
    } else {
      setValue('cliente', '')
      setValue('descripcion', '')
      setValue('estacionInicio', '')
      setValue('estacionFin', '')
      setValue('nombrePedido', '')
      setStatus('')
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
  const onSubmit = async (data: UpdatePedido) => {
    console.log(data)
    if (nameModal === 'crear') {
      const res = await CreatePedido({ ...data, user: status })
      console.log(res)
      if (res.res) {
        toggle()
        reset()
        toast.success('Pedido creado', {
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
      const res = await UpdatePedido({
        updatePedidoId: dataSend?.id!,
        data: { ...data, user: status }
      })
      if (res.res) {
        refetch()
        toggle()
        reset()
        toast.success('Pedido actualizado', {
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
        <Typography variant='h5'>{nameModal === 'crear' ? 'Agregar pedido' : 'Editar pedido'}</Typography>
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
            name='nombrePedido'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Nombre Pedido'
                onChange={onChange}
                placeholder='Ingrese un nombre pedido'
                error={Boolean(errors.nombrePedido)}
                {...(errors.nombrePedido && { helperText: errors.nombrePedido.message })}
              />
            )}
          />
          <Controller
            name='descripcion'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Descripción'
                onChange={onChange}
                placeholder='Ingrese una descripción'
                error={Boolean(errors.descripcion)}
                {...(errors.descripcion && { helperText: errors.descripcion.message })}
              />
            )}
          />
          <Controller
            name='cliente'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Cliente'
                onChange={onChange}
                placeholder='Ingrese el nombre del cliente'
                error={Boolean(errors.cliente)}
                {...(errors.cliente && { helperText: errors.cliente.message })}
              />
            )}
          />

          <Controller
            name='estacionInicio'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Estacion Inicio'
                onChange={onChange}
                placeholder='Ingrese una estacion Inicio'
                error={Boolean(errors.estacionInicio)}
                {...(errors.estacionInicio && { helperText: errors.estacionInicio.message })}
              />
            )}
          />
          <Controller
            name='estacionFin'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Estacion Fin'
                onChange={onChange}
                placeholder='Ingrese una estacion fin'
                error={Boolean(errors.estacionFin)}
                {...(errors.estacionFin && { helperText: errors.estacionFin.message })}
              />
            )}
          />
          <Grid>
            <CustomTextField
              select
              fullWidth
              sx={{ mb: 4 }}
              defaultValue=''
              SelectProps={{
                value: status,
                displayEmpty: true,
                onChange: e => handleStatusChange(e)
              }}
            >
              <MenuItem value=''>Usuario</MenuItem>

              {dataUsuarios.map(item => (
                <MenuItem key={item.id} value={item.id!}>
                  {item.attributes?.username}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              {nameModal === 'crear' ? 'Agregar pedido' : 'Editar pedido'}
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
