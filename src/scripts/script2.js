fetch("http://localhost:3000/api/getAll")
	.then((response) => response.json())
	.then((data) => {
		const userTable = document.getElementById("userTable");
		const tbody = userTable.querySelector("tbody");

		// Loop through the data and create a row for each user
		data.forEach((user) => {
			const row = document.createElement("tr");
			row.innerHTML = `
                        <td>${user._id}</td>
                        <td><a href="screen1.html">${user.firstname}</a></td>
                        <td>${user.lastname}</td>
                        <td><button onclick="deleteUser(${user._id})">Delete</button></td>
                    `;
			tbody.appendChild(row);
		});
	})
	.catch((error) => {
		console.error("Error:", error);
	});

function deleteUser(userId) {
	fetch(`http://localhost:3000/api/delete/${userId}`, {
		method: "DELETE",
	})
		.then((response) => {
			if (response.ok) {
				// User was deleted successfully
				// You can remove the row from the table or update the table
				const tableRow = document.querySelector(`tr[data-userid="${userId}"]`);
				if (tableRow) {
					tableRow.remove();
				}
				alert("Removed user succesfully");
			} else {
				// Handle errors or display a message if user deletion fails
				console.error("Error:", response.statusText);
			}
		})
		.catch((error) => {
			// Handle any network errors
			console.error("Network error:", error);
		});
}
