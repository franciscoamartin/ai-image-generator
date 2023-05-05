const fetchSuggestionFromChatGPT = () =>
  fetch("/api/suggestion", {
    cache: "no-store",
  }).then((resp) => resp.json());

export default fetchSuggestionFromChatGPT;
