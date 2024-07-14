
function openModal(courseName) {
    var modal = document.getElementById("courseModal");
    var modalContent = document.getElementById("modalContent");
    var courseDetails = getCourseDetails(courseName);

    modalContent.innerHTML = courseDetails;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("courseModal");
    modal.style.display = "none";
}

function getCourseDetails(courseName) {
    var details = '';

    if (courseName === 'English') {
        details = `
        <h2>${courseName}</h2>
        <img src="images/det.jpg">
        <p><b>Tutor: Ali Asghar</b></p>
        <p><b>Timings: Tuesday and Thursday, 5:00 PM - 7:00 PM</b></p>
        <p><b>(Course Content)</b></p>
            <b>Grammar and Syntax, Reading Comprehension, Writing Skills</b><br><br>
            <button>
            Pick Up Course
            </button>
    `;
    }

    else if (courseName === 'Urdu') {
        details = `
        <h2>${courseName}</h2>
        <img src="images/det.jpg">
        <p><b>Tutor: Waqas Siddique</b></p>
        <p><b>Timings: Monday and Tuesday, 2:00 PM - 5:00 PM</b></p>
        <p><b>(Course Content)</b></p>
            <b>Communication Skills, Novel Writing, Grammar and Translation</b><br><br>
            <button>
            Pick Up Course
            </button>
    `;
    }

    else if (courseName === 'Programming') {
        details = `
        <h2>${courseName}</h2>
        <img src="images/det.jpg">
        <p><b>Tutor: Jawad Mansoor</b></p>
        <p><b>Timings: Saturday and Sunday, 10:00 AM - 3:00 PM</b></p>
        <p><b>(Course Content)</b></p>
            <b>Multiple Languages, Real Life Applications, App and Web Development</b><br><br>
            <button>
            Pick Up Course
            </button>
    `;
    }

    else if (courseName === 'Maths') {
        details = `
        <h2>${courseName}</h2>
        <img src="images/det.jpg">
        <p><b>Tutor: Ahmed Shehzad</b></p>
        <p><b>Timings: Thursday and Friday, 5:00 PM - 8:00 PM</b></p>
        <p><b>(Course Content)</b></p>
            <b>Problem Solving, Calculus Applications, Real life Maths Uses</b><br><br>
            <button>
            Pick Up Course
            </button>
    `;
    }

    else if (courseName === 'Physics') {
        details = `
        <h2>${courseName}</h2>
        <img src="images/det.jpg">
        <p><b>Tutor: Nazim Rashid</b></p>
        <p><b>Timings: Monday and Sunday, 2:00 PM - 9:00 PM</b></p>
        <p><b>(Course Content)</b></p>
            <b>Motion Concepts, Calculations and Observations, Physics Applications</b><br><br>
            <button>
            Pick Up Course
            </button>
    `;
    }

    else if (courseName === 'Biology') {
        details = `
        <h2>${courseName}</h2>
        <img src="images/det.jpg">
        <p><b>Tutor: Javeria Akbar</b></p>
        <p><b>Timings: Monday , 10:00 PM - 2:00 PM</b></p>
        <p><b>(Course Content)</b></p>
            <b>Motion Cellular Information, Evolution Based Studies, Medical Uses</b><br><br>
            <button>
            Pick Up Course
            </button>
    `;
    }

    else if (courseName === 'Chemistry') {
        details = `
        <h2>${courseName}</h2>
        <img src="images/det.jpg">
        <p><b>Tutor: Nasir Haq</b></p>
        <p><b>Timings: Monday and Tuesday, 7:00 PM - 10:00 PM</b></p>
        <p><b>(Course Content)</b></p>
            <b>Balancing Equations, Titrations Experiments, Industries Uses</b><br><br>
            <button>
            Pick Up Course
            </button>
    `;
    }

    else if (courseName === 'History') {
        details = `
        <h2>${courseName}</h2>
        <img src="images/det.jpg">
        <p><b>Tutor: Shaffay Ahmed</b></p>
        <p><b>Timings: Sunday, 7:00 AM - 10:00 AM</b></p>
        <p><b>(Course Content)</b></p>
            <b>Relations of Countries, Ongoing Problems, Futuristic Developments</b><br><br>
            <button>
            Pick Up Course
            </button>
    `;
    }

    return details;
}