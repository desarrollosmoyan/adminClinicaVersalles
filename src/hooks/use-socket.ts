import { create } from 'zustand'
import { Socket, io } from 'socket.io-client'
import enviroment from 'src/enviroment'

const URL = enviroment.URL

export interface NuevoRegistroArgs {
  to: string
}

export interface ActulizarRegistroArgs {
  to: string
  status: string
}

export interface SocketStore {
  socket: Socket | null
  isOnline: boolean
  setSocket: (socket: Socket) => void
  disconnetSocket: () => void
  connetSocket: (args: { userId: string }) => Promise<boolean>
}

const useSocket = create<SocketStore>((set, get) => ({
  socket: null,
  isOnline: false,
  setSocket: socket => set({ socket }),
  connetSocket: async args => {
    return await new Promise<boolean>(resolve => {
      const newSocket = io(URL, {
        autoConnect: false,
        auth: cb => cb({ userId: args.userId })
      })

      newSocket.connect()

      if (newSocket.connected) {
        set({ socket: newSocket, isOnline: true })
        resolve(true)

        return
      }

      newSocket.on('connect', () => {
        set({ socket: newSocket, isOnline: true })
        resolve(true)
      })
      newSocket.on('disconnect', () => {
        set({ socket: null, isOnline: false })
        resolve(false)
      })
      newSocket.on('connect_error', () => {
        set({ socket: null, isOnline: false })
        resolve(false)
      })
    })
  },
  disconnetSocket: () => {
    const { socket } = get()
    socket?.removeAllListeners()
    socket?.disconnect()
    set({ socket: null, isOnline: false })
  }
}))

export { useSocket }
