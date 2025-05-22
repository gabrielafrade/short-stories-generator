function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#short-story", {
    strings:
      "There were only enough supplies for one of us to survive the winter. We were trapped, isolated in the wilderness at the edge of a harsh winter that would trap us here. Of course, I was the one who had planned it that way.",
    autoStart: true,
    delay: 1,
    cursos: "",
  });
}

let poemElement = document.querySelector("#poem-generator-form");
addEventListener("submit", generatePoem);
