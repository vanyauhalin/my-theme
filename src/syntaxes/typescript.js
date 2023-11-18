import { port } from "./port.js"
import { javascript } from "./javascript.js"

function typescript(syntax) {
  const scopes = javascript(syntax)
  return port(scopes, ".ts", ".tsx")
}

export { typescript }
