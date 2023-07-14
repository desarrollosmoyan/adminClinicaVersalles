import {
  PaginationArg,
  PedidoEntity,
  PedidoInput,
  useCreatePedidoMutation,
  useDeletePedidoMutation,
  usePedidoQuery,
  usePedidosQuery,
  useUpdatePedidoMutation
} from 'src/generated/graphql'

export const usePedidosServices = () => {
  // PEDIDOS
  const Pedidos = ({ pagination }: { pagination: PaginationArg }) => {
    const {
      data,
      loading: loadingPedidos,
      error: errorPedidos,
      refetch
    } = usePedidosQuery({
      fetchPolicy: 'network-only',
      variables: { pagination }
    })
    const dataPedidos = data?.pedidos?.data ?? []

    return {
      dataPedidos,
      loadingPedidos,
      errorPedidos,
      refetch
    }
  }

  // PEDIDO
  const Pedido = ({ pedidoId }: { pedidoId: string }) => {
    const {
      data,
      loading: loadingPedido,
      error: errorPedido,
      refetch
    } = usePedidoQuery({
      fetchPolicy: 'network-only',
      variables: { pedidoId }
    })
    const dataPedido: PedidoEntity = data?.pedido?.data ?? {}

    return {
      dataPedido,
      loadingPedido,
      errorPedido,
      refetch
    }
  }

  // CREATE PEDIDOS
  const [createPedidoMutation, { loading: loadingCreate }] = useCreatePedidoMutation()

  // UPDATE PEDIDOS
  const [updatePedidoMutation, { loading: loadingUpdate }] = useUpdatePedidoMutation()

  // DELETE PEDIDOS
  const [deletePedidoMutation, { loading: loadingDelete }] = useDeletePedidoMutation()

  return {
    Pedidos,
    loadingCreate,
    loadingUpdate,
    loadingDelete,
    Pedido,
    CreatePedido: async (data: PedidoInput) => {
      try {
        const res = await createPedidoMutation({
          variables: { data }
        })

        return { res: true, response: !!res.data?.createPedido }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    },
    UpdatePedido: async ({ updatePedidoId, data }: { updatePedidoId: string; data: PedidoInput }) => {
      try {
        const res = await updatePedidoMutation({
          variables: { updatePedidoId: updatePedidoId, data }
        })

        return { res: true, response: !!res.data?.updatePedido }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    },
    DeletePedido: async ({ deletePedidoId }: { deletePedidoId: string }) => {
      try {
        const res = await deletePedidoMutation({
          variables: { deletePedidoId }
        })

        return { res: true, response: !!res.data?.deletePedido }
      } catch (error) {
        return { res: false, response: 'Hubo un error' }
      }
    }
  }
}
