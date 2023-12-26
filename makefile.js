#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { argv } from "node:process"
import sade from "sade"
import { light } from "./src/colors/themes.js"
import * as html from "./src/syntaxes/html.js"
import * as javascript from "./src/syntaxes/javascript.js"
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
      html.tokenColors,
      javascript.tokenColors,
      typescript.tokenColors,
      yaml.tokenColors
    ]
    await mkdir(dist, { recursive: true })
    await Promise.all(themes.map(async (theme) => {
      const cache = {}
      await Promise.all(syntaxes.map(async (syntax) => {
        const result = syntax(theme.syntax)
        Object.entries(result).forEach(([scope, color]) => {
          if (!cache[color]) {
            cache[color] = {
              scope: [],
              settings: {
                foreground: color
              }
            }
          }
          cache[color].scope.push(scope)
        })
      }))
      const colors = editor.colors(theme.editor)
      const tokenColors = Object.values(cache)
      const result = {
        name: theme.name,
        colors,
        tokenColors
      }
      const file = join(dist, `${theme.id}.json`)
      const content = JSON.stringify(result, undefined, 2)
      await writeFile(file, content)
    }))
  })

make.parse(argv)
