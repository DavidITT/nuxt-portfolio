import {defineStore} from 'pinia'

export const useNavbarStore = defineStore('navbar', {
    state: () => ({
        title: 'David Villeda',
        activeSection: 'about'
    }),
    actions: {
        updateTitle(newTitle) {
            this.title = newTitle
        },
        updateActiveSection(section) {
            this.activeSection = section
        }
    },
    getters: {
        currentActiveSection: (state) => state.activeSection,
    },
})