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
        {{  }}
        <experience-slot-calendar-item
          v-if="selectedEvent && selectedOpen"
          :experiences="getExperiencesTitle()"
          :selected-element="selectedElement"
          :selected-event="selectedEvent"
          :open="selectedOpen"
          @delete="update"
          >
        </experience-slot-calendar-item>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import experienceSlotMutation from '@/graphql/mutations/ExperienceSlot'
import createGuideExperienceSlot from '@/graphql/mutations/guideExperienceSlot'
import updateExperienceSlot from '@/graphql/mutations/UpdateExperienceSlot'
import guideQuery from '@/graphql/queries/guide'

export default {
  props: ['guide'],
  apollo: {
    guideProfile: {
      query: guideQuery,
      variables() {
        return {
          id: this.guide?.data.id.toString()
        }
      },
      update(data) {
        const posts = data?.guide.data.attributes.experience_slots.data
        this.updateEvents(posts)
        return data
      }
    }
  },
  data: () => ({
    value: '',
    default_color: '#673AB7',
    weekdays: [1, 2, 3, 4, 5, 6, 0],
    events: [],
    guideProfile: null,
    selectedOpen: false,
    selectedEvent: null,
    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null,
  }),
  methods: {
    getExperiencesTitle() {
      const experiences = this.guideProfile.guide.data.attributes.experiences.data
      return experiences.map(x => x.attributes?.title)
    },
    update () {
      const index = this.events.indexOf(this.selectedEvent);
      if (index > -1) {
        this.events.splice(index, 1);
      }
    },
    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event
        this.dragTime = null
        this.extendOriginal = null
      }
    },
    async startTime(tms) {
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

        this.createEvent.id = await this.createApiSlot(this.createEvent)
        this.events.push(this.createEvent)
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
        // console.log(this.createEvent)
        this.updateEvent(this.createEvent)
      }
    },
    updateEvents(slots) {
      if (!slots)
        return
      this.events = slots.map((f) => {
        const x = f.attributes
        const s = new Date(x.start).getTime()
        const e = new Date(x.end).getTime()
        return {
          id: f.id,
          start: s,
          end: e,
          timed: true,
          name: 'tmp',
        }
      })
    },
    async getGuide() {
      return await this.$apollo.query({
        query: guideQuery,
        variables: {
          id: this.guide.data.id.toString(),
        },
      })
    },
    async linkToGuide(slotId) {
      const currentSlots = (await this.getGuide())
        .data.guide.data.attributes.experience_slots.data.map(x => x?.id)
      currentSlots.push(slotId)
      await this.$apollo.mutate({
        mutation: createGuideExperienceSlot,
        variables: {
          id: this.guide.data.id,
          input: {
            experience_slots: currentSlots,
          },
        },
      })
    },
    async createApiSlot(event) {
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
      const id = result.data.createExperienceSlot.data.id
      this.linkToGuide(id)
      return id
    },
    async updateEvent(event) {
      if (!event.id) return ;

      const start = new Date(event.start).toISOString()
      const end = new Date(event.end).toISOString()
      await this.$apollo.mutate({
        mutation: updateExperienceSlot,
        variables: {
          id: event.id.toString(),
          input: {
            start,
            end
          },
        },
      })
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true)))
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
