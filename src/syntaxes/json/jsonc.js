import { port } from "../../port.js"
import * as json from "./json.js"

function tokenColors(syntax) {
  const scopes = json.tokenColors(syntax)
  return port(scopes, ".json.comments")
}

function semanticTokenColors() {
  return {}
}

export { tokenColors, semanticTokenColors }
