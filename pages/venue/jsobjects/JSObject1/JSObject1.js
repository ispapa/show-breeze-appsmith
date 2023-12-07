export default {
	createOrUpdateVenue () {
		if (VenueTable.selectedRow.venueId != null) {
			// There is an existing venueId So PUT to update
			put_form_venues.run()
		} else {
			// There is no venueId so POST to add
			post_form_venue.run()
		}
	},
}