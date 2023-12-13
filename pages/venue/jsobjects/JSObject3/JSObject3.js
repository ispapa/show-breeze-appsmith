export default {
	deleteVenue () {
		if (VenueTable.selectedRow != null) {
			delete_selected_venue.run()
			return "Removed " + VenueTable.selectedRow.name
		} else {
			return "Nothing is Selected"
		}
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