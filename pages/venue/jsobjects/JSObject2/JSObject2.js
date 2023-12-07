export default {
	selectOrNot () {
		if (VenueTable.selectedRow.name != "") {
			return "(Selected " + VenueTable.selectedRow.name + " Venue)"
		}
		return ""
	},
	putVenue () {
		if (VenueTable.selectedRow.name != "") {
			put_form_venues.run()
		}
		return 
	},
	postVenue () {
		post_form_venue.run()
		return 
	}
}

