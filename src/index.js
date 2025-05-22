function displayShortStory(response) {
  new Typewriter("#short-story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursos: "",
  });
}

function generateShortStory(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "3f9ec00e23oc6a139aftba624cb575a1";
  let prompt = `User instructions: Generate a short-story about ${instructionsInput.value}`;
  let context =
    "You are a short-story writer that gets it's inspiration in sci-fi and surrealism. Your mission is to generate a really short-story, maximum 5 lines. Make sure to follow user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayShortStory);
}

let shortStoryElement = document.querySelector("#short-story-generator-form");
shortStoryElement.addEventListener("submit", generateShortStory);
