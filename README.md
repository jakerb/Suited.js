# Suited.js
Suited is a JS framework for creating sites and apps with templates and variables.

# Getting Started
Suited relies on templates (the .html type) to render out websites, the way is does this is with the {{handlebars}} 
variable functionality taken from a previous project of mine Tasche.js. 

We're going to create a site containing a Homepage and About Us page in this demonstration this will entail creating three components. The first thing you will need to do is create an index page which will contain all of your views, you can take the <code>index.html</code> in this repo or simply add the following to the body of your HTML index page.

<pre>
&lt;div class=&quot;tasche-page&quot; data-tasche-page=&quot;index&quot; data-tasche-require=&quot;fullWidthHeader, subscribeBar, textPost&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;tasche-page&quot; data-tasche-page=&quot;about&quot; data-tasche-require=&quot;fullWidthHeader, textPost&quot;&gt;&lt;/div&gt;
</pre>

The two pages in our application are `index` and `about`, we have set what components we require, in the case of the `index` page
it is `fullWidthHeader`, `subscribeBar` and `textPost`. The components within the view will appear in the order you have set them in the
`data-tasche-page` property. 

Components are the building blocks within your site, rather than simply adding in a header or footer, we seperate the site into component parts allowing us to maintain a consistant structure throughout and saves on repeating code over multiple views.

Now we'll create the first component `fullWidthHeader` which will contain a header, subheader, body text and image - you can again use the 
example within this repo or use: 

<pre>
&lt;!-- Component --&gt;
&lt;div class=&quot;fullWidthHeader&quot;&gt;
	&lt;h1&gt;{{header}}&lt;/h1&gt;
	&lt;h4&gt;{{subheader}}&lt;/h4&gt;
	&lt;p&gt;{{body}}&lt;/p&gt;
	&lt;img src=&quot;{{image}}&quot; alt=&quot;&quot;&gt;
&lt;/div&gt;
&lt;!-- Component --&gt;
</pre>

Now that the component has been created and the variables (within the handlebars) have been added, we can either put the variables within
the `tucan.json` file (if the variables won't change) or pass them to Suited within our `app.js` file that we will create next. For the sake
of this demonstration, we'll create the variables within our JS file.

<pre>
	
	/* Example Suited Application */

	tasche.init("tasche.json");

	tasche.page("index", {
		fullWidthHeader: {
			header: "An About Page",
			subheader: "Welcome to this page",
			body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sint quasi explicabo!",
			image: "http://placehold.it/500x500"
		}
	});

	tasche.run();
</pre>

Now that our `app.js` file has been created and added to our `index.html` page, we start by initializing the app by calling our properties file (`tasche.json` which is required in all Suited applications), this file contains information about the app as well as static variables, pages and components.

<note>Note: If you add variables into the properties as well as your app js file, the app will always render the content from your app as an override.</note>
	
After the `init` has been called, we can now add our `index` page which will contain all of the variables for our components in key value pairs. You can add as many variables as you wish and use as many as you want inside of your application.
	
Once you are happy with the `app.js` file and all of the information within, you can now `run` the application which will then render the variables inside the components within the views!
