<script>
	import '../app.css';
	import '../button.css';
	import '../lato.css';
	import '../style.css';
	import 'github-fork-ribbon-css/gh-fork-ribbon.css';
</script>

<a class="github-fork-ribbon" href="https://github.com/peers" data-ribbon="Fork PeerJS on GitHub" title="Fork PeerJS on GitHub">Fork PeerJS on GitHub</a>
<div id="container">
	<div id="nav-wrap">
		<div class="sign">
			PEER
			<span class="highlight">JS</span>
		</div>
		<div id="nav">
			<a href="/">Home</a>
			<a href="/docs#start">Get Started</a>
			<a href="/docs#api">API Reference</a>
			<a href="/examples">Examples</a>
			<a href="/peerserver">PeerServer Cloud</a>
			<a href="https://stats.uptimerobot.com/B7Ww3sDBVz" target="_blank">Status page</a>
			<a href="/team">Team</a>
		</div>
	</div>
	<div id="content">
		<div id="text">
			<slot></slot>
		</div>
	</div>
</div>