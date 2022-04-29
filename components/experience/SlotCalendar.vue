<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          color="primary"
          :weekdays="weekdays"
          type="week"
          :events="events"
          :event-color="default_color"
          :event-ripple="false"
          @mousedown:event="startDrag"
          @mousedown:time="startTime"
          @mousemove:time="mouseMove"
          @mouseup:time="endDrag"
          @mouseleave.native="cancelDrag"
        >
          <template #event="{ event, timed, eventSummary }">
            <div class="v-event-draggable" v-html="eventSummary()"></div>
            <div
              v-if="timed"
              class="v-event-drag-bottom"
              @mousedown.stop="extendBottom(event)"
            ></div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import experienceSlotMutation from '@/graphql/mutations/ExperienceSlot'
import guideExperienceSlotMutation from '@/graphql/mutations/guideExperienceSlot'
import guideQuery from '@/graphql/queries/guide'

export default {
  props: ['guide'],
  data: () => ({
    value: '',
    default_color: '#673AB7',
    weekdays: [1, 2, 3, 4, 5, 6, 0],
    events: [],
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null,
  }),
  watch: {
    events() {},
  },
  mounted() {
    console.log(this.guide)
  },
  methods: {
    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event
        this.dragTime = null
        this.extendOriginal = null
      }
    },
    startTime(tms) {
      const mouse = this.toTime(tms)

      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start

        this.dragTime = mouse - start
      } else {
        this.createStart = this.roundTime(mouse)
        this.createEvent = {
          name: `Event #${this.events.length}`,
          start: this.createStart,
          end: this.createStart,
          timed: true,
        }

        this.events.push(this.createEvent)
        this.createApiSlot()
      }
    },
    extendBottom(event) {
      this.createEvent = event
      this.createStart = event.start
      this.extendOriginal = event.end
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms)

      if (this.dragEvent && this.dragTime !== null) {
        const start = this.dragEvent.start
        const end = this.dragEvent.end
        const duration = end - start
        const newStartTime = mouse - this.dragTime
        const newStart = this.roundTime(newStartTime)
        const newEnd = newStart + duration

        this.dragEvent.start = newStart
        this.dragEvent.end = newEnd
      } else if (this.createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false)
        const min = Math.min(mouseRounded, this.createStart)
        const max = Math.max(mouseRounded, this.createStart)

        this.createEvent.start = min
        this.createEvent.end = max
      }
    },
    updateEvents(slots) {
      this.events = slots.map((f) => {
        const x = f.attributes
        const s = new Date(x.start).getTime()
        const e = new Date(x.end).getTime()
        return {
          start: s,
          end: e,
          timed: true,
          name: 'tmp',
        }
      })
    },
    async linkToGuide() {
      await this.$apollo.mutate({
        mutation: guideExperienceSlotMutation,
        variables: {
          id: this.guide.data.id,
          input: {
            experience_slots: slots,
          },
        },
      })
      const guide = await this.$apollo.query({
        query: guideQuery,
        variables: {
          id: this.guide.data.id.toString(),
        },
      })
      this.updateEvents(guide.data.guide.data.attributes.experience_slots)
    },
    async createApiSlot() {
      const slots = await Promise.all(
        this.events.map(async (event) => {
          const start = new Date(event.start).toISOString()
          const end = new Date(event.end).toISOString()

          const result = await this.$apollo.mutate({
            mutation: experienceSlotMutation,
            variables: {
              input: {
                start,
                end,
              },
            },
          })
          return result.data.createExperienceSlot.data.id.toString()
        })
      )
      this.linkToGuide(slots)
    },
    endDrag() {
      this.dragTime = null
      this.dragEvent = null
      this.createEvent = null
      this.createStart = null
      this.extendOriginal = null
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal
        } else {
          const i = this.events.indexOf(this.createEvent)
          if (i !== -1) {
            this.events.splice(i, 1)
          }
        }
      }

      this.createEvent = null
      this.createStart = null
      this.dragTime = null
      this.dragEvent = null
    },
    roundTime(time, down = true) {
      const roundTo = 15 // minutes
      const roundDownTime = roundTo * 60 * 1000

      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime))
    },
    toTime(tms) {
      return new Date(
        tms.year,
        tms.month - 1,
        tms.day,
        tms.hour,
        tms.minute
      ).getTime()
    },
  },
}
</script>
