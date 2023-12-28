// https://github.com/Shopify/vscode-ruby-lsp/blob/v0.6.2/grammars/ruby.cson.json

function tokenColors(syntax) {
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p2 = syntax.plain[2]
  const p3 = syntax.plain[3]
  const s0 = syntax.string[0]
  const s1 = syntax.string[1]

  return {
    "comment.block.documentation.ruby": p0,
    "comment.line.number-sign.ruby": p0,
    "constant.language.boolean.ruby": p3,
    "constant.language.nil.ruby": p3,
    "constant.language.symbol.hashkey.ruby": p3,
    "constant.language.symbol.interpolated.ruby": s1,
    "constant.language.symbol.ruby": s1, // p3,
    "constant.numeric.ruby": p3,
    "entity.name.function.ruby": p3,
    "entity.name.type.class.ruby": p3,
    "entity.name.type.module.ruby": p3,
    "entity.other.inherited-class.ruby": p3,
    "keyword.control.class.ruby": p1,
    "keyword.control.def.ruby": p1,
    "keyword.control.module.ruby": p1,
    "keyword.control.pseudo-method.ruby": p1,
    "keyword.control.ruby": p1,
    "keyword.control.start-block.ruby": p1,
    "keyword.operator.arithmetic.ruby": p2,
    "keyword.operator.assignment.augmented.ruby": p2,
    "keyword.operator.assignment.ruby": p2,
    "keyword.operator.comparison.ruby": p2,
    "keyword.operator.logical.ruby": p2,
    "keyword.operator.other.ruby": p2,
    "keyword.other.special-method.ruby": p1,
    "meta.require.ruby punctuation.definition.string.begin.ruby": p1,
    "meta.require.ruby punctuation.definition.string.end.ruby": p1,
    "meta.require.ruby string.quoted.double.interpolated.ruby": p3,
    "punctuation.definition.arbitrary-repetition.ruby": p1,
    "punctuation.definition.constant.hashkey.ruby": p1,
    "punctuation.definition.constant.ruby": p1,
    "punctuation.definition.parameters.ruby": p1,
    "punctuation.definition.string.begin.ruby": s0,
    "punctuation.definition.string.end.ruby": s0,
    "punctuation.definition.symbol.begin.ruby": p1,
    "punctuation.definition.symbol.end.ruby": p1,
    "punctuation.definition.variable.ruby": p1,
    "punctuation.section.array.begin.ruby": p1,
    "punctuation.section.array.end.ruby": p1,
    "punctuation.section.embedded.begin.ruby": p1,
    "punctuation.section.embedded.end.ruby": p1,
    "punctuation.section.function.begin.ruby": p1,
    "punctuation.section.function.end.ruby": p1,
    "punctuation.section.function.ruby": p1,
    "punctuation.section.regexp.begin.ruby": p1,
    "punctuation.section.regexp.end.ruby": p1,
    "punctuation.section.regexp.ruby": s0,
    "punctuation.section.scope.begin.ruby": p1,
    "punctuation.section.scope.end.ruby": p1,
    "punctuation.section.scope.ruby": p1,
    "punctuation.section.symbol.begin.ruby": p1,
    "punctuation.section.symbol.end.ruby": p1,
    "punctuation.separator.inheritance.ruby": p1,
    "punctuation.separator.method.ruby": p1,
    "punctuation.separator.namespace.ruby": p1,
    "punctuation.separator.object.ruby": p1,
    "punctuation.separator.other.ruby": p1,
    "punctuation.separator.statement.ruby": p1,
    "punctuation.separator.variable.ruby": p1,
    "source.ruby punctuation.separator.key-value": p1,
    "source.ruby": p3,
    "string.interpolated.ruby": s1,
    "string.quoted.double.interpolated.ruby": s1,
    "string.quoted.other.interpolated.ruby": s1,
    "string.quoted.other.ruby": s1,
    "string.quoted.single.ruby": s1,
    "string.regexp.interpolated.ruby": s1,
    "support.class.ruby": p3,
    "support.function.kernel.ruby": p3,
    "variable.language.ruby": p3,
    "variable.language.self.ruby": p3,
    "variable.other.constant.ruby": p3,
    "variable.other.readwrite.class.ruby": p3,
    "variable.other.readwrite.global.pre-defined.ruby": p3,
    "variable.other.readwrite.global.ruby": p3,
    "variable.other.readwrite.instance.ruby": p3,
    "variable.other.ruby": p3,
    "variable.parameter.function.ruby": p3
  }
}

function semanticTokenColors(syntax) {
  const a0 = syntax.action[0]
  const c0 = syntax.composition[0]

  return {
    "class.declaration:ruby": c0,
    "method.declaration:ruby": a0,
    "namespace.declaration:ruby": c0
  }
}

export { tokenColors, semanticTokenColors }
