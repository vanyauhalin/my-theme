function port(scopes, ...to) {
  const port = {}
  to.forEach((extension) => {
    Object.entries(scopes).forEach(([scope, object]) => {
      const ported = scope.replace(/\.\w+(\s|$)/g, `${extension}$1`)
      port[ported] = object
    })
  })
  return port
}

export { port }
