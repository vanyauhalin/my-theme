// https://github.com/microsoft/vscode/tree/1.80.0/extensions/json

function tokenColors(syntax) {
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p3 = syntax.plain[3]
  const s0 = syntax.string[0]
  const s1 = syntax.string[1]

  return {
    "comment.block.documentation.json": p0,
    "comment.block.json": p0,
    "comment.line.double-slash.js": p0,
    "constant.language.json": s1,
    "constant.numeric.json": s1,
    "meta.structure.dictionary.value.json punctuation.definition.string.begin.json": s0,
    "meta.structure.dictionary.value.json punctuation.definition.string.end.json": s0,
    "punctuation.definition.array.begin.json": p1,
    "punctuation.definition.array.end.json": p1,
    "punctuation.definition.comment.json": p1,
    "punctuation.definition.dictionary.begin.json": p1,
    "punctuation.definition.dictionary.end.json": p1,
    "punctuation.definition.string.begin.json": p1,
    "punctuation.definition.string.end.json": p1,
    "punctuation.separator.array.json": p1,
    "punctuation.separator.dictionary.key-value.json": p1,
    "punctuation.separator.dictionary.pair.json": p1,
    "punctuation.support.type.property-name.begin.json": p1,
    "punctuation.support.type.property-name.end.json": p1,
    "source.json": s1,
    "string.json support.type.property-name.json": p3,
    "string.quoted.double.json": s1
  }
}

function semanticTokenColors() {
  return {}
}

export { tokenColors, semanticTokenColors }
