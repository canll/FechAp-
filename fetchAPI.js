//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.(interFace)
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

fetch("https://api.github.com/users")
  .then((res) => {
    //! error handling
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    updateDom(data);
    console.log(data);
  })
  .catch((err) => console.log(err));

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");

  data.forEach((user) => {
    const { login, avatar_url, html_url } = user;
    userDiv.innerHTML += `
    <h2 class="text-warning">NAME:${login}</h2>
    <img src=${avatar_url} width="50%" alt="" />;
    <h4 class="text-danger"> 
    github adress:<a href=${html_url} class="text-decoration-none text-secondary"> ${html_url}</a>
     </h4>;
  `;
  });
};


    