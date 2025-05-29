# Use WasmEdge slim runtime as the base image
FROM wasmedge/slim-runtime:0.10.1

# Add WasmEdge QuickJS WASM runtime and your JS server code
ADD wasmedge_quickjs.wasm /
ADD http_server.mjs /
ADD modules /modules

# Start the server using WasmEdge QuickJS
CMD ["wasmedge", "--dir", ".:/", "/wasmedge_quickjs.wasm", "http_server.mjs"]
