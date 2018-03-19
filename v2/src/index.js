var m = require("mithril")

var HeaderNav = require("./views/HeaderNav")

m.route(document.body, "/home", {
    "/home": {
    	render: () => m(HeaderNav/*, m(UserList)*/),
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
