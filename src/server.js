import { createServer } from "miragejs";

const dummy = { users: [{ id: 1, name: "cho" }] }
let server = createServer()
server.get("/api/users", dummy )
// export default function () {
//     createServer({
//       routes() {
//         this.get("/api/users", () => ({
//           reminders: [
//             { id: 1, text: "Walk the dog" },
//             { id: 2, text: "Take out the trash" },
//             { id: 3, text: "Work out" },
//           ],
//         }))
//       }
//     })
//
// }
