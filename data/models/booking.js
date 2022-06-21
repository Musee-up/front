const getAttributes = (item) => item.data.attributes

const getExperience = (booking) => {
  return booking.experience.data.attributes
}

export { getAttributes, getExperience }
