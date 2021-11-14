const linksSocialMedia = {
  github: 'GS-Davi',
  youtube: 'channel/UCguKVFVGEqp1fhg5nac3REA',
  facebook: 'Davi.Souza45',
  instagram: 'davi.gsouza',
  twitter: 'davi_gsouza'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

// JavaScript

// Variaveis: let ou const
// let = Para dados alternados
// const = constante (Para dados fixos)

// Objeto guarda diversas informações dentro de uma
// variável

// Quando um erro acontece em JS normalmente está
// descrito no Console

// camelCase
// PascalCase
// snake_case

// Arrow Functions é uma forma contraida de função
// elimina a necessidade da função ter um nome
// você só passa o argumento =>
// porém para rodar a função é mais difícil
