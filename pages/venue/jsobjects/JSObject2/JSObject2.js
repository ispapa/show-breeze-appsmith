export default {
	selectVenueOrNot () {
		if (VenueTable.selectedRow.name != "") {
			return "(Selected " + VenueTable.selectedRow.name + " Venue)"
		}
		return ""
	},
	selectedUserOrNot() {
		if (UserTable.selectedRow.firstName != "") {
			return "(Selected " + UserTable.selectedRow.firstName + ", UserId: " + UserTable.selectedRow.userId + " )"
		}
		return "(Must Select User Below)"
	},
	tableSelectVenueOrNot() {
		if (UserTable.selectedRow.firstName != "") {
			return "(Selected " + UserTable.selectedRow.firstName + ", UserId: " + UserTable.selectedRow.userId + " )"
		}
		return "(Shows all Venues for demo, Please Select User)"
	},
}

