const article = document.querySelector('article');
// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  //the list of the words that are found in the article
  var triggerWords = ['not', 'sure', 'where', 'to'];

  var matchList = [];
  const text = article.textContent;

  //Search for every word in our trigger list in the article content
  triggerWords.forEach((element) => {
    if (text.includes(element)) {
      //add it to our matchList
      matchList.push(element);
      console.log(`We found "${element}"`);
    }
  });

  // count how many matches we got
  const matchCount = matchList.length;

  //Starting to create the little thingy that is gonna display our information
  const badge = document.createElement('p');

  // Use the same styling as the publish information in an article's header
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ ${matchCount} matches found`;

  // Support for API reference docs
  const heading = article.querySelector('h1');
  // Support for article docs with date
  const date = article.querySelector('time')?.parentNode;

  (date ?? heading).insertAdjacentElement('afterend', badge);
}
