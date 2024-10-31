import {defineStore} from 'pinia'

export const useSideBarStore = defineStore('sidebar', {
    state: () => ({
        status: false,
    }),
    actions: {
        toggleSideBar(section) {
            this.status = !this.status
        }
    },
    getters: {
        sidebarStatus: (state) => state.status,
    },
})