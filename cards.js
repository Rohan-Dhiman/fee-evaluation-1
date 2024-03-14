let index = sessionStorage.getItem("id");

console.log(index);



async function displaydata() {
    let x = await fetch('./for-rent.json');
    let data = await x.json();
    let details = `

<div class="container py-4" style="display: flex; align-items: center; justify-content: center;" id ="details">
<img src="${data[index].coverPhoto.url} "
    alt="" style="width: 50%;"> 
<div class="details" style="width: 50%; margin: 2%;">
    <div class="heading" >

        <h1 style="color: antiquewhite;">$ ${data[index].price}</h1>
        <p style="color: antiquewhite;"> ${data[index].location[3].slug}</p>
        <p style="color: antiquewhite;"> Rooms: 
        <b> ${data[index].rooms + 2 }</b>
        Bathrooms: <b> ${data[index].baths + 1}</b>
        </p>
        <h4  style="color: antiquewhite;" > Area: ${data[index].area}</h4>

        <b style="color: antiquewhite;" >
        </b>
        <br>
        <br>

        <strong style="color: antiquewhite;" >
            Facilities:
        </strong>
        <p style="color: antiquewhite;"> ${data[index].amenities}   
        </p>
        <br>
        <b style="color: antiquewhite;" > owner: ${data[index].ownerAgent.name} 
        <br>
        contact: ${data[index].phoneNumber.phone} 

        </b>
         
    </div>
</div>
</div>`;


    document.getElementById("details").outerHTML = details;

}

displaydata();