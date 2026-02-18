function showAddNew() { 
  const addForm = document.getElementById("newContent"); 
  if (addForm.style.display === "block") {
    addForm.style.display = "none";
  } 
  else {
    addForm.style.display = "block";
  }
}

function showFilter() {
  const filter = document.getElementById("filterContent");
  if (filter.style.display === "block") {
    filter.style.display = "none";
    } 
  else {
    filter.style.display = "block";
  }
}
