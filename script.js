let urls = [
    "https://www.ultimahora.com/",
    "https://www.abc.com.py/",
    "https://www.lanacion.com.py/"
  ];
  let currentPageIndex = 0;
  
  const prevPageButton = document.getElementById("prevPage");
  const nextPageButton = document.getElementById("nextPage");
  const contentFrame = document.getElementById("contentFrame");
  
  function updateContent() {
    contentFrame.src = urls[currentPageIndex];
  }
  
  prevPageButton.addEventListener("click", () => {
    currentPageIndex = (currentPageIndex - 1 + urls.length) % urls.length;
    updateContent();
  });
  
  nextPageButton.addEventListener("click", () => {
    currentPageIndex = (currentPageIndex + 1) % urls.length;
    updateContent();
  });
  
  updateContent();
  