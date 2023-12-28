#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { argv } from "node:process"
import sade from "sade"
import { light } from "./src/colors/themes.js"
import * as docker from "./src/syntaxes/docker.js"
import * as go from "./src/syntaxes/go.js"
import * as html from "./src/syntaxes/html.js"
import * as ini from "./src/syntaxes/ini.js"
import * as javascript from "./src/syntaxes/javascript.js"
import * as json from "./src/syntaxes/json.js"
import * as jsonc from "./src/syntaxes/jsonc.js"
import * as jsonl from "./src/syntaxes/jsonl.js"
import * as makefile from "./src/syntaxes/makefile.js"
import * as ruby from "./src/syntaxes/ruby.js"
import * as toml from "./src/syntaxes/toml.js"
import * as typescript from "./src/syntaxes/typescript.js"
import * as yaml from "./src/syntaxes/yaml.js"
import * as editor from "./src/editor.js"

const root = new URL(".", import.meta.url).pathname
const dist = join(root, "dist")

const make = sade("./makefile.js")

make
  .command("build")
  .action(async () => {
    const themes = [
      {
        id: "light",
        name: "Vanya's Light",
        ...light
      }
    ]
    const syntaxes = [
      docker,
      go,
      html,
      ini,
      javascript,
      json,
      jsonc,
      jsonl,
      makefile,
      ruby,
      toml,
      typescript,
      yaml
    ]
    await mkdir(dist, { recursive: true })
    await Promise.all(themes.map(async (theme) => {
      const tokenColors = {}
      const semanticTokenColors = {}
      await Promise.all(syntaxes.map(async (syntax) => {
        const a = syntax.tokenColors(theme.syntax)
        Object.entries(a).forEach(([scope, color]) => {
          if (!tokenColors[color]) {
            tokenColors[color] = {
              scope: [],
              settings: {
                foreground: color
              }
            }
          }
          tokenColors[color].scope.push(scope)
        })
        const b = syntax.semanticTokenColors(theme.syntax)
        Object.entries(b).forEach(([scope, color]) => {
          semanticTokenColors[scope] = {
            foreground: color
          }
        })
      }))
      const object = {
        name: theme.name,
        colors: editor.colors(theme.editor),
        tokenColors: Object.values(tokenColors),
        semanticHighlighting: true,
        semanticTokenColors
      }
      const file = join(dist, `${theme.id}.json`)
      const content = JSON.stringify(object, undefined, 2)
      await writeFile(file, content)
    }))
  })

make.parse(argv)
