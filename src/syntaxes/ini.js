// https://github.com/microsoft/vscode/blob/1.80.0/extensions/ini

function tokenColors(syntax) {
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p3 = syntax.plain[3]
  const s0 = syntax.string[0]
  const s1 = syntax.string[1]

  return {
    "comment.line.number-sign.ini": p0,
    "comment.line.semicolon.ini": p0,
    "entity.name.section.group-title.ini": p3,
    "keyword.other.definition.ini": p3,
    "punctuation.definition.entity.ini": p1,
    "punctuation.definition.string.begin.ini": s0,
    "punctuation.definition.string.end.ini": s0,
    "punctuation.separator.key-value.ini": p1,
    "source.ini": s1,
    "string.quoted.double.ini": s1,
    "string.quoted.single.ini": s1
  }
}

function semanticTokenColors() {
  return {}
}

export { tokenColors, semanticTokenColors }
