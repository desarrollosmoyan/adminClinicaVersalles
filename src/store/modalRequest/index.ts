import { create } from 'zustand'

interface ModalRequest {
  modalEstacion: string
  modalEstacionUpdate: (value: string) => void
}
export const useModalRequest = create<ModalRequest>()(set => ({
  modalEstacion: 'crear',
  modalEstacionUpdate: value => set(() => ({ modalEstacion: value }))
}))
