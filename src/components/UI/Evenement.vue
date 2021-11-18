<template>
	<div class="ui red segment">
		<FullCalendar :options='calendarOptions' class='demo-app-calendar'>
			<template v-slot:eventContent='arg'>
				<b>{{ arg.timeText }}</b>
				<i>{{ arg.event.title }}</i>
			</template>
		</FullCalendar>
	</div>
</template>

<script>
	import FullCalendar from '@fullcalendar/vue'
	import dayGridPlugin from '@fullcalendar/daygrid'
	import timeGridPlugin from '@fullcalendar/timegrid'
	import interactionPlugin from '@fullcalendar/interaction'

	export default {
		components: {FullCalendar},
		data: function () {
			const date = new Date().toISOString().replace(/T.*$/, '');
			const INITIAL_EVENTS = [
				{
					id: '01',
					title: 'All-day event',
					start: date
				},
				{
					id: '02',
					title: 'Timed event',
					start: date + 'T12:00:00'
				}
			]
			return {
				calendarOptions: {
					plugins: [
						dayGridPlugin,
						timeGridPlugin,
						interactionPlugin // needed for dateClick
					],
					headerToolbar: {
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay'
					},
					initialView: 'dayGridMonth',
					initialEvents: INITIAL_EVENTS,
					editable: false,
					selectable: false,
					selectMirror: false,
					dayMaxEvents: true
				},
				currentEvents: []
			}
		},
		methods: {
			handleWeekendsToggle() {
				this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
			},
			handleDateSelect(selectInfo) {
				let title = prompt('Please enter a new title for your event')
				let calendarApi = selectInfo.view.calendar
				calendarApi.unselect() // clear date selection
				if (title) {
					calendarApi.addEvent({
						id: "",
						title,
						start: selectInfo.startStr,
						end: selectInfo.endStr,
						allDay: selectInfo.allDay
					})
				}
			},
			handleEventClick(clickInfo) {
				if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
					clickInfo.event.remove()
				}
			},
			handleEvents(events) {
				this.currentEvents = events
			}
		}
	}
</script>

<style scoped>
	.fc { /* the calendar root */
		max-width: 1100px;
		max-height: 80vh;
	}
</style>
