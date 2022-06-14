<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          class="rounded-xl"
          color="primary"
          :weekdays="weekdays"
          type="week"
          :events="events"
          :event-color="default_color"
          :event-ripple="false"
          @click:event="showEvent"
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
        <experience-calendar-slot-item
          v-if="selectedEvent && selectedOpen"
          :selected-element="selectedElement"
          :selected-event="selectedEvent"
          :open="selectedOpen"
          @remove="remove"
          @update="update"
        >
        </experience-calendar-slot-item>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import createSlot from '@/graphql/mutations/createExperienceSlot'
import updateSlot from '@/graphql/mutations/updateExperienceSlot'

export default {
  props: [],
  data: () => ({
    value: '',
    default_color: '#673AB7',
    weekdays: [1, 2, 3, 4, 5, 6, 0],
    events: [],
    selectedOpen: false,
    selectedEvent: null,
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null,
  }),
  computed: {
    ...mapState(['guide']),
    ...mapGetters({
      slots: 'guide/getExperiencesSlot',
    }),
  },
  watch: {
    slots() {
      this.updateEvents(this.slots)
    },
  },
  mounted() {
    this.updateEvents(this.slots)
  },
  methods: {
    update(att) {
      const i = this.events.indexOf(this.selectedEvent)
      this.selectedEvent.name = att.title
      this.events.splice(i, this.selectedEvent)
    },
    remove() {
      const index = this.events.indexOf(this.selectedEvent)
      if (index > -1) {
        this.events.splice(index, 1)
      }
    },
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
        this.dragTime = mouse - this.dragEvent.start
      } else {
        this.createStart = this.roundTime(mouse)
        this.createEvent = {
          name: `Event #${this.events.length}`,
          start: this.createStart,
          end: this.createStart,
          timed: true,
        }

        if (!this.createEvent) return
        try {
          console.log(this.createEvent)
          this.createEvent.id = this.createApiSlot(this.createEvent)
          this.events.push(this.createEvent)
        } catch (e) {
          console.log(e)
        }
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
      if (!slots) return

      this.events = slots.map((f) => {
        const x = f.attributes
        const s = new Date(x.start).getTime()
        const e = new Date(x.end).getTime()
        const name = x.experience.data?.attributes.title || 'Non défini'
        return {
          id: f.id,
          start: s,
          end: e,
          timed: true,
          name,
        }
      })
    },
    createApiSlot(event) {
      const start = new Date(event.start).toISOString()
      const end = new Date(event.end).toISOString()

      return this.$apollo
        .mutate({
          mutation: createSlot,
          variables: {
            input: {
              guide: this.guide.guide.id.toString(),
              start,
              end,
            },
          },
        })
        .then((result) => result.data.createExperienceSlot.data.id)
        .catch((e) => {
          console.log('create Slot')
          console.log(e)
        })
    },
    updateEvent(event) {
      if (!event.id) return

      const start = new Date(event.start).toISOString()
      const end = new Date(event.end).toISOString()
      this.$apollo
        .mutate({
          mutation: updateSlot,
          variables: {
            id: event.id.toString(),
            input: {
              start,
              end,
            },
          },
        })
        .catch((e) => {
          console.log('updateEvent')
          console.log(e)
        })
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        )
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    endDrag() {
      if (this.createEvent) this.updateEvent(this.createEvent)
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
      const roundTo = 15
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

<style scoped lang="scss">
.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
  -webkit-user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: '';
  }

  &:hover::after {
    display: block;
  }
}
</style>
