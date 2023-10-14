document
	.getElementById("createUserForm")
	.addEventListener("submit", function (e) {
		e.preventDefault();
		const jsonData = {};
		const formData = new FormData(this);
		formData.forEach((value, key) => {
			jsonData[key] = value;
		});

		// Send the user information to the backend using the fetch API
		fetch("http://localhost:3000/api/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(jsonData),
		})
			.then((response) => response.json())
			.then((data) => {
				alert(
					`User created successfully with id ${data._id} and name ${data.firstname}`
				);
				console.log(data);
			})
			.catch((error) => {
				alert(`Error in creating the user. Please try again`);
				console.error(error);
			});
	});

function showListOfUsers() {
	window.location.replace("http://localhost:3000/src/screen2.html");
}
