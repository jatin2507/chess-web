import React from 'react'
import { useDispatch } from 'react-redux'
import { io } from 'socket.io-client'

let socket = io(process.env.REACT_APP_SOCKET_URL, { transports: ['websocket'] })
export { socket }

export default function Socketfunction() {
    console.log('Socket id', socket.id)
    const dispatch = useDispatch()
    socket.on('Response', (data) => {
        let { event, payload } = data
        console.log('Response', data)
        dispatch({ type: event, payload: { ...payload, isLoading: false } })
    })
}



export function disconnectSocket() {
    socket.disconnect()
}



