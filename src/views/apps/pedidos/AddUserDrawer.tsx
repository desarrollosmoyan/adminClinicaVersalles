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

// ** Graphql Imports
import { usePedidosServices } from 'src/service/usePedidosServices'
import { Grid, MenuItem, SelectChangeEvent } from '@mui/material'
import { useEstacionesServices } from 'src/service/useEstacionesServices'
import { useCargosServices } from 'src/service/useCargosServices'
import { useSocket } from 'src/hooks/use-socket'
import { Enum_Pedido_Stage, useCreatePedidoMutation } from 'src/generated/graphql'

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

  // nombrePedido: yup.string().required(),
  identificacion: yup.number().required()
})

const defaultValues = {
  cliente: '',
  descripcion: '',
  estacionFin: '',
  estacionInicio: '',
  nombrePedido: '',
  identificacion: ''
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  const socket = useSocket(state => state.socket)
  const [status, setStatus] = useState<string>('')
  const [estacionesInicio, setEstacionesInicio] = useState('')
  const [estacionesFinal, setEstacionesFinal] = useState('')
  const [tipoIdentificacion, setTipoIdentificacion] = useState('')

  const handleStatusChange = useCallback((e: SelectChangeEvent<unknown>) => {
    setStatus(e.target.value as string)
  }, [])

  // ** Props
  const { open, toggle, data: dataSend, refetch, nameModal } = props

  // ** Llama a graphql
  const { UpdatePedido } = usePedidosServices()
  const [createPedidoMutation] = useCreatePedidoMutation()

  const { Estaciones } = useEstacionesServices()
  const { dataEstaciones } = Estaciones()

  const { Cargos } = useCargosServices()
  const { dataCargos } = Cargos({
    pagination: { pageSize: 10, page: 1 }
  })
  useEffect(() => {
    console.log()
    if (nameModal === 'editar') {
      setValue('cliente', dataSend?.cliente!)
      setValue('identificacion', dataSend?.identificacion!)
      setValue('descripcion', dataSend?.descripcion!)
      setEstacionesInicio(dataSend?.estacionInicio!)
      setEstacionesFinal(dataSend?.estacionFin!)
      setStatus(dataSend?.cargo?.data?.id as string)
      setTipoIdentificacion(dataSend?.tipoIdentificacion!)
    } else {
      setValue('cliente', ''), setValue('identificacion', '')
      setValue('descripcion', '')
      setEstacionesFinal('')
      setEstacionesInicio('')
      setValue('nombrePedido', '')
      setStatus('')
      setTipoIdentificacion('')
    }
  }, [nameModal, dataSend?.id])

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
    if (nameModal === 'crear') {
      const res = await createPedidoMutation({
        variables: {
          data: {
            descripcion: data.descripcion,
            cliente: data.cliente,
            estacionFin: estacionesFinal,
            estacionInicio: estacionesInicio,
            cargo: status!,
            tipoIdentificacion: tipoIdentificacion,
            identificacion: String(data.identificacion),
            stage: Enum_Pedido_Stage.StandBy
          }
        }
      })
      if (res.data?.createPedido?.data?.id) {
        toggle()
        reset()
        refetch()
        toast.success('Pedido creado', { duration: 2000 })
        socket?.emit('order:new-order', {
          cargoId: status,
          pedidoId: res.data?.createPedido?.data?.id
        })
      } else {
        toast.error('Error al crear pedido' as string, {
          duration: 2000
        })
      }
    }

    if (nameModal === 'editar') {
      const res = await UpdatePedido({
        updatePedidoId: dataSend?.id!,
        data: {
          descripcion: data.descripcion,
          cliente: data.cliente,
          estacionFin: estacionesFinal,
          estacionInicio: estacionesInicio,
          cargo: status!,
          tipoIdentificacion: tipoIdentificacion,
          identificacion: `${data.identificacion}`
        }
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

  // DATA PARA EL SELECT DE TIPO DE INDENTIFICACION
  const typeIndentification = [
    {
      value: 'cedula de ciudadania',
      label: 'Cedula de ciudadania'
    },
    {
      value: 'tarjeta de identidad',
      label: 'Tarjeta de identidad'
    },
    {
      value: 'pasaporte',
      label: 'Pasaporte'
    },
    {
      value: 'cedula de extranjeria',
      label: 'Cedula de extranjeria'
    }
  ]

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
          {/* SELECT CARGO */}
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
              label='Cargos'
            >
              <MenuItem value=''>Cargos</MenuItem>

              {dataCargos.map(item => (
                <MenuItem key={item.id} value={item.id!}>
                  {item.attributes?.nombre}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>

          {/* ==== */}

          {/* SELECT INICIO */}
          <Grid>
            <CustomTextField
              select
              fullWidth
              sx={{ mb: 4 }}
              defaultValue={estacionesInicio}
              SelectProps={{
                value: estacionesInicio,

                displayEmpty: true,
                onChange: e => setEstacionesInicio(e.target.value as string)
              }}
              label='Estacion Inicio'
            >
              <MenuItem value=''>Estacion Inicio</MenuItem>

              {dataEstaciones.map(item => (
                <MenuItem key={item?.id!} value={item?.attributes?.nombre!}>
                  {item.attributes?.nombre}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          {/* ====== */}

          {/* SELECT FINAL */}
          <Grid>
            <CustomTextField
              select
              fullWidth
              sx={{ mb: 4 }}
              defaultValue=''
              SelectProps={{
                value: estacionesFinal,
                displayEmpty: true,
                onChange: e => setEstacionesFinal(e.target.value as string)
              }}
              label='Estacion Final'
            >
              <MenuItem value=''>Estacion Final</MenuItem>

              {dataEstaciones.map(item => (
                <MenuItem key={item?.id!} value={item?.attributes?.nombre!}>
                  {item.attributes?.nombre}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          {/* ===== */}

          {/* NOMBRE DEL PACIENTE */}
          <Controller
            name='cliente'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Nombre del paciente'
                onChange={onChange}
                placeholder='Ingrese el nombre del paciente'
                error={Boolean(errors.cliente)}
                {...(errors.cliente && { helperText: errors.cliente.message })}
              />
            )}
          />
          {/* ==== */}

          {/*TIPO IDENTIFICACION*/}
          <Grid>
            <CustomTextField
              select
              fullWidth
              sx={{ mb: 4 }}
              defaultValue=''
              SelectProps={{
                value: tipoIdentificacion,
                displayEmpty: true,
                onChange: e => setTipoIdentificacion(e.target.value as string)
              }}
              label='Tipo de documento'
            >
              <MenuItem value=''>Seleccione tipo de documento</MenuItem>

              {typeIndentification.map(item => (
                <MenuItem key={item?.value} value={item?.value}>
                  {item.label}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          {/* ===== */}
          {/* DOCUMENTO */}
          <Controller
            name='identificacion'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Numero de documento'
                onChange={onChange}
                placeholder='Ingrese el numero de documento'
                error={Boolean(errors.identificacion)}
                {...(errors.identificacion && { helperText: errors.identificacion.message })}
              />
            )}
          />
          {/* ==== */}

          {/* OBSERVACIONES */}
          <Controller
            name='descripcion'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                multiline
                rows={4}
                value={value}
                sx={{ mb: 4 }}
                label='Observación'
                onChange={onChange}
                placeholder='Ingrese las observaciones'
                error={Boolean(errors.descripcion)}
                {...(errors.descripcion && { helperText: errors.descripcion.message })}
              />
            )}
          />

          {/* ===== */}

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
