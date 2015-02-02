document.getElementById('menuslider').addEventListener("click", function () {
	"use strict";
	var slider = document.getElementById('slider'), i = 0;
	(function animate() {
		slider.style.width = i + "%";
		if (i < 20) {
			setTimeout(animate, 5);
		}
		i = i + 1;
	}());
	document.addEventListener("click", function (e) {
		if (e.pageX > window.innerWidth * 0.2) {
			(function animate() {
				slider.style.width = i + "%";
				if (i > 0) {
					setTimeout(animate, 5);
				}
				i = i - 1;
			}());
		}
	});
});
document.getElementById("projects").addEventListener("click", function menuopen() {
    "use strict";
    var projectlist = document.getElementById("projectlist"), i;
    if (projectlist.style.display === "block") {
        projectlist.style.height = "0";
        projectlist.style.display = "none";
    } else {
        projectlist.style.height = "auto";
        projectlist.style.display = "block";
    }
});
function addSelectedClass(element) {
    "use strict";
    if (element.className !== undefined) {
        element.className = element.className.replace("selected_white", "");
        element.className = element.className + " selected_white";
    } else {
        element.className += "selected_white";
    }
}
function removeSelectedClass(element) {
    "use strict";
    element.className = element.className.replace("selected_white", "");
    window.console.log(element.className);
}
document.getElementById("project1").addEventListener("click", function () {
    "use strict";
    addSelectedClass(document.getElementById("project1"));
    removeSelectedClass(document.getElementById("project2"));
    removeSelectedClass(document.getElementById("project3"));
});
document.getElementById("project2").addEventListener("click", function () {
    "use strict";
    addSelectedClass(document.getElementById("project2"));
    removeSelectedClass(document.getElementById("project1"));
    removeSelectedClass(document.getElementById("project3"));
});
document.getElementById("project3").addEventListener("click", function () {
    "use strict";
    addSelectedClass(document.getElementById("project3"));
    removeSelectedClass(document.getElementById("project2"));
    removeSelectedClass(document.getElementById("project1"));
});

