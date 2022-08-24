document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.newtaskdescription.value)
    form.reset()
  })


});

function buildToDo(toDO) {
  let toDOList = document.createElement('li') 
  toDOList.textContent = `${toDO} `
  let btn = document.createElement("button")
  btn.addEventListener('click', deleteDiv)
  btn.textContent = 'x'
  toDOList.appendChild(btn)

  document.querySelector("#tasks").append(toDOList)

}

function deleteDiv (e) {
  e.target.parentNode.remove()
}


