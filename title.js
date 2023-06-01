window.onload = async function () {
  const titlesData = await fetchTitleData();
  createColumn(titlesData.page_urls);
};

async function fetchTitleData() {
  const urlParams = new URLSearchParams(window.location.search);
  const response = await fetch(
    'http://localhost:8080/viewer?title_id='+urlParams.get('title_id')
  );
  return await response.json();
}

function createColumn(titles) {
  const imgListDiv = document.getElementById('col-inner');
  titles.forEach((page_url, index) => {
    const pageImage = document.createElement('img');
    pageImage.classList.add('img-fluid', 'mb-3');
    pageImage.src = page_url

    imgListDiv.appendChild(pageImage);
  });
}
