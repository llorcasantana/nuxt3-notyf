// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'notyf/notyf.min.css',
        '@fortawesome/fontawesome-free/css/all.css',
    ],
    plugins: [
        { src: "~/plugins/notyf.client.ts", mode: "client" }
    ],
})
