// const linkToGuide = async() => {
//       await this.$apollo.mutate({
//         mutation: guideExperienceSlotMutation,
//         variables: {
//           id: this.guide.data.id,
//           input: {
//             experience_slots: slots,
//           },
//         },
//       })
//       const guide = await this.$apollo.query({
//         query: guideQuery,
//         variables: {
//           id: this.guide.data.id.toString(),
//         },
//       })
//       this.updateEvents(guide.data.guide.data.attributes.experience_slots)
//     },const toTime = (tms) => {
//       return new Date(
//         tms.year,
//         tms.month - 1,
//         tms.day,
//         tms.hour,
//         tms.minute
//       ).getTime()
//     }
// const mouseMove = (tms, dragEvent) => {
//   const mouse = toTime(tms)

//   if (dragEvent && this.dragTime !== null) {
//     const start = dragEvent.start
//     const end = dragEvent.end
//     const duration = end - start
//     const newStartTime = mouse - this.dragTime
//     const newStart = this.roundTime(newStartTime)
//     const newEnd = newStart + duration

//     this.dragEvent.start = newStart
//     this.dragEvent.end = newEnd
//   } else if (this.createEvent && this.createStart !== null) {
//     const mouseRounded = this.roundTime(mouse, false)
//     const min = Math.min(mouseRounded, this.createStart)
//     const max = Math.max(mouseRounded, this.createStart)

//     this.createEvent.start = min
//     this.createEvent.end = max
//   }
// }
// export default mouseMove
