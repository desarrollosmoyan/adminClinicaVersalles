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

import { toast } from 'react-hot-toast'

import { usePedidosServices } from 'src/service/usePedidosServices'
import { UpdateUsuario } from 'src/pages/usuarios'

interface SidebarAddUserType {
  open: boolean
  toggle: () => void
  data: UpdateUsuario | undefined
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
  cuantoTardoInicioFin: yup.string().required(),
  descripcion: yup.string().required(),
  estacionFin: yup.string().required(),
  estacionInicio: yup.string().required(),

  nombrePedido: yup.string().required()
})

const defaultValues = {
  area: '',
  cargo: '',
  email: '',
  nombreCompleto: '',
  username: ''
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  // ** Props
  const { open, toggle, data: dataSend, refetch, nameModal } = props
  console.log(dataSend, refetch)

  // ** Info del usuario
  const user = JSON.parse(localStorage.getItem('userData')!)

  console.log(user)

  // ** Llama a graphql
  const { CreatePedido, UpdatePedido } = usePedidosServices()
  console.log(CreatePedido, UpdatePedido)

  // useEffect(() => {
  //   if (nameModal === 'editar') {
  //     setValue('cliente', dataSend?.cliente!)
  //     setValue('cuantoTardoInicioFin', dataSend?.cuantoTardoInicioFin!)
  //     setValue('descripcion', dataSend?.descripcion!)
  //     setValue('estacionInicio', dataSend?.estacionInicio!)
  //     setValue('estacionFin', dataSend?.estacionFin!)
  //     setValue('nombrePedido', dataSend?.nombrePedido!)
  //   } else {
  //     setValue('cliente', '')
  //     setValue('cuantoTardoInicioFin', '')
  //     setValue('descripcion', '')
  //     setValue('estacionInicio', '')
  //     setValue('estacionFin', '')
  //     setValue('nombrePedido', '')
  //   }
  // }, [nameModal])

  // ** Hooks
  const {
    // reset,
    control,

    // setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const onSubmit = async (data: UpdateUsuario) => {
    console.log(data)

    // if (nameModal === 'crear') {
    //   const res = await CreatePedido({ ...data, user: user.id })
    //   console.log(res)
    //   if (res.res) {
    //     toggle()
    //     reset()
    //     toast.success('Pedido creado', {
    //       duration: 2000
    //     })
    //     refetch()
    //   } else {
    //     toast.error(res.response as string, {
    //       duration: 2000
    //     })
    //   }
    // }
    // if (nameModal === 'editar') {
    //   const res = await UpdatePedido({
    //     updatePedidoId: dataSend?.id!,
    //     data: { ...data, user: user.id }
    //   })
    //   if (res.res) {
    //     refetch()
    //     toggle()
    //     reset()
    //     toast.success('Pedido actualizado', {
    //       duration: 2000
    //     })
    //   } else {
    //     toast.error(res.response as string, {
    //       duration: 2000
    //     })
    //   }
    // }
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
        <Typography variant='h5'>{nameModal === 'crear' ? 'Agregar usuario' : 'Editar usuario'}</Typography>
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
            name='area'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Area'
                onChange={onChange}
                placeholder='Ingrese un area '
                error={Boolean(errors.area)}
                {...(errors.area && { helperText: errors.area.message })}
              />
            )}
          />
          <Controller
            name='cargo'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Cargo'
                onChange={onChange}
                placeholder='Ingrese un cargo'
                error={Boolean(errors.cargo)}
                {...(errors.cargo && { helperText: errors.cargo.message })}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Correo'
                onChange={onChange}
                placeholder='Ingrese un correo'
                error={Boolean(errors.email)}
                {...(errors.email && { helperText: errors.email.message })}
              />
            )}
          />
          <Controller
            name='nombreCompleto'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Nombre completo'
                onChange={onChange}
                placeholder='Ingrese un nombre completo'
                error={Boolean(errors.nombreCompleto)}
                {...(errors.nombreCompleto && { helperText: errors.nombreCompleto.message })}
              />
            )}
          />
          <Controller
            name='username'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Username'
                onChange={onChange}
                placeholder='Ingrese un username'
                error={Boolean(errors.username)}
                {...(errors.username && { helperText: errors.username.message })}
              />
            )}
          />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              {nameModal === 'crear' ? 'Agregar usuario' : 'Editar usuario'}
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
