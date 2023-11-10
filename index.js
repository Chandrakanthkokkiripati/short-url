const submitBtn = document.getElementById("submit");
const longUrl = document.getElementById("longUrl");
const shortUrl = document.getElementById("short");
const errorMsg = document.getElementById("error");
const copyBtn = document.getElementById("copy");


submitBtn.addEventListener("click", async () => {
  const url = "https://url-shortener-service.p.rapidapi.com/shorten";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "38c52c1619msh9c267448b00d16cp1d79f6jsn98ff6bf9752a",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    body: new URLSearchParams({
      url: longUrl.value,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result)
    shortUrl.value = result.result_url

} catch (error) {
    errorMsg.innerHTML = error
    // console.log(error);
  }
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(shortUrl.value).then(()=> alert('Copied!'))
})