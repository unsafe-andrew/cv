import { renderToString } from "preact-render-to-string";
import Sass from "npm:sass";

const Index = () =>
	<html lang="en">
		<head>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<title>Andrew Lushin's CV</title>
			<style dangerouslySetInnerHTML={{ __html: Sass.compile("./style.sass" ).css }}></style>
			<script src="loadpics.js"></script>
		</head>
		<body>
			<div>
				<div>
					<h1>Andrew Lushin</h1>
					<h2>Software Engineer</h2>
				</div>
				<div id="pics-container"></div>
			</div>
			<Langs />
			<div>
				<h1>Contact me on..</h1>
				<div>
					<div><img src="telegram.png" class="icon" /><h3>Telegram:</h3> <a href="//t.me/unsafe_andrew">@unsafe_andrew</a></div>
					<div><img src="email.png" class="icon" /><h3>Email:</h3> <a href="mailto:">unsafe.andrew@shitposting.expert</a></div>
				</div>
			</div>
		</body>
	</html>;

const PicsContainer = () => <div id="pics-container"></div>;

const Langs = () => <div>
	<div id="backend-langs">
		<h3>Back-end</h3>
		<Lang name="Rust" icon="rust.png" description={<>
			What I did with Rust:
			<ul>
				<li>Working with the fastest web-servers and frameworks (Actix, Axum, may-minihttp)</li>
				<li>CLI utilities</li>
				<li>Deno FFI</li>
				<li>High-perfomant parsers (pest, nom)</li>
				<li>Working with cryptographic algorithms</li>
			</ul>
		</>} />
		<Lang name="Haskell" icon="haskell.png" description={<>
			What I did with Haskell:
			<ul>
				<li>APIs with Happstack</li>
				<li>Category Theory and type-level programming</li>
				<li>Packaging Haskell programs with <img style="height: 0.8rem; margin-right: 3px; position: relative; top: 3px" src="nix.svg" />Nix</li>
			</ul>
		</>} />
		<Lang name="Python" icon="python.png" description={<>
			What I did with Python:
			<ul>
				<li>Web scraping</li>
				<li>Telegram bots/userbots</li>
				<li>Bitcoin and Ethereum utilities/apps</li>
			</ul>
		</>} />
		<Lang name="Clojure" icon="clojure.png" description={<>
			What I did/worked in/with Clojure:
			<ul>
				<li>Telegram bots with a self-written library</li>
				<li>Concurrent data structures</li>
				<li>Macros</li>
				<li>Babashka</li>
			</ul>
		</>} />
		<Lang name="C" icon="c.png" description={<>
			What I did with C:
			<ul>
				<a href="https://github.com/unsafe-andrew/OpenDoas-cmpr">OpenDoas-cmpr</a>
				<li>File organization utilities</li>
				<li>Got the understanding of how X11 works by modifying dwm</li>
			</ul>
		</>} />
		<Lang name="PHP" icon="php.png" description={<>
			What I did with PHP:
			<ul>
				<li>An online school diary</li>
				<li>Integrating a website template with Bitrix</li>
			</ul>
		</>} />
	</div>
	<div id="frontend-langs">
		<h3>Front-end</h3>
		<Lang name="HTML/CSS" icon="html.png" description={<>
			 What websites I did:
			 <ul>
				 <li>A website for a photographer</li>
				 <li>A food delivery website</li>
			 </ul>
			 What can I do in CSS:
			 <ul>
				 <li>Flexbox</li>
				 <li>Grid</li>
				 <li>Animations</li>
				 <li>Responsive design</li>
			 </ul>
		</>} />
		<Lang name="TS/JS" icon="typescript.png" description={<>
			What I worked with in TS/JS:
			<ul>
				<li>React/Preact</li>
				<li>Vue.js</li>
				<li>Solid.js</li>
				<li>Alpine.js</li>
			</ul>
			Backend JS/TS:
			<ul>
				<li>Node.js + Express apps</li>
				<li>Deno</li>
				<li>Ramda.js</li>
				<li>Fresh framework</li>
			</ul>
		</>} />
		<Lang name="Elm" icon="elm.png" />
		<div>
			<h3>Other</h3>
			<Lang name="Bash" icon="bash.png" description={<>
				What I did with Git:
				<ul>
					<li>Advances bash scripting</li>
					<li>Automating the deploy process</li>
				</ul>
			</>} />
		</div>
	</div>
</div>;

const Lang = ({ name, icon, description }) => <div>
	<h4><img class="icon" src={icon} />{name}</h4>
	{description}
</div>

console.log(renderToString(<Index />));
