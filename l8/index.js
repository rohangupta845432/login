const sb = document.querySelector("form");
const fruits = document.querySelector(".fruits");
const new_input = document.createElement("input");
new_input.type = "text";
new_input.id = "fruit-to-discription";
new_input.name = "fruit_discription";
// sb.insertBefore(new_input, sb.childNodes[2]);
sb.insertBefore(new_input, sb.children[2]);
// sb.appendChild(input);
// sb.insertChildAtIndex(input, 1)
sb.addEventListener('submit', function(event){
    event.preventDefault()
    // console.log("hello");
    const fruit_to_add = document.getElementById('fruit-to-add');
    const fruit_dis = document.getElementById('fruit-to-discription');
    const li = document.createElement('li');
    // li.innerHTML = fruit_to_add.value + "<button class='delete-btn'>x</button><button class='edit-btn'>Edit</button>";
    const textNode = document.createTextNode(fruit_to_add.value);
    li.className = 'fruit';
    li.appendChild(textNode);
    
    const p = document.createElement('p');
    const textNodeForP = document.createTextNode(fruit_dis.value);
    p.appendChild(textNodeForP);
    li.appendChild(p);
    p.style.fontStyle = "italic";
    const btn_d = document.createElement('button');
    const x = document.createTextNode('x');
    btn_d.className = 'delete-btn';
    btn_d.appendChild(x);
    li.appendChild(btn_d);

    const btn_e = document.createElement('button');
    const e_text = document.createTextNode('Edit');
    btn_e.className = 'edit-btn';
    btn_e.appendChild(e_text);
    li.appendChild(btn_e);

    fruits.appendChild(li);
});

fruits.addEventListener('click', function(event){
    if(event.target.classList.contains("delete-btn")){
        const delete_li = event.target.parentElement;
        fruits.removeChild(delete_li);
    }
    
});

const fd = document.querySelectorAll(".discription");
for(let i =0; i< fd.length; i++){
    fd[i].style.fontStyle = "italic";
}

const filter = document.getElementById("filter");
filter.addEventListener("keyup", function(e){
    console.log(e.target.value);
    
    const fruitList = document.getElementsByClassName("fruit");
    for(let i =0; i< fruitList.length; i++){
        console.log(fruitList[i]);
        console.log(fruitList[i].firstChild.textContent);
        console.log(fruitList[i].firstElementChild.firstElementChild.textContent);
        const fruit_text = fruitList[i].firstChild.textContent.toLowerCase();
        const fruit_dis_text = fruitList[i].firstElementChild.firstElementChild.textContent.toLowerCase();
        console.log(fruit_dis_text.indexOf(e.target.value));
        console.log(fruit_text.indexOf(e.target.value));
        if(fruit_text.indexOf(e.target.value) == -1 && fruit_dis_text.indexOf(e.target.value) == -1){
            fruitList[i].style.display = "none";
        }else{
            fruitList[i].style.display = "flex";
        }
    }
});

