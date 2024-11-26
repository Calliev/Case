var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    post = document.getElementById("perfil"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'submit',
    modalTitle.innerText = "Preencha seus dados"
    isEdit = false
    imgInput.src = "./image/Profile Icon.webp"
    form.reset()
})


file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("Tamanho de imagem não permitido")
    }
}


function showInfo(){
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index+1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.employeeName}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.employeePhone}</td>
            <td>${element.employeePost}</td>


            <td>
                <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}' )" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })
}
showInfo()


function readInfo(pic, name, email, phone, post, ){
    document.querySelector('.showImg').src = pic,
    document.querySelector('#showName').value = name,
    document.querySelector("#showEmail").value = email,
    document.querySelector("#showPhone").value = phone,
    document.querySelector("#showPost").value = post
}


function editInfo(index, pic, name,  Email, Phone, Post, ){
    isEdit = true
    editId = index
    imgInput.src = pic
    userName.value = name
    email.value = Email,
    phone.value = Phone,
    post.value = Post,


    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}


function deleteInfo(index){
    if(confirm("Tem certeza que quer excluir esse usuario?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
        employeeName: userName.value,
        employeeEmail: email.value,
        employeePhone: phone.value,
        employeePost: post.value,
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Preencha seus dados"

    showInfo()

    form.reset()

    imgInput.src = "./image/Profile Icon.webp"  
})