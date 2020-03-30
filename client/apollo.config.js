module.exports = {
    client: {
        name: "Mock Bank Client",
        service: "server",
        url: "http://localhost:4000/graphql",
        addTypename: true,
        excludes: ['**/__tests__/**/*']
    }
}