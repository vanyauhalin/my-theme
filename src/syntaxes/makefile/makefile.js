// https://github.com/microsoft/vscode/blob/1.80.0/extensions/make/syntaxes/make.tmLanguage.json

function tokenColors(syntax) {
  const a0 = syntax.action[0]
  const p0 = syntax.plain[0]
  const p1 = syntax.plain[1]
  const p2 = syntax.plain[2]
  const p3 = syntax.plain[3]

  return {
    "comment.line.number-sign.makefile": p0,
    "constant.character.escape.continuation.makefile": p2,
    "constant.other.placeholder.makefile": p2,
    "entity.name.function.target.makefile": a0,
    "keyword.control.-.makefile": p1,
    "keyword.control.@.makefile": p1,
    "keyword.control.+.makefile": p1,
    "keyword.control.define.makefile": p1,
    "keyword.control.else.makefile": p1,
    "keyword.control.export.makefile": p1,
    "keyword.control.ifdef.makefile": p1,
    "keyword.control.ifeq.makefile": p1,
    "keyword.control.ifndef.makefile": p1,
    "keyword.control.ifneq.makefile": p1,
    "keyword.control.include.makefile": p1,
    "keyword.control.override.makefile": p1,
    "keyword.control.private.makefile": p1,
    "keyword.control.undefine.makefile": p1,
    "keyword.control.unexport.makefile": p1,
    "keyword.control.vpath.makefile": p1,
    "punctuation.definition.variable.makefile": p1,
    "punctuation.separator.delimeter.comma.makefile": p1,
    "punctuation.separator.key-value.makefile": p1,
    "source.makefile": p3,
    "support.function.abspath.makefile": p3,
    "support.function.addprefix.makefile": p3,
    "support.function.addsuffix.makefile": p3,
    "support.function.and.makefile": p3,
    "support.function.basename.makefile": p3,
    "support.function.call.makefile": p3,
    "support.function.dir.makefile": p3,
    "support.function.error.makefile": p3,
    "support.function.eval.makefile": p3,
    "support.function.file.makefile": p3,
    "support.function.filter-out.makefile": p3,
    "support.function.filter.makefile": p3,
    "support.function.findstring.makefile": p3,
    "support.function.firstword.makefile": p3,
    "support.function.flavor.makefile": p3,
    "support.function.foreach.makefile": p3,
    "support.function.guile.makefile": p3,
    "support.function.if.makefile": p3,
    "support.function.info.makefile": p3,
    "support.function.join.makefile": p3,
    "support.function.lastword.makefile": p3,
    "support.function.notdir.makefile": p3,
    "support.function.or.makefile": p3,
    "support.function.origin.makefile": p3,
    "support.function.patsubst.makefile": p3,
    "support.function.realpath.makefile": p3,
    "support.function.shell.makefile": p3,
    "support.function.sort.makefile": p3,
    "support.function.strip.makefile": p3,
    "support.function.subst.makefile": p3,
    "support.function.suffix.makefile": p3,
    "support.function.target.DEFAULT.makefile": p1,
    "support.function.target.DELETE_ON_ERROR.makefile": p1,
    "support.function.target.EXPORT_ALL_VARIABLES.makefile": p1,
    "support.function.target.IGNORE.makefile": p1,
    "support.function.target.INTERMEDIATE.makefile": p1,
    "support.function.target.LOW_RESOLUTION_TIME.makefile": p1,
    "support.function.target.NOTPARALLEL.makefile": p1,
    "support.function.target.ONESHELL.makefile": p1,
    "support.function.target.PHONY.makefile": p1,
    "support.function.target.POSIX.makefile": p1,
    "support.function.target.PRECIOUS.makefile": p1,
    "support.function.target.SECONDARY.makefile": p1,
    "support.function.target.SECONDEXPANSION.makefile": p1,
    "support.function.target.SILENT.makefile": p1,
    "support.function.target.SUFFIXES.makefile": p1,
    "support.function.value.makefile": p3,
    "support.function.warning.makefile": p3,
    "support.function.wildcard.makefile": p3,
    "support.function.word.makefile": p3,
    "support.function.wordlist.makefile": p3,
    "variable.language.makefile": p3,
    "variable.other.makefile": p3
  }
}

function semanticTokenColors() {
  return {}
}

export { tokenColors, semanticTokenColors }
