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

function filterArticles() { 
  const showOpinion = document.getElementById("opinionCheckbox").checked; 
  const showRecipe = document.getElementById("recipeCheckbox").checked;
  const showUpdate = document.getElementById("updateCheckbox").checked;
  const articles = document.getElementsByClassName("article");
  for (let i = 0; i < articles.length; i++) {
    const a = articles[i]; 
    
    if (a.classList.contains("opinion") && !showOpinion) {
      a.style.display = "none";
    }
      
    else if (a.classList.contains("recipe") && !showRecipe) {
      a.style.display = "none";
    }
    else if (a.classList.contains("update") && !showUpdate) {
      a.style.display = "none";
    }
    else {
      a.style.display = "block"; 3
    }
  }
}


function addNewArticle() {
  const title = document.getElementById("inputHeader").value;
  const text = document.getElementById("inputArticle").value;
  let type = "";
  if (document.getElementById("opinionRadio").checked) {
    type = "opinion";
  }
  if (document.getElementById("recipeRadio").checked) {
    type = "recipe";
  }
  if (document.getElementById("lifeRadio").checked){
    type = "update";
  }
  const article = document.createElement("div");
  article.className = "article " + type;
  article.innerHTML = "<h3>" + title + "</h3>" + "<p class='typeLabel'>" + type.toUpperCase() + "</p>" + "<p>" + text + "</p>";
  document.getElementById("articleList").appendChild(article); 
}
