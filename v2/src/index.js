var m = require("mithril")

var Layout = require("./views/Layout")

m.route(document.body, "/home", {
    "/home": {
    	render: () => m(Layout/*, m(UserList)*/),
    },
    "/bio": {
    	render: () => {},
    },
    "/findme": {
    	render: () => {},
    },
    "/resume": {
    	render: () => {},
    },
})
