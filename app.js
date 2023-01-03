const blogPosts = [
  {
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.'
  },
  {
    title: 'My Second Blog Post',
    content: 'This is the content of my second blog post.'
  }
];

let currentPage = 0;
const postsPerPage = 2;

function renderBlogPost(blogPost) {
  const blogPostElement = document.createElement('div');
  blogPostElement.classList.add('blog-post');

  const titleElement = document.createElement('h1');
  titleElement.innerText = blogPost.title;

  const contentElement = document.createElement('p');
  contentElement.innerText = blogPost.content;

  blogPostElement.appendChild(titleElement);
  blogPostElement.appendChild(contentElement);

  return blogPostElement;
}

function renderBlogPosts(page) {
  const startIndex = page * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const blogPostsElement = document.getElementById('blog-posts');
  blogPostsElement.innerHTML = ''; // Clear previous posts

  for (let i = startIndex; i < endIndex; i++) {
    if (i >= blogPosts.length) {
      break;
    }

    const blogPostElement = renderBlogPost(blogPosts[i]);
    blogPostsElement.appendChild(blogPostElement);
  }
}

function updateNavigationButtons() {
  const prevPageButton = document.getElementById('prev-page-button');
  const nextPageButton = document.getElementById('next-page-button');

  prevPageButton.disabled = currentPage === 0;
  nextPageButton.disabled = currentPage === Math.ceil(blogPosts.length / postsPerPage) - 1;
}

function onPrevPageButtonClick() {
  currentPage--;
  renderBlogPosts(currentPage);
  updateNavigationButtons();
}

function onNextPageButtonClick() {
  currentPage++;
  renderBlogPosts(currentPage);
  updateNavigationButtons();
}

document.getElementById('prev-page-button').addEventListener('click', onPrevPageButtonClick);
document.getElementById('next-page-button').addEventListener('click', onNextPageButtonClick);

renderBlogPosts(currentPage);
updateNavigationButtons();

function onAddPostButtonClick() {
  const title = prompt('Enter the title of the new blog post:');
  const content = prompt('Enter the content of the new blog post:');

  if (title && content) {
    blogPosts.unshift({ title, content });
    renderBlogPosts(currentPage);
    updateNavigationButtons();
  }
}

document.getElementById('prev-page-button').addEventListener('click', onPrevPageButtonClick);
document.getElementById('next-page-button').addEventListener('click', onNextPageButtonClick);
document.getElementById('add-post-button').addEventListener('click', onAddPostButtonClick);

renderBlogPosts(currentPage);
updateNavigationButtons();


