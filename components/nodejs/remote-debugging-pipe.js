const repl = await import('node:repl')
const net = await import('node:net');
const fs = await import('node:fs');

let connections = 0;
net.createServer((socket) => {
  connections += 1;
  repl.start({
    prompt: 'Node.js via namedPipe/socket> ',
    input: socket,
    output: socket
  }).on('exit', () => {
    socket.end();
  });
}).listen(127.0.0.1:5001);

// Todo implement logic for the unlink quirks on linux then switch from port to 
