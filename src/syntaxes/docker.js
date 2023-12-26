// https://github.com/microsoft/vscode/tree/1.80.0/extensions/docker

function tokenColors(syntax) {
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p3 = syntax.plain[3]

  return {
    "comment.line.number-sign.dockerfile": p0,
    "keyword.control.dockerfile": p1,
    "keyword.operator.dockerfile": p1,
    "keyword.other.special-method.dockerfile": p1,
    "source.dockerfile": p3,
    "string.quoted.double.dockerfile": p3,
    "string.quoted.single.dockerfile": p3
  }
}

export { tokenColors }
