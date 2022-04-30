<script lang="ts">
  import Default from "./default.svelte"

  export const version = "1.3.2"
</script>

<Default>
  <h2>The PeerJS library</h2>
  <p class="tagline">PeerJS simplifies WebRTC peer-to-peer data, video, and audio calls.
  </p>
  <p>PeerJS wraps the browser's WebRTC implementation to provide a complete, configurable, and easy-to-use peer-to-peer
    connection
    API. Equipped with nothing but an ID, a peer can create a P2P data or media stream connection to a remote peer.

    <h4>Downloads</h4>
    <div class="downloads">
      <a href="https://unpkg.com/peerjs@{version}/dist/peerjs.min.js" download>
        <div class="download beta">
          Stable ({version})
        </div>
      </a>
      <div class="clear"></div>
    </div>

    <h2>Setup</h2>
    <h4>Include the library</h4>
    <pre>
  &lt;script src="https://unpkg.com/peerjs@{version}/dist/peerjs.min.js"&gt;&lt;/script&gt;
  </pre>

    <h4>Create a peer</h4>
    <pre>
  var peer = new Peer();
  </pre>

    <h2>Data connections</h2>
    <h4>Connect</h4>
    <pre>{`
  var conn = peer.connect('another-peers-id');
  // on open will be launch when you successfully connect to PeerServer
  conn.on('open', function(){
    // here you have conn.id
    conn.send('hi!');
  });`}
  </pre>
    <h4>Receive</h4>
    <pre>{`
  peer.on('connection', function(conn) {
    conn.on('data', function(data){
      // Will print 'hi!'
      console.log(data);
    });
  });`}
  </pre>

    <h2>Media calls</h2>
    <h4>Call</h4>
    <pre>{`
  var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  getUserMedia({video: true, audio: true}, function(stream) {
    var call = peer.call('another-peers-id', stream);
    call.on('stream', function(remoteStream) {
      // Show stream in some video/canvas element.
    });
  }, function(err) {
    console.log('Failed to get local stream' ,err);
  });`}
  </pre>
    <h4>Answer</h4>
    <pre>{`
  var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  peer.on('call', function(call) {
    getUserMedia({video: true, audio: true}, function(stream) {
      call.answer(stream); // Answer the call with an A/V stream.
      call.on('stream', function(remoteStream) {
        // Show stream in some video/canvas element.
      });
    }, function(err) {
      console.log('Failed to get local stream' ,err);
    });
  });`}
  </pre>


    <h2>PeerServer</h2>
    <p>To broker connections, PeerJS connects to a PeerServer. Note that no peer-to-peer data goes through the server; The
      server acts only as a connection broker.
    </p>
    <h4>PeerServer Cloud</h4>
    <p>If you don't want to run your own PeerServer, we offer a free cloud-hosted version of PeerServer.
      <a href="/peerserver">Official PeerServer!
      </a>
    </p>
    <h4>Run your own</h4>
    <p>
      <a href="https://github.com/peers/peerjs-server">PeerServer is open source
      </a> and is written in node.js. You can easily run your own.</p>


    <h2>Questions?</h2>
    Please report any bugs you find on the
    <a href="https://github.com/peers/peerjs/issues">Github issues page</a>.
    <br />
    <br>
    <a href="/docs#start">
      <div class="download">Get started!</div>
    </a>
</Default>