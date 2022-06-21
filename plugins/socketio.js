import { io } from 'socket.io-client'

export default defineNuxtPlugin(() => {
  const url = 'http://localhost:1337'
  const socket = io(url, {
    autoConnect: false,
    transports: ['websocket'],
  })

  socket.on('hello', function (data) {
    console.log('data', data)
  })

  socket.on('connection', function () {
    console.log('client connected')
  })

  socket.on('connect_error', function (err) {
    console.log('client connect_error: ', err)
  })

  socket.on('connect_timeout', function (err) {
    console.log('client connect_timeout: ', err)
  })

  socket.onAny((event, ...args) => {
    console.log(event, args)
  })

  const connect = () => {
    socket.connect()
  }

  return {
    provide: {
      mysocket: {
        socket,
        connect,
      },
    },
  }
})
