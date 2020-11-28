import { createServer } from "miragejs";
import {menus, footer, banner} from './source/source'

let server = createServer();
server.get("/api/menus", menus );
server.get("/api/footer", footer);
server.get("/api/banner", banner);