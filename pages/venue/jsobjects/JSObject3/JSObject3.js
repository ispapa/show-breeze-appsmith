export default {
	deleteVenue () {
		if (VenueTable.selectedRow != null) {
			delete_selected_venue.run()
			return "Removed " + VenueTable.selectedRow.name
		} else {
			return "Nothing is Selected"
		}
	},
}