<template>
    <div>
        <Navbar :pages="pages" :active-page="activePage" :click-nav-link="(index) => activePage = index" />
        <PageViewer :page="pages[activePage]"></PageViewer>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PageViewer from './components/PageViewer.vue'

export default {
    data() {
        return {
            activePage: 0,
            pages: [
                {
                    link: { text: 'Home', url: 'index.html' },
                    pageTitle: 'Home',
                    content: 'This is the home content'
                },
                {
                    link: { text: 'About Us', url: 'about.html' },
                    pageTitle: 'About Us',
                    content: 'This is the About Us content'
                },
                {
                    link: { text: 'Contact', url: 'contact.html' },
                    pageTitle: 'Contact',
                    content: 'This is the Contact content'
                }
            ]
        };
    },
    components: {
        Navbar,
        PageViewer,
    }
}
</script>