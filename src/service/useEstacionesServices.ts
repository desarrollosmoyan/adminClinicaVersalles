import {
  EstacioneInput,
  useCreateEstacioneMutation,
  useDeleteEstacioneMutation,
  useEstacionesQuery,
  useUpdateEstacioneMutation
} from 'src/generated/graphql'

export const useEstacionesServices = () => {
  // ESTACIONES
  const Estaciones = () => {
    const {
      data,
      loading: loadingEstaciones,
      error: errorEstaciones,
      refetch
    } = useEstacionesQuery({
      fetchPolicy: 'network-only'
    })
    const dataEstaciones = data?.estaciones?.data ?? []

    return {
      dataEstaciones,
      loadingEstaciones,
      errorEstaciones,
      refetch
    }
  }

  // CREATE ESTACION
  const [createEstacioneMutation, { loading: loadingCreate }] = useCreateEstacioneMutation()

  // UPDATE ESTACION
  const [updateEstacioneMutation, { loading: loadingUpdate }] = useUpdateEstacioneMutation()

  // DELETE ESTACION
  const [deleteEstacioneMutation, { loading: loadingDelete }] = useDeleteEstacioneMutation()

  return {
    Estaciones,
    loadingCreate,
    loadingUpdate,
    loadingDelete,

    CreateEstacion: async (data: EstacioneInput) => {
      try {
        const res = await createEstacioneMutation({
          variables: { data }
        })

        return { res: true, response: !!res.data?.createEstacione }
      } catch (error) {
        return { res: true, response: 'Hubo un error' }
      }
    },
    UpdateEstacion: async ({ updateEstacioneId, data }: { updateEstacioneId: string; data: EstacioneInput }) => {
      try {
        const res = await updateEstacioneMutation({
          variables: { updateEstacioneId, data }
        })

        return { res: true, response: !!res.data?.updateEstacione }
      } catch (error) {
        return { res: true, response: 'Hubo un error' }
      }
    },
    DeleteEstacion: async ({ deleteEstacioneId }: { deleteEstacioneId: string }) => {
      try {
        const res = await deleteEstacioneMutation({
          variables: { deleteEstacioneId }
        })

        return { res: true, response: !!res.data?.deleteEstacione }
      } catch (error) {
        return { res: true, response: 'Hubo un error' }
      }
    }
  }
}
