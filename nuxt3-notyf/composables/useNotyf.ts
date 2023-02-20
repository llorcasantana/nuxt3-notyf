import {useNuxtApp} from "#app/nuxt";
export default function useNotyf() {
    const { $notif } = useNuxtApp()
    return {
        success: (message: string) => {
            $notif.success(message)
        },
        error: (message: string) => {
            $notif.error(message)
        },
        info: (message: string) => {
            $notif.open({
                type: 'info',
                message,
            })
        },
        warning: (message: string) => {
            $notif.open({
                type: 'warning',
                message,
            })
        },
        primary: (message: string) => {
            $notif.open({
                type: 'primary',
                message,
            })
        },
        purple: (message: string) => {
            $notif.open({
                type: 'purple',
                message,
            })
        },
        blue: (message: string) => {
            $notif.open({
                type: 'blue',
                message,
            })
        },
        green: (message: string) => {
            $notif.open({
                type: 'green',
                message,
            })
        },
        orange: (message: string) => {
            $notif.open({
                type: 'orange',
                message,
            })
        },
    }
}