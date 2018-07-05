
const hidePaywalledStories = () => {
  if (window.location.href.indexOf('medium') === -1) {
    alert('Oops, you are on the wrong site. You need to be on Medium to do this.');
    return;
  }

  //the paywall star: .svgIcon--star

  //iterate through all of the elements, go down the DOM, find those with the child element of .svgIcon--star, and hide all of those
  const largeArticles = document.getElementsByClassName('extremeHero-post');

  for (const article of largeArticles) {
    console.log('article:', article);
  }

  const smallArticles = document.getElementsByClassName('extremePostPreview')

  for (const article of smallArticles) {
    console.log('article:', article);
  }

}

hidePaywalledStories();
