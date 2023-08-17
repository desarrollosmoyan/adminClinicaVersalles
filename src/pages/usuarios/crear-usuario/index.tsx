// ** React Imports
import React, { useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import { Button, Grid, MenuItem } from '@mui/material'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Services
import { useEstacionesServices } from 'src/service/useEstacionesServices'
import { useUsuariosServices } from 'src/service/useUsuariosServices'
import { toast } from 'react-hot-toast'
import { useCargosServices } from 'src/service/useCargosServices'

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const schema = yup.object().shape({
  // cargo: yup.string().required(),
  email: yup.string().required(),
  nombreCompleto: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required()
})

const defaultValues = {
  // cargo: '',
  email: '',
  nombreCompleto: '',
  username: '',
  password: ''
}

const CreateUsuarioPage = () => {
  const [estaciones, setEstaciones] = useState('')
  const [valueCargo, setValueCargo] = useState('')

  // * Router
  const { push } = useRouter()

  //** Llamada a graphql
  const { Estaciones } = useEstacionesServices()
  const { dataEstaciones } = Estaciones()
  const { CreateUsuario } = useUsuariosServices()
  const { Cargos } = useCargosServices()
  const { dataCargos } = Cargos({
    pagination: { pageSize: 10, page: 1 }
  })

  // ** Hooks
  const {
    reset,
    control,

    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const onSubmit = async (dataUsuario: typeof defaultValues) => {
    const res = await CreateUsuario({ ...dataUsuario, role: '1', Area: estaciones, cargo: valueCargo })
    if (res.res) {
      reset()
      toast.success('Usuario creado', {
        duration: 2000
      })
      push('/usuarios')
    } else {
      toast.error(res.response as string, {
        duration: 2000
      })
    }
  }

  return (
    <>
      <Header>
        <Typography variant='h5'>Crear usuario</Typography>
      </Header>

      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Area */}
          <Grid>
            <CustomTextField
              select
              fullWidth
              sx={{ mb: 4 }}
              defaultValue={estaciones}
              SelectProps={{
                value: estaciones,
                displayEmpty: true,
                onChange: e => setEstaciones(e.target.value as string)
              }}
              label='Area'
            >
              <MenuItem value=''>Area</MenuItem>

              {dataEstaciones.map(item => (
                <MenuItem key={item?.id!} value={item?.attributes?.nombre!}>
                  {item.attributes?.nombre}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          {/* Cargos */}
          <Grid>
            <CustomTextField
              select
              fullWidth
              sx={{ mb: 4 }}
              defaultValue={valueCargo}
              SelectProps={{
                value: valueCargo,
                displayEmpty: true,
                onChange: e => setValueCargo(e.target.value as string)
              }}
              label='Cargo'
            >
              <MenuItem value=''>Cargo</MenuItem>

              {dataCargos.map(item => (
                <MenuItem key={item?.id!} value={item?.id!}>
                  {item.attributes?.nombre}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>

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
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Contraseña'
                onChange={onChange}
                placeholder='Ingrese una contraseña'
                error={Boolean(errors.password)}
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
              Crear
            </Button>
            <Button variant='tonal' color='secondary'>
              Cancelar
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default CreateUsuarioPage

// CreateUsuarioPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

// CreateUsuarioPage.authGuard = false
