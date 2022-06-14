const map = (guide) => {
  const att = guide.data.attributes
  const { experience, experienceSlots } = att
  return {
    id: guide.data.id,
    experience,
    experienceSlots,
    ...att.user.data.attributes,
  }
}

export default {
  map,
}
