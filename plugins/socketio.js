import { io } from "socket.io-client";

export default defineNuxtPlugin(() => {
    const url = 'http://localhost:1337'
    const socket = io(url, {
        autoConnect: false
    });

    socket.on("hello", (msg) => {
        console.log(msg);
    });

    socket.on("connect_error", (err) => {
        console.log(err.message)
        // if (err.message === "invalid username") {
        //     conso
        // }
    });
    socket.onAny((event, ...args) => {
        console.log(event, args);
    });
    const connect = () => {
        socket.auth = { username: "toto" }
        socket.connect()
        socket.on("connect", () => {
            console.log(socket.connected);
        });
    }

    return {
        provide: {
            mysocket: {
                socket,
                connect
            }
        }
    }
})
