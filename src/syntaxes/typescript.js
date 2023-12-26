import { port } from "../port.js"
import * as javascript from "./javascript.js"

function tokenColors(syntax) {
  const scopes = javascript.tokenColors(syntax)
  return port(scopes, ".ts", ".tsx")
}

export { tokenColors }
