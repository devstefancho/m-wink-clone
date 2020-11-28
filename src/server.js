import { createServer } from "miragejs";
import {menus, footer, banner, company} from './source/source'

let server = createServer();
server.get("/api/menus", menus );
server.get("/api/footer", footer);
server.get("/api/banner", banner);
server.get("/api/company", company)