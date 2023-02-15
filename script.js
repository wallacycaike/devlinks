function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const avatarPefil = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    avatarPefil.setAttribute("src", "assets/avatar-light.png")
  } else {
    avatarPefil.setAttribute("src", "assets/avatar.png")
  }
}
