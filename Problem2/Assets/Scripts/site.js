let posts = 0;
const words = new Map();

fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      posts = data;
      posts.map(sixWords);
      posts.map(freqMap);
      console.log(words);
    })
    .catch((error) => console.error("FETCH ERROR:", error));



function sixWords(post) {
    const title = post.title;

    if(title.split(' ').length > 6)
    {
        console.log(title);
    }
}

function freqMap(post) {
    const body = post.body;
    const wordArray = body.split(/\W+/);

    wordArray.forEach(word => {
        words.set(word, words.get(word) + 1 || 1);
    });
}

