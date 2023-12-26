// https://github.com/microsoft/vscode/blob/1.80.0/extensions/yaml

function tokenColors(syntax) {
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p3 = syntax.plain[3]
  const s0 = syntax.string[0]
  const s1 = syntax.string[1]

  return {
    "comment.line.number-sign.yaml": p0,
    "constant.language.boolean.yaml": s1,
    "constant.language.merge.yaml": p1,
    "constant.language.null.yaml": s1,
    "constant.language.value.yaml": s1,
    "constant.numeric.float.yaml": s1,
    "constant.numeric.indentation-indicator.yaml": p1,
    "constant.numeric.integer.yaml": s1,
    "constant.numeric.yaml-version.yaml": s1,
    "constant.other.timestamp.yaml": s1,
    "entity.name.tag.yaml": p3,
    "entity.name.type.anchor.yaml": s1,
    "entity.other.document.begin.yaml": p1,
    "entity.other.document.end.yaml": p1,
    "keyword.control.flow.alias.yaml": p1,
    "keyword.control.flow.block-scalar.folded.yaml": p1,
    "keyword.control.flow.block-scalar.literal.yaml": p1,
    "keyword.control.property.anchor.yaml": p1,
    "keyword.other.directive.tag.yaml": p1,
    "keyword.other.directive.yaml.yaml": p1,
    "punctuation.definition.block.sequence.item.yaml": p1,
    "punctuation.definition.directive.begin.yaml": p1,
    "punctuation.definition.key-value.begin.yaml": p1,
    "punctuation.definition.mapping.begin.yaml": p1,
    "punctuation.definition.mapping.end.yaml": p1,
    "punctuation.definition.sequence.begin.yaml": p1,
    "punctuation.definition.sequence.end.yaml": p1,
    "punctuation.definition.string.begin.yaml": s0,
    "punctuation.definition.string.end.yaml": s0,
    "punctuation.separator.key-value.mapping.yaml": p1,
    "punctuation.separator.mapping.yaml": p1,
    "punctuation.separator.sequence.yaml": p1,
    "source.yaml": s1,
    "storage.modifier.chomping-indicator.yaml": p1,
    "storage.type.tag-handle.yaml": p1,
    "string.quoted.double.yaml": s1,
    "string.quoted.single.yaml": s1,
    "string.unquoted.block.yaml": s1,
    "string.unquoted.directive-name.yaml": s1,
    "string.unquoted.directive-parameter.yaml": s1,
    "string.unquoted.plain.in.yaml": s1,
    "string.unquoted.plain.out.yaml": s1,
    "support.other.directive.reserved.yaml": p1,
    "support.type.tag-prefix.yaml": s1,
    "variable.other.alias.yaml": s1
  }
}

export { tokenColors }
