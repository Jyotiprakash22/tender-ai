function searchTenders() {
  const keyword = document.getElementById("keyword").value;
  const state = document.getElementById("state").value;
  const sector = document.getElementById("sector").value;

  fetch(`https://YOUR_BACKEND_URL/search?keyword=${keyword}&state=${state}&sector=${sector}`)
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach(t => {
        html += `
          <div>
            <h3>${t.title}</h3>
            <p>${t.department} | ${t.state} | ${t.sector}</p>
            <p>AI Score: ${t.score}</p>
            <hr>
          </div>
        `;
      });
      document.getElementById("results").innerHTML = html;
    });
}
