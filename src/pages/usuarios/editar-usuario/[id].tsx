// ** React Imports
import React, { useState, useEffect } from 'react'

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
  email: yup.string().required(),
  nombreCompleto: yup.string().required(),
  username: yup.string().required()
})

const defaultValues = {
  email: '',
  nombreCompleto: '',
  username: ''
}

const EditarUsuarioPage = () => {
  const [estaciones, setEstaciones] = useState('')
  const [valueCargo, setValueCargo] = useState('')

  // * Router
  const {
    push,
    query: { id }
  } = useRouter()

  //** Llamada a graphql
  const { Estaciones } = useEstacionesServices()
  const { dataEstaciones } = Estaciones()
  const { UpdateUsuario, Usuario } = useUsuariosServices()
  const { dataUsuario, loadingUsuario } = Usuario({ usersPermissionsUserId: id as string })
  const { Cargos } = useCargosServices()
  const { dataCargos } = Cargos({
    pagination: { pageSize: 10, page: 1 }
  })
  console.log(dataUsuario)

  //** Useeffect for default values
  useEffect(() => {
    if (!loadingUsuario) {
      setEstaciones(dataUsuario?.attributes?.Area! || '')
      setValueCargo(dataUsuario?.attributes?.cargo?.data?.id! || '')
      setValue('email', dataUsuario?.attributes?.email!)
      setValue('nombreCompleto', dataUsuario?.attributes?.nombreCompleto!)
      setValue('username', dataUsuario?.attributes?.username!)
    }
  }, [loadingUsuario])

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const onSubmit = async (dataUsuario: typeof defaultValues) => {
    const res = await UpdateUsuario({
      data: { ...dataUsuario, role: '1', Area: estaciones, cargo: valueCargo },
      updateUsersPermissionsUserId: id as string
    })
    if (res.res) {
      reset()
      toast.success('Usuario editado', {
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
        <Typography variant='h5'>Editar usuario</Typography>
      </Header>

      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              label='Araes'
            >
              <MenuItem value=''>Areas</MenuItem>

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
          {/* <Controller
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
          /> */}
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
              Editar
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

export default EditarUsuarioPage
