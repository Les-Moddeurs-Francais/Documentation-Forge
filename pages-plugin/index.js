module.exports = async function pagesPlugin(context, options) {
    // ...
    return {
        name: 'pages-plugin',
        async loadContent() {
            /* ... */
        },
        async contentLoaded({content, actions}) {
            /* ... */
        },
        /* other lifecycle API */
    };
};