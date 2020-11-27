import { createServer } from "miragejs";
import { menus, footer } from './source/source'

let server = createServer();
server.get("/api/menus", menus )
server.get("/api/footer", footer)