// Configuration of the Azure AD Application for this TodoList Single Page application
// Note that changing popUp to false will produce a completely different UX based on redirects instead of popups.
var config = {
    tenant: "cloud9ers.com",
    clientId: "68a70891-793c-4979-92e1-b5f22640ad99",
    redirectUri: "http://localhost:16969/",
    popUp: true
}

// Configuration of the Azure AD Application for the WebAPI called by this single page application (TodoListService)
var webApiConfig = {
    resourceId: "https://cloud9ers.com/TodoListService",
    resourceBaseAddress: "http://localhost:44321/",
}
