const flattenList = (obj: any) => ({
  id: obj?.id,
  ...obj?.attributes,
})

const flatten = (obj: any) => {
  if (!obj) return undefined
  const d = obj.data
  return {
    id: d?.id,
    ...d?.attributes,
  }
}
export { flatten, flattenList }
