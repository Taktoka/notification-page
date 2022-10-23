let count = document.getElementById("count");
mark = document.getElementById("mark");
members = document.querySelectorAll(".member");
points = document.querySelectorAll(".info .point");
active = document.querySelectorAll(".member.active");

mark.onclick = () => {
  count.innerHTML = "0";
  members.forEach((member) => {
    member.classList.remove("active");
    points.forEach((point) => {
      point.style.display = "none";
    });
  });
};

for (let i = 0; i < active.length; i++) {
  members[i].onclick = () => {
    members[i].classList.remove("active");
    points[i].style.display = "none";
    count.innerHTML--;
    count.innerHTML === "0" ? (count = 0) : "";
  };
}
