function skillsMember() {
  var skills = document.getElementById("skills");
  var member = document.getElementById("member");
  var skillsMember = document.getElementById("skillsMember");
  var memberMember = document.getElementById("memberMember");

  if (skills.checked == true) {
    skillsMember.style.display = "block";
    memberMember.style.display = "none";
  } else {
    skillsMember.style.display = "none";
    memberMember.style.display = "block";
  }
}
