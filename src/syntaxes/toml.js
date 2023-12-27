// https://github.com/tamasfe/taplo/tree/0.8.1/editors/vscode

function tokenColors(syntax) {
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p3 = syntax.plain[3]
  const s1 = syntax.string[1]

  return {
    "comment.line.number-sign.toml": p0,
    "constant.language.boolean.toml": s1,
    "constant.numeric.bin.toml": s1,
    "constant.numeric.float.toml": s1,
    "constant.numeric.hex.toml": s1,
    "constant.numeric.inf.toml": s1,
    "constant.numeric.integer.toml": s1,
    "constant.numeric.nan.toml": s1,
    "constant.numeric.oct.toml": s1,
    "constant.other.time.date.toml": s1,
    "constant.other.time.datetime.local.toml": s1,
    "constant.other.time.datetime.offset.toml": s1,
    "constant.other.time.time.toml": s1,
    "meta.array.toml": p3,
    "meta.preprocessor.toml": p0,
    "punctuation.definition.array.table.toml": p1,
    "punctuation.definition.array.toml": p1,
    "punctuation.definition.table.inline.toml": p1,
    "punctuation.definition.table.toml": p1,
    "punctuation.eq.toml": p1,
    "punctuation.separator.array.toml": p1,
    "punctuation.separator.dot.toml": p1,
    "punctuation.separator.table.inline.toml": p1,
    "source.toml": s1,
    "string.quoted.single.basic.line.toml": s1,
    "string.quoted.single.literal.line.toml": s1,
    "string.quoted.triple.basic.block.toml": s1,
    "string.quoted.triple.literal.block.toml": s1,
    "support.type.property-name.array.toml": p3,
    "support.type.property-name.table.toml": p3,
    "support.type.property-name.toml": p3
  }
}

function semanticTokenColors() {
  return {}
}

export { tokenColors, semanticTokenColors }
