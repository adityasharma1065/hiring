const usersData = [
    {
        id:0,
        username:"Wade Wilson",
        image:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"California",
        country:"USA",
        techStak:["PHP","android","IOS",'Flutter','Swift','Kotlin','Java'],
        description:"Alexandra is very dedicated developer for mobile platforms and very good designer as well.",
    },
    {
        id:1,
        username:"Alex Morgan",
        image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"London",
        country:"UK",
        techStak:["UI","UX","Photoshop",'AfterEffect','Premier Pro','Adobe Illutrator'],
        description:"Wade is a 32 year old UI/UX designer, with impressive portfolio behind him.",
    },
    
    {
        id:2,
        username:"Jonathan Jones",
        image:"https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"Berlin",
        country:"Germany",
        techStak:["Node.JS","MongoDB","React.JS",'HTML','CSS','JS','Express','Redux','Firebase','Next.JS','Angular.JS'],
        description:"Jonathan is very good web developer who can create any web application with high effeciency",
    },
    
]



var cutt=''
usersData.forEach((val)=>{
  
    cutt+=`<div class="card" id="${val.id}">
    <div class="profile">
        <img src="${val.image}" alt="">
    </div>
    <h2>${val.username}</h2>
    <h5>${val.city},${val.country}</h5>
    <div class="skills">
        
        <button id="one">${val.techStak[0]}</button>
        <button id="two">${val.techStak[1]}</button>
        <button id="three">${val.techStak[2]}</button>
        <button id="four">+${(val.techStak.length)-3}</button>
    </div>
    <div class="des">
         <h4>${val.description}</h4>
    </div>
    <div class="button5">
        <h3>VIEW PROFILE</h3>
    </div>
</div>`

})
document.querySelector(".cards").innerHTML=cutt
