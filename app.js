const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const articleLinks = document.querySelectorAll('[data-link-target]');
const articleContent = document.querySelectorAll('[data-link-content]');

// Main content tabs...
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// Docs article links...
articleLinks.forEach(link => {
  link.addEventListener('click', () => {
    const articleTarget = document.querySelector(link.dataset.linkTarget)
    articleContent.forEach(article => {
      article.classList.remove('show-content');
    })
    articleLinks.forEach(link => {
      link.classList.remove('show-content');
    })
    link.classList.add('show-content');
    articleTarget.classList.add('show-content');
  })
});