function enrollStudent() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Get skills
    const skills = [];
    if (document.getElementById('java').checked) skills.push('Java');
    if (document.getElementById('html').checked) skills.push('HTML');
    if (document.getElementById('css').checked) skills.push('CSS');

    // Image upload
    const imageFile = document.getElementById('imageUpload').files[0];
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : 'default.jpg'; // Use default image if not uploaded

    // Validate form
    if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create student card
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');
    studentDiv.innerHTML = `
        <div class="hello">
        <img src="${imageUrl}" alt="${name}">
        <div>
            <p><strong>${name}</strong></p>
            <p>Gender: ${gender}</p>
            <p>Email: ${email}</p>
            <p>Website: <a href="${website}" target="_blank">${website}</a></p>
            <p>Skills: ${skills.join(', ')}</p>
            </div>
        </div>
    `;

    // Append to enrolled students
    document.getElementById('enrolledStudents').appendChild(studentDiv);

    // Clear form after submission
    document.getElementById('enrollmentForm').reset();
}
