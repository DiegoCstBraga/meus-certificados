const url = './src/data/certifications.json'

let certifications = []

let devContainer = document.querySelector('#dev-certifications')
let infraContainer = document.querySelector('#infra-certifications')
let softwareContainer = document.querySelector('#software-certifications')
let methodContainer = document.querySelector('#method-certifications')

async function buildCertifications() {
  
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      data.certifications.forEach(value => {
        let obj = {
          name: value.name,
          type: value.type,
          imageURL: value.imageURL,
          certificationURL: value.certificationURL
        }
        certifications.push(obj)

      })
    })


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
    certificationText.setAttribute('class', "certification-description")

    certificationContainer.appendChild(certificationImage)
    certificationContainer.appendChild(certificationText)
    
    if(certification.type === 'dev'){
      devContainer.appendChild(certificationContainer)
      
    } else if(certification.type === 'infra'){
      infraContainer.appendChild(certificationContainer)
      
    } else if(certification.type === 'software'){
      softwareContainer.appendChild(certificationContainer)
      
    } else if(certification.type === 'methodology') {
      methodContainer.appendChild(certificationContainer)
      
    } else {
      devContainer.appendChild(certificationContainer)
      
    }

  })

}

buildCertifications()

/*
"name" : "",
"type" : "",
"imageURL" : "",
"certificationURL" : ""

*/