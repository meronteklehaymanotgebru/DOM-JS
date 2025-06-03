// 1. Change document background color to silver
document.body.style.backgroundColor = "silver";

// 2. Change the font color for h1 title tag to green
document.getElementById("title").style.color = "green";

// 3. Change the font case for h3 title tags to uppercase
document.querySelectorAll('h3').forEach(h3 => {
  h3.style.textTransform = "uppercase";

});
// 4. Add one more fruit
const fruitList = document.getElementById("fruList");
const fruitBtn = document.getElementById("addFruitBtn");
fruitBtn.addEventListener("click", () => {
      const li = document.createElement("li");
      li.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/doodle/48/pineapple--v1.png" alt="pineapple--v1"/>Pineapples';
      fruitList.appendChild(li);
      highlightTemporarily(li);
    });



// 5. Add one more vegetable
  const vegList = document.getElementById("vegList");
    const vegBtn = document.getElementById("addVegBtn");
    vegBtn.addEventListener("click", () => {
      const li = document.createElement("li");
      li.innerHTML = '<img width="30" height="30" src="https://img.icons8.com/color/48/carrot.png" alt="carrot"/>Carrots';
      vegList.appendChild(li);
      highlightTemporarily(li);
    });


document.querySelectorAll('#fruList li, #vegList li').forEach(li => {
  li.addEventListener('click', function() {
    alert('Yum! You selected: ' + this.textContent.trim());
  });
});
    const allLists = document.querySelectorAll("ul");
    allLists.forEach(list => {
      list.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          e.target.style.backgroundColor = "lightgreen";
          e.target.style.fontWeight = "bold";
          setTimeout(() => {
            e.target.style.backgroundColor = "";
            e.target.style.fontWeight = "";
          }, 1000);
        }
      });
    });

    const footer = document.getElementById("footer");
    footer.textContent = "Page last updated: " + new Date().toLocaleString();


    const style = document.createElement("style");
    style.innerHTML =`
    body {
 
      font-family:'Lato';
      font-size:150%;
  margin:0;
  padding:0;
    }
#title {
margin:0%;
      text-shadow: 2px 2px 5px #b2ffb2;
      font-family: 'Nunito';
         text-align:center;
         font-size:500%;
           background: 
    linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
    url(https://cdn.britannica.com/63/186963-138-AEE87658/vegetables.jpg?w=800&h=450&c=crop) no-repeat ;
  background-size: cover;
  padding:9%;
    
        
    }
    h3 {
      letter-spacing: 1px;
      background: linear-gradient(90deg, #e0ffe0 70%, #fff 100%);
      width: fit-content;
      padding: 0 10px;
      border-radius: 7px;
      margin-top: 25px;
      font-family: 'Nunito';
   
    }
      .categories{
  
      display:flex;
      flex-wrap:wrap;
      gap:40%;
      margin-left:5%;
      }
    ul {
      list-style: square inside;
    }
    li {
      margin-bottom: 6px;
      transition: transform 0.2s, color 0.2s;
    }
    img.fruit, img.veg {
      width: 30px;
      vertical-align: middle;
      margin-right: 6px;
    }
      li:hover {
        color: darkgreen;
        cursor: pointer;
        transition: 0.3s ease;
         transform: scale(1.05);
      }

      button {
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 6px 12px;
        border: none;
        background-color: green;
        color: white;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
      }

      button:hover {
        background-color: darkgreen;
      }
      footer{
      margin-top:40px;
      margin-bottom:0px;
      padding:0.5%;
      font-size:14px;
      color:white;
      background-color:#800000;
      text-align:center;
      }
    `;
    document.head.appendChild(style);
 