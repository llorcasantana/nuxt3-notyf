//Notyf plugin adapted to Nuxt 3 by llorcasantana@gmail.com
import { Notyf } from "notyf";
const themeColors = {
    primary: '#d0b985',
    primaryMedium: '#b4e4ce',
    primaryLight: '#f7fcfa',
    secondary: '#ff227d',
    accent: '#797bf2',
    accentMedium: '#d4b3ff',
    accentLight: '#b8ccff',
    success: '#d0b985',
    info: '#039BE5',
    warning: '#faae42',
    danger: '#FF7273',
    purple: '#8269B2',
    blue: '#37C3FF',
    green: '#93E088',
    yellow: '#FFD66E',
    orange: '#FFA981',
    lightText: '#a2a5b9',
    fadeGrey: '#ededed',
}
const notyfClient = new Notyf({
    duration: 15000,
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'warning',
            background: themeColors.warning,
            icon: {
                className: 'fas fa-hand-paper',
                tagName: 'i',
                text: '',
                color: '#f0f0f0'
            },
        },
        {
            type: 'info',
            background: themeColors.info,
            icon: {
                className: 'fas fa-info-circle',
                tagName: 'i',
                text: '',
                color: '#f0f0f0'
            },
        },
        {
            type: 'primary',
            background: themeColors.primary,
            icon: {
                className: 'fas fa-car-crash',
                tagName: 'i',
                text: '',
                color: '#f0f0f0'
            },
        },
        {
            type: 'accent',
            background: themeColors.accent,
            icon: {
                className: 'fas fa-car-crash',
                tagName: 'i',
                text: '',
                color: '#f0f0f0'
            },
        },
        {
            type: 'purple',
            background: themeColors.purple,
            icon: {
                className: 'fas fa-check-circle',
                tagName: 'i',
                text: '',
                color: '#f0f0f0'
            },
        },
        {
            type: 'blue',
            background: themeColors.blue,
            icon: {
                className: 'fas fa-check-circle',
                tagName: 'i',
                text: '',
                color: '#f0f0f0'
            },
        },
        {
            type: 'green',
            background: themeColors.green,
            icon: {
                className: 'fas fa-check-circle',
                tagName: 'i',
                text: '',
                color: '#f0f0f0'
            },
        },
        {
            type: 'orange',
            background: themeColors.orange,
            icon: {
                className: 'fas fa-check-circle',
                tagName: 'i',
                text: '',
                color: '#f0f0f0'
            },
        },
    ],
})

export default defineNuxtPlugin(() => {
    return {
        provide: {
            notif: notyfClient
        }
    }
})