
let elements = document.querySelector('#templateDiv')
items.results.forEach(function(result){
	let	searchTemplate = 
	`<div id="templateContainer">
		<ul class="templateList">
			<li><img class="templateImg" src="${unescape(result.Images[0].url_570xN)}"/></li>
			<li class="templateTitle"> ${result.title}</li>
			<li class="templateSeller"> ${result.Shop.shop_name}</li>
			<li class="templatePrice"> $${result.price}</li>
		</ul>		
	</div>`
elements.innerHTML += searchTemplate
})
elements.addEventListener('mouseover', function(e){
	e.target.innerHTML
})




// function sorter(arr){
//   let output = '';  
//   for (let i = 0; i < arr.length; i++){
//     output = output.concat(`<div class = 'item'>
//     <img src="" alt="">
//     <p class = 'name'>${arr[i].name}</p>
//     <p class = 'desc'>${arr[i].description}</p>
// </div>`);
//   } 
//   return output; 
// }
// sorter(items);
// itemcontainer.innerHTML = sorter(items);


// `<div class = 'item'>
//     <img src="" alt="">
//     <p class = 'name'>${arr[i].name}</p>
//     <p class = 'desc'>${arr[i].description}</p>
// </div>`