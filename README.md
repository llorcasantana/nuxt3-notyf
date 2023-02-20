# Nuxt3 notyf
I would like to share with all of you my example of the notyf library in nuxtjs v3 and for a better experience I use composable. Feel free to download the project and do whatever you want with it.

###Links

You can see an example of this plugin in [js](https://carlosroso.com/notyf/)

###How it's work
First off all need to download fontawesome and notyf libraries

`$ npm install @fortawesome/fontawesome-free`
`$ npm install notyf`

Then we will need to configure nuxt to see the libraries for us.

```javascript
export default defineNuxtConfig({
    css: [
        'notyf/notyf.min.css',
        '@fortawesome/fontawesome-free/css/all.css',
    ],
    plugins: [
        { src: "~/plugins/notyf.client.ts", mode: "client" }
    ],
})
```

Then we will proceed to configure our plugin

```javascript
//create a js file named 'notyf.client.ts' inside plugins
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
```
After that, need to create a composable folder and then, create a js file inside it named useNotyf.js

```javascript
import {useNuxtApp} from "#app/nuxt"; //Import nuxt in to composable file
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
```
That's all!!!. Now you can use the plugin easily


```html
<template>
  <div>
    <button @click="success">Success</button>
    <button @click="warning">Warning</button>
    <button @click="info">Info</button>
    <button @click="error">Error</button>
  </div>
</template>
```

```javascript
import useNotyf from "~/composables/useNotyf";

const notyf = useNotyf()
const success = () => {
  notyf.success('This is a success notification')
}
const warning = () => {
  notyf.warning('This is a warning notification')
}
const info = () => {
  notyf.info('This is an info notification')
}
const error = () => {
  notyf.error('This is an error notification')
}
```

# Enjoy!!