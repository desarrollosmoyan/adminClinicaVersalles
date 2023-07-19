import {
  PaginationArg,
  UsersPermissionsUserInput,
  useCreateUsersPermissionsUserMutation,
  useDeleteUsersPermissionsUserMutation,
  useUpdateUsersPermissionsUserMutation,
  useUsersPermissionsUserQuery,
  useUsersPermissionsUsersQuery
} from 'src/generated/graphql'

export const useUsuariosServices = () => {
  // USUARIOS
  const Usuarios = ({ pagination }: { pagination: PaginationArg }) => {
    const {
      data,
      loading: loadingUsuarios,
      error: errorUsuarios,
      refetch
    } = useUsersPermissionsUsersQuery({
      fetchPolicy: 'network-only',
      variables: { pagination }
    })
    const dataUsuarios = data?.usersPermissionsUsers?.data ?? []

    return {
      dataUsuarios,
      loadingUsuarios,
      errorUsuarios,
      refetch
    }
  }

  // USUARIO
  const Usuario = ({ usersPermissionsUserId }: { usersPermissionsUserId: string }) => {
    const {
      data,
      loading: loadingUsuario,
      error: errorUsuario,
      refetch
    } = useUsersPermissionsUserQuery({
      fetchPolicy: 'network-only',
      variables: { usersPermissionsUserId }
    })
    const dataUsuario = data?.usersPermissionsUser?.data ?? {}

    return {
      dataUsuario,
      loadingUsuario,
      errorUsuario,
      refetch
    }
  }

  // CREATE USUARIOS
  const [createUsersPermissionsUserMutation, { loading: loadingCreate }] = useCreateUsersPermissionsUserMutation()

  // UPDATE USUARIOS
  const [updateUsersPermissionsUserMutation, { loading: loadingUpdate }] = useUpdateUsersPermissionsUserMutation()

  // DELETE USUARIOS
  const [deleteUsersPermissionsUserMutation, { loading: loadingDelete }] = useDeleteUsersPermissionsUserMutation()

  return {
    Usuarios,
    loadingCreate,
    loadingUpdate,
    loadingDelete,
    Usuario,
    CreateUsuario: async (data: UsersPermissionsUserInput) => {
      try {
        const res = await createUsersPermissionsUserMutation({
          variables: { data }
        })

        return { res: true, response: !!res.data?.createUsersPermissionsUser }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    },
    UpdateUsuario: async ({
      updateUsersPermissionsUserId,
      data
    }: {
      updateUsersPermissionsUserId: string
      data: UsersPermissionsUserInput
    }) => {
      try {
        const res = await updateUsersPermissionsUserMutation({
          variables: { updateUsersPermissionsUserId: updateUsersPermissionsUserId, data }
        })

        return { res: true, response: !!res.data?.updateUsersPermissionsUser }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    },
    DeleteUsuario: async ({ deleteUsersPermissionsUserId }: { deleteUsersPermissionsUserId: string }) => {
      try {
        const res = await deleteUsersPermissionsUserMutation({
          variables: { deleteUsersPermissionsUserId }
        })

        return { res: true, response: !!res.data?.deleteUsersPermissionsUser }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    }
  }
}
