import {
  CargoInput,
  PaginationArg,
  useCargoQuery,
  useCargosQuery,
  useCreateCargoMutation,
  useDeleteCargoMutation,
  useUpdateCargoMutation
} from 'src/generated/graphql'

export const useCargosServices = () => {
  // CARGOS
  const Cargos = ({ pagination }: { pagination: PaginationArg }) => {
    const {
      data,
      loading: loadingCargos,
      error: errorCargos,
      refetch
    } = useCargosQuery({
      fetchPolicy: 'network-only',
      variables: { pagination }
    })
    const dataCargos = data?.cargos?.data ?? []

    return {
      dataCargos,
      loadingCargos,
      errorCargos,
      refetch
    }
  }

  // CARGO
  const Cargo = ({ cargoId }: { cargoId: string }) => {
    const {
      data,
      loading: loadingCargo,
      error: errorCargo,
      refetch
    } = useCargoQuery({
      fetchPolicy: 'network-only',
      variables: { cargoId }
    })
    const dataCargo = data?.cargo?.data ?? {}

    return {
      dataCargo,
      loadingCargo,
      errorCargo,
      refetch
    }
  }

  // CREATE CARGOS
  const [createCargoMutation, { loading: loadingCreate }] = useCreateCargoMutation()

  // UPDATE CARGOS
  const [updateCargoMutation, { loading: loadingUpdate }] = useUpdateCargoMutation()

  // DELETE CARGOS
  const [deleteCargoMutation, { loading: loadingDelete }] = useDeleteCargoMutation()

  return {
    Cargos,
    Cargo,
    loadingCreate,
    loadingUpdate,
    loadingDelete,
    CreateCargo: async (data: CargoInput) => {
      try {
        const res = await createCargoMutation({
          variables: { data }
        })

        return { res: true, response: !!res.data?.createCargo }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    },
    UpdateCargo: async ({ updateCargoId, data }: { updateCargoId: string; data: CargoInput }) => {
      try {
        const res = await updateCargoMutation({
          variables: { updateCargoId, data }
        })

        return { res: true, response: !!res.data?.updateCargo }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    },
    DeleteCargo: async ({ deleteCargoId }: { deleteCargoId: string }) => {
      try {
        const res = await deleteCargoMutation({
          variables: { deleteCargoId }
        })

        return { res: true, response: !!res.data?.deleteCargo }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    }
  }
}
