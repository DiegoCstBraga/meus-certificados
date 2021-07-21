// const file = fetch('../src/certifications.json')
const file = fetch('https://api.github.com')
  .then(data => data.json())
  .then(certifications => certifications)

console.log(file)

let certifications = []

certifications.forEach(certification => {
  let certificationContainer = document.createElement('a')
  certificationContainer.setAttribute('class', 'certification')
  certificationContainer.setAttribute('target', '_blank')
  certificationContainer.setAttribute('href', certification.certificationURL)
  
  let certificationImage = document.createElement('img')
  certificationImage.setAttribute('src', certification.imageURL)
  certificationImage.setAttribute('alt', certification.name)

  let certificationText = document.createElement('p')
  certificationText.innerText = certification.name

  certificationContainer.appendChild(certificationImage)
  certificationContainer.appendChild(certificationText)

  

})

/*
"name" : "",
"type" : "",
"imageURL" : "",
"certificationURL" : ""

*/