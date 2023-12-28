// https://github.com/microsoft/vscode/tree/1.80.0/extensions/go

function tokenColors(syntax) {
  const a0 = syntax.action[0]
  const c0 = syntax.composition[0]
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p2 = syntax.plain[2]
  const p3 = syntax.plain[3]
  const s0 = syntax.string[0]
  const s1 = syntax.string[1]

  return {
    "comment.block.go": p0,
    "comment.line.double-slash.go": p0,
    "constant.language.go": p3,
    "constant.numeric.binary.go": p3,
    "constant.numeric.decimal.go": p3,
    "constant.numeric.decimal.point.go": p1,
    "constant.numeric.exponent.decimal.go": p3,
    "constant.numeric.exponent.hexadecimal.go": p3,
    "constant.numeric.hexadecimal.go": p3,
    "constant.numeric.octal.go": p3,
    "constant.other.placeholder.go": p2,
    "constant.other.rune.go": p3,
    "entity.alias.import.go": p3,
    "entity.name.function.go": a0,
    "entity.name.import.go": s1,
    "entity.name.package.go": p3,
    "entity.name.type.go": c0,
    "keyword.channel.go": p1,
    "keyword.const.go": p1,
    "keyword.control.go": p1,
    "keyword.function.go": p1,
    "keyword.import.go": p1,
    "keyword.interface.go": p1,
    "keyword.map.go": p1,
    "keyword.operator.address.go": p2,
    "keyword.operator.arithmetic.bitwise.go": p2,
    "keyword.operator.arithmetic.go": p2,
    "keyword.operator.assignment.go": p2,
    "keyword.operator.channel.go": p2,
    "keyword.operator.comparison.go": p2,
    "keyword.operator.decrement.go": p2,
    "keyword.operator.ellipsis.go": p2,
    "keyword.operator.increment.go": p2,
    "keyword.operator.logical.go": p2,
    "keyword.operator.minus.exponent.decimal.go": p2,
    "keyword.operator.minus.exponent.hexadecimal.go": p2,
    "keyword.operator.plus.exponent.decimal.go": p2,
    "keyword.operator.plus.exponent.hexadecimal.go": p2,
    "keyword.other.unit.binary.go": p2,
    "keyword.other.unit.exponent.decimal.go": p2,
    "keyword.other.unit.exponent.hexadecimal.go": p2,
    "keyword.other.unit.hexadecimal.go": p2,
    "keyword.other.unit.imaginary.go": p2,
    "keyword.other.unit.octal.go": p2,
    "keyword.package.go": p1,
    "keyword.struct.go": p1,
    "keyword.type.go": p1,
    "keyword.var.go": p1,
    "punctuation.definition.begin.bracket.curly.go": p1,
    "punctuation.definition.begin.bracket.round.go": p1,
    "punctuation.definition.bracket.square.go": p1,
    "punctuation.definition.end.bracket.curly.go": p1,
    "punctuation.definition.end.bracket.round.go": p1,
    "punctuation.definition.imports.begin.bracket.round.go": p1,
    "punctuation.definition.imports.end.bracket.round.go": p1,
    "punctuation.definition.string.begin.go": s0,
    "punctuation.definition.string.end.go": s0,
    "punctuation.definition.variables.begin.bracket.round.go": p1,
    "punctuation.definition.variables.end.bracket.round.go": p1,
    "punctuation.other.colon.go": p1,
    "punctuation.other.comma.go": p1,
    "punctuation.other.period.go": p1,
    "punctuation.separator.constant.numeric.go": p1,
    "punctuation.terminator.go": p1,
    "source.go": p3,
    "storage.type.boolean.go": p1,
    "storage.type.byte.go": p1,
    "storage.type.error.go": p1,
    "storage.type.numeric.go": p1,
    "storage.type.rune.go": p1,
    "storage.type.string.go": p1,
    "storage.type.uintptr.go": p1,
    "string.quoted.double.go": s1,
    "string.quoted.raw.go": s1,
    "string.quoted.rune.go": s1,
    "support.function.builtin.go": p3,
    "support.function.go": p3,
    "variable.other.assignment.go": p3,
    "variable.other.declaration.go": p3
  }
}

function semanticTokenColors() {
  return {}
}

export { tokenColors, semanticTokenColors }
