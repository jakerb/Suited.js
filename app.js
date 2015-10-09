	
	/* Example Tasche Application */

	tasche.init("tasche.json");

	tasche.page("about", {
		fullWidthHeader: {
			header: "An About Page",
			subheader: "Welcome to this page",
			body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sint quasi explicabo!"
		},
		textPost: {
			header: "An About Page",
			subheader: "Welcome to this page",
			body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sint quasi explicabo!"
		}
	});

	tasche.run();