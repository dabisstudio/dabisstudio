import http.server
import socketserver
import os

PORT = 8080

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Check if the path is a directory first
        if self.path.endswith('/'):
             return http.server.SimpleHTTPRequestHandler.do_GET(self)

        # If the path doesn't exist, check if adding .html helps
        path_on_disk = self.translate_path(self.path)
        if not os.path.exists(path_on_disk):
            if os.path.exists(path_on_disk + ".html"):
                self.path = self.path + ".html"

        return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Allow address reuse to avoid "Address already in use" errors on restart
socketserver.TCPServer.allow_reuse_address = True

Handler = CustomHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
