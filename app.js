// console.log("dark mode");
const btn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  ChangeText();
});

const ChangeText = () => {
  if (document.documentElement.classList.contains("dark-theme")) {
    btn.textContent = `light mode`;
    //in order to save in local:
    localStorage.setItem("mode", "dark");
  } else {
    btn.textContent = `dark mode`;
    //in order to save in local:
    localStorage.setItem("mode", "light");
  }
};

//save local:
if (localStorage.getItem("mode") == "dark") {
  document.documentElement.classList.add("dark-theme");
  ChangeText();
}
if (localStorage.getItem("mode") == "light") {
  document.documentElement.classList.remove("dark-theme");
  ChangeText();
}

//articles is difined in data.js
const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    //date with the library :
    const formatDate = moment(date).format("MMM Do, YYYY");

    return ` <!-- single post -->
        <article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
       ${snippet}
          </p>
        </article>
        <!-- end of single post -->`;
  })
  .join("");

articlesContainer.innerHTML = articlesData;
