function handleFormSubmit(event){
    event.preventDefault();
    // const username = document.getElementById("username").value;
    // const email = document.getElementById("email").value;
    // const phone = document.getElementById("phone").value;

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    let user_data = {
      'username' : username,
      'email' : email,
      'phone' : phone
    };
    const s_user_data = JSON.stringify(user_data);
    localStorage.setItem(email , s_user_data);

    const displaydata = document.querySelector("#displaydata");
    const li = document.createElement("li");
    const del_btn = '<button onclick="del(event)">Delete</button>';
    const edit_btn = '<button onclick="edit(event)">edit</button>';
    li.innerHTML = username+"-"+email+"-"+phone+" "+del_btn+" "+edit_btn;
    li.id = email;
    displaydata.appendChild(li);
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  function del(event){
    const par_li = event.target.parentElement;
    par_li.style.display = "none";
    localStorage.removeItem(par_li.id);
  }

  function edit(event){
    const par_li = event.target.parentElement;
    const user_data = par_li.firstChild.textContent;
    const user_arr = user_data.split("-");
    document.getElementById("username").value = user_arr[0];
    document.getElementById("email").value = user_arr[1];
    document.getElementById("phone").value = user_arr[2];
    par_li.style.display = "none";
    localStorage.removeItem(par_li.id);
  }
  // module.exports = handleFormSubmit;