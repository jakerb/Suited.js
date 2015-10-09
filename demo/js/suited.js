/*
 * Created by Jake Bown (@jakebown1)
 * For support, see my Github (https://github.com/jakerb)
 * Feel free to drop me a line at jake@jakebown.com
 * Suited.js has been built out of Tasche.js (also by me)
 */

var object = {};
var appData = {};

var tasche = {

	init:function(config) {
		var that = this;
		if(config) {
			appData = that.newApp(config);
			console.log(appData);
		} else {
			console.warn("Not config found");
		}
	},

	run:function() {
		var that = this;
		$('.tasche-page').each(function() {
			var elem = $(this);
			var page = elem.data('tasche-page');
			var req = elem.data('tasche-require');
			req = req.split(',')
				
			for (var i = req.length - 1; i >= 0; i--) {
				req[i] = req[i].replace(' ', '');
				if(appData.components[req[i]] && appData.pages[page][req[i]]) {
					that.render({template: appData.views + appData.components[req[i]], data: appData.pages[page][req[i]], element: page});
				
				}
			};
		});
	},

	newApp:function(config) {
		var tmp = null;
		$.ajax({
		  url: config,
		  async: false,
		  dataType: "json",
		  success: function(app) {
		  	tmp = app.tasche;
		  },
		});

		return tmp;
	},

	render:function(tasche, callback) {
		var page;
		var that = this;
		$.ajax({
		  url: tasche.template,
		  success: function(html) {
		  	var view = $('div[data-tasche-page="' + tasche.element + '"]');
		    view.html(view.html() + that.process(html, tasche.data, callback));
		  },
		  dataType: "html"
		});
	},

	page:function(a, b) {
		appData.pages[a] = b;
	},

	process:function(html, tasche, callback) {
		find = html.match(/([^}{]+)(?=})/g);
		var page;

	    if (find != null && find.length > 0) { 
			
			console.log(tasche);

			$.each(tasche, function(k, v) {
				html = html.replace("{{"+k+"}}", v);
			}); 
		}

		if(callback) { callback(); }
		return html;
	}
}
