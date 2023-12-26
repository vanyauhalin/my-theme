// https://github.com/microsoft/vscode/tree/1.80.0/extensions/javascript

function javascript(syntax) {
  const a0 = syntax.action[0]
  const c0 = syntax.composition[0]
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p2 = syntax.plain[2]
  const p3 = syntax.plain[3]
  const s0 = syntax.string[0]
  const s1 = syntax.string[1]

  return {
    "comment.block.documentation.js source.embedded.ts": p0,
    "comment.block.documentation.js": p0,
    "comment.block.js": p0,
    "comment.line.double-slash.js": p0,
    "comment.line.shebang.js": p0,
    "comment.line.triple-slash.directive.js keyword.operator.assignment.js": p0,
    "comment.line.triple-slash.directive.js punctuation.definition.string.begin.js": p0,
    "comment.line.triple-slash.directive.js punctuation.definition.string.end.js": p0,
    "comment.line.triple-slash.directive.js string.quoted.double.js": p0,
    "comment.line.triple-slash.directive.js string.quoted.single.js": p0,
    "comment.line.triple-slash.directive.js": p0,
    "constant.language.boolean.false.js": p3,
    "constant.language.boolean.true.js": p3,
    "constant.language.infinity.js": p3,
    "constant.language.nan.js": p3,
    "constant.language.null.js": p3,
    "constant.language.undefined.js": p3,
    "constant.numeric.binary.js": p3,
    "constant.numeric.decimal.js": p3,
    "constant.numeric.hex.js": p3,
    "constant.numeric.octal.js": p3,
    "entity.name.tag.directive.js": p0,
    "entity.name.tag.namespace.js": p1,
    "entity.name.type.alias.js": c0,
    "entity.name.type.class.js": c0,
    "entity.name.type.enum.js": c0,
    "entity.name.type.interface.js": c0,
    "entity.other.attribute-name.directive.js": p0,
    "keyword.control.as.js": p1,
    "keyword.control.assert.js": p1,
    "keyword.control.conditional.js": p1,
    "keyword.control.default.js": p1,
    "keyword.control.export.js": p1,
    "keyword.control.flow.js": p1,
    "keyword.control.from.js": p1,
    "keyword.control.js": p1,
    "keyword.control.loop.js": p1,
    "keyword.control.new.js": p1,
    "keyword.control.require.js": p1,
    "keyword.control.satisfies.js": p1,
    "keyword.control.switch.js": p1,
    "keyword.control.trycatch.js": p1,
    "keyword.control.type.js": p1,
    "keyword.control.with.js": p1,
    "keyword.generator.asterisk.js": p2,
    "keyword.operator.arithmetic.js": p2,
    "keyword.operator.assignment.compound.bitwise.js": p2,
    "keyword.operator.assignment.compound.js": p2,
    "keyword.operator.assignment.js": p2,
    "keyword.operator.bitwise.js": p2,
    "keyword.operator.bitwise.shift.js": p2,
    "keyword.operator.comparison.js": p2,
    "keyword.operator.decrement.js": p2,
    "keyword.operator.definiteassignment.js": p2,
    "keyword.operator.expression.delete.js": p1,
    "keyword.operator.expression.extends.js": p1,
    "keyword.operator.expression.import.js": p1,
    "keyword.operator.expression.in.js": p1,
    "keyword.operator.expression.infer.js": p1,
    "keyword.operator.expression.instanceof.js": p1,
    "keyword.operator.expression.is.js": p1,
    "keyword.operator.expression.keyof.js": p1,
    "keyword.operator.expression.of.js": p1,
    "keyword.operator.expression.typeof.js": p1,
    "keyword.operator.expression.void.js": p1,
    "keyword.operator.increment.js": p2,
    "keyword.operator.logical.js": p2,
    "keyword.operator.new.js": p1,
    "keyword.operator.optional.js": p2,
    "keyword.operator.relational.js": p2,
    "keyword.operator.rest.js": p2,
    "keyword.operator.spread.js": p2,
    "keyword.operator.ternary.js": p2,
    "keyword.operator.type.annotation.js": p1,
    "keyword.operator.type.asserts.js": p1,
    "keyword.other.debugger.js": p1,
    "keyword.other.js": p1,
    "meta.block.js": p3,
    "meta.brace.angle.js": p1,
    "meta.brace.round.js": p1,
    "meta.brace.square.js": p1,
    "meta.definition.function.js entity.name.function.js": a0,
    "meta.definition.method.js entity.name.function.js": a0,
    "meta.definition.property.js entity.name.function.js": a0,
    "meta.delimiter.decimal.period.js": p1,
    "meta.embedded.expression.js": p3,
    "meta.embedded.line.js": p3,
    "meta.import-equals.external.js keyword.control.import.js": p1,
    "meta.import-equals.internal.js keyword.control.import.js": p1,
    "meta.import.js keyword.control.import.js": p1,
    "meta.import.js punctuation.definition.string.begin.js": p1,
    "meta.import.js punctuation.definition.string.end.js": p1,
    "meta.import.js string.quoted.double.js": p3,
    "meta.import.js string.quoted.single.js": p3,
    "meta.interface.js keyword.operator.optional.js": p1,
    "meta.interface.js meta.definition.method.js entity.name.function.js": p1,
    "meta.interface.js meta.definition.property.js entity.name.function.js": p1,
    "meta.interface.js punctuation.definition.string.begin.js": p1,
    "meta.interface.js punctuation.definition.string.end.js": p1,
    "meta.interface.js string.quoted.double.js": p1,
    "meta.interface.js string.quoted.single.js": p1,
    "meta.interface.js variable.language.this.js": p1,
    "meta.interface.js": p1,
    "meta.jsx.children.js": s1,
    "meta.namespace.declaration.js entity.name.type.module.js": c0,
    "meta.return.type.arrow.js punctuation.definition.string.begin.js": p1,
    "meta.return.type.arrow.js punctuation.definition.string.end.js": p1,
    "meta.return.type.arrow.js punctuation.definition.string.template.begin.js": p1,
    "meta.return.type.arrow.js punctuation.definition.string.template.end.js": p1,
    "meta.return.type.arrow.js string.quoted.double.js": p1,
    "meta.return.type.arrow.js string.quoted.single.js": p1,
    "meta.return.type.arrow.js string.template.js": p1,
    "meta.return.type.arrow.js": p1,
    "meta.return.type.js punctuation.definition.string.begin.js": p1,
    "meta.return.type.js punctuation.definition.string.end.js": p1,
    "meta.return.type.js punctuation.definition.string.template.begin.js": p1,
    "meta.return.type.js punctuation.definition.string.template.end.js": p1,
    "meta.return.type.js string.quoted.double.js": p1,
    "meta.return.type.js string.quoted.single.js": p1,
    "meta.return.type.js string.template.js": p1,
    "meta.return.type.js": p1,
    "meta.tag.attributes.js keyword.operator.assignment.js": p1,
    "meta.tag.attributes.js punctuation.definition.string.begin.js": p1,
    "meta.tag.attributes.js punctuation.definition.string.end.js": p1,
    "meta.tag.attributes.js string.quoted.double.js": p3,
    "meta.tag.attributes.js string.quoted.single.js": p3,
    "meta.tag.js": p3,
    "meta.tag.without-attributes.js": p3,
    "meta.type.annotation.js constant.numeric.decimal.js": p1,
    "meta.type.annotation.js meta.definition.method.js entity.name.function.js": p1,
    "meta.type.annotation.js punctuation.definition.string.begin.js": p1,
    "meta.type.annotation.js punctuation.definition.string.end.js": p1,
    "meta.type.annotation.js punctuation.definition.string.template.begin.js": p1,
    "meta.type.annotation.js punctuation.definition.string.template.end.js": p1,
    "meta.type.annotation.js string.quoted.double.js": p1,
    "meta.type.annotation.js string.quoted.single.js": p1,
    "meta.type.annotation.js string.template.js": p1,
    "meta.type.annotation.js": p1,
    "meta.type.declaration.js keyword.operator.assignment.js": p1,
    "meta.type.declaration.js keyword.operator.optional.js": p1,
    "meta.type.declaration.js meta.definition.method.js entity.name.function.js": p1,
    "meta.type.declaration.js meta.definition.property.js entity.name.function.js": p1,
    "meta.type.declaration.js punctuation.definition.string.begin.js": p1,
    "meta.type.declaration.js punctuation.definition.string.end.js": p1,
    "meta.type.declaration.js punctuation.definition.string.template.begin.js": p1,
    "meta.type.declaration.js punctuation.definition.string.template.end.js": p1,
    "meta.type.declaration.js string.quoted.double.js": p1,
    "meta.type.declaration.js string.quoted.single.js": p1,
    "meta.type.declaration.js string.template.js": p1,
    "meta.type.declaration.js variable.language.this.js": p1,
    "meta.type.declaration.js": p1,
    "meta.type.parameters.js punctuation.definition.string.begin.js": p1,
    "meta.type.parameters.js punctuation.definition.string.end.js": p1,
    "meta.type.parameters.js punctuation.definition.string.template.begin.js": p1,
    "meta.type.parameters.js punctuation.definition.string.template.end.js": p1,
    "meta.type.parameters.js string.quoted.double.js": p1,
    "meta.type.parameters.js string.quoted.single.js": p1,
    "meta.type.parameters.js string.template.js": p1,
    "meta.type.parameters.js": p1,
    "punctuation.accessor.js": p1,
    "punctuation.accessor.optional.js": p1,
    "punctuation.decorator.js": p1,
    "punctuation.definition.binding-pattern.array.js": p1,
    "punctuation.definition.binding-pattern.object.js": p1,
    "punctuation.definition.block.js": p1,
    "punctuation.definition.entity.js": p1,
    "punctuation.definition.parameters.begin.js": p1,
    "punctuation.definition.parameters.end.js": p1,
    "punctuation.definition.section.case-statement.js": p1,
    "punctuation.definition.string.begin.js": s0,
    "punctuation.definition.string.end.js": s0,
    "punctuation.definition.string.template.begin.js": s0,
    "punctuation.definition.string.template.end.js": s0,
    "punctuation.definition.tag.begin.js": p1,
    "punctuation.definition.tag.directive.js": p0,
    "punctuation.definition.tag.end.js": p1,
    "punctuation.definition.template-expression.begin.js": p1,
    "punctuation.definition.template-expression.end.js": p1,
    "punctuation.destructuring.js": p1,
    "punctuation.section.embedded.begin.js": p1,
    "punctuation.section.embedded.end.js": p1,
    "punctuation.separator.comma.js": p1,
    "punctuation.separator.key-value.js": p1,
    "punctuation.separator.label.js": p1,
    "punctuation.separator.namespace.js": p1,
    "punctuation.separator.parameter.js": p1,
    "punctuation.terminator.statement.js": p1,
    "source.embedded.js": p3,
    "source.js": p3,
    "storage.modifier.async.js": p1,
    "storage.modifier.js": p1,
    "storage.type.class.js": p1,
    "storage.type.enum.js": p1,
    "storage.type.function.arrow.js": p1,
    "storage.type.function.js": p1,
    "storage.type.interface.js": p1,
    "storage.type.js": p1,
    "storage.type.namespace.js": p1,
    "storage.type.numeric.bigint.js": p3,
    "storage.type.property.js": p1,
    "storage.type.type.js": p1,
    "string.quoted.double.js": s1,
    "string.quoted.single.js": s1,
    "string.regexp.js keyword.other.js": p2,
    "string.regexp.js": s1,
    "string.template.js": s1,
    "variable.language.arguments.js": p3,
    "variable.language.super.js": p3,
    "variable.language.this.js": p3
  }
}

export { javascript }
