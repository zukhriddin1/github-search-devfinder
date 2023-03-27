var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

let seaEl = document.querySelector("#qidir");
let bioEl = document.querySelector("#bioz");
let creatEl = document.querySelector("#creat");
let imagezEl = document.querySelector("#imagez");
let folovzEl = document.querySelector("#folovz");
let folovingEl = document.querySelector("#folovingz");
let reposEl = document.querySelector("#reposz");
let locationEl = document.querySelector("#locationz");
let twitterEl = document.querySelector("#twitterz");
let htmlzEl = document.querySelector("#htmlz");

let inputEl = document.querySelector("#inputval");

async function getTodo() {
  const init = inputEl.value;
  try {
    const res = await fetch(`https://api.github.com/users/${init}`);
    const date = await res.json();
    bioEl.textContent = date.bio || "Bio not found";
    creatEl.textContent = date.created_at || "Creat not found";
    imagezEl.src = date.avatar_url || "Avatar not found";
    folovzEl.textContent = date.followers || "Not found";
    folovingEl.textContent = date.following || "Not found";
    reposEl.textContent = date.repos || "Not found";
    locationEl.textContent = date.location || "Not found";
    twitterEl.textContent = date.twitter || "Not found";
    htmlzEl.textContent = date.html_url || "Not found";
  } catch (error) {
    console.log(error);
  }
}

seaEl.addEventListener("click", (e) => {
  e.preventDefault();

  getTodo();
  inputEl.value = "";
});

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    themeToggleDarkIcon.classList.add("hidden");
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    themeToggleDarkIcon.classList.remove("hidden");
    themeToggleLightIcon.classList.add("hidden");
  }
}

var savedTheme = localStorage.getItem("color-theme");

if (
  savedTheme === "dark" ||
  (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  applyTheme("dark");
} else {
  applyTheme("light");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  var newTheme = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";

  applyTheme(newTheme);
  localStorage.setItem("color-theme", newTheme);
});
