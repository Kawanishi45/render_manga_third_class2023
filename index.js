window.onload = async function () {
  const titlesData = await fetchTitlesData();
  createCarousel(titlesData.pick_up_titles);
  createRows(titlesData.normal_titles);
};

async function fetchTitlesData() {
  const response = await fetch('http://localhost:8080/home');
  return await response.json();
}

function createCarousel(titles) {
  const titleListDiv = document.getElementById('carousel-inner');
  titles.forEach((title, index) => {
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('carousel-item');
    if (index === 0) {
      titleDiv.classList.add('active');
    }
    const titleA = document.createElement('a');
    titleA.href = 'title.html?title_id='+title.title_id;
    const titleThumbnail = document.createElement('img');
    titleThumbnail.classList.add('d-block', 'w-100');
    const titleName = document.createElement('h5');
    titleName.classList.add('text-center');

    titleName.textContent = title.name;
    titleThumbnail.src = title.image_url;

    titleDiv.appendChild(titleA);
    titleA.appendChild(titleThumbnail);
    titleA.appendChild(titleName);

    titleListDiv.appendChild(titleDiv);
  });
}

function createRows(titles) {
  const titleListDiv = document.getElementById('row-inner');
  titles.forEach(title => {
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('col-md-6', 'col-sm-6', 'mb-4');
    const titleA = document.createElement('a');
    titleA.href = 'title.html?title_id='+title.title_id;
    const titleThumbnail = document.createElement('img');
    titleThumbnail.classList.add('img-fluid');
    const titleName = document.createElement('p');
    titleName.classList.add('text-center', 'mb-2');

    titleName.textContent = title.name;
    titleThumbnail.src = title.image_url;

    titleDiv.appendChild(titleA);
    titleA.appendChild(titleThumbnail);
    titleA.appendChild(titleName);

    titleListDiv.appendChild(titleDiv);
  });
}