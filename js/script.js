document.addEventListener("DOMContentLoaded", () => {
  const hiddenPosts = document.querySelectorAll(".col-lg-6.hidden"); // Updated selector to match the HTML
  const loadMoreButton = document.getElementById("load-more");

  let currentIndex = 0;
  const postsPerPage = 2;

  const showMorePosts = () => {
    const endIndex = currentIndex + postsPerPage;
    for (let i = currentIndex; i < endIndex && i < hiddenPosts.length; i++) {
      hiddenPosts[i].classList.remove("hidden");
    }
    currentIndex = endIndex;

    // Hide button if all posts are visible
    if (currentIndex >= hiddenPosts.length) {
      loadMoreButton.style.display = "none";
    }
  };

  loadMoreButton.addEventListener("click", showMorePosts);
});
