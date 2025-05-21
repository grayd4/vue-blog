import { reactive } from 'vue'

export const store = reactive({
    posts: [
        {
            id: 1,
            title: "How to wrte a blog article",
            description: "Anyone can do it",
            date: new Date()
        },
        {
            id: 2,
            title: "How NOT to use tailwind",
            description: "Tutorials are always outdated",
            date: new Date()
        },
        {
            id: 3,
            title: "Will this project be completed?",
            description: "They usually aren't",
            date: new Date()
        }
    ]
})

export default store;

