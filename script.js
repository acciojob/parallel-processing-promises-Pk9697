//your JS code here. If required.

const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const downloadImage=(url)=>{
	return new Promise((resolve,reject)=>{		
		fetch(url)
			.then((res)=>{
				resolve(url)
			})
			.catch((error)=>reject(`Failed to load image's URL: ${url}`))
	})
}
 
const download=()=>{
	const promises=images.map((image)=>downloadImage(image.url))
	return Promise.all(promises)
}

btn.addEventListener('click',()=>{
	// download()
	download()
		.then((values)=>{
			output.innerHTML=values.map((url)=>`<img src=${url} />`).join(' ')
			
		})
		.catch((error)=>{
			console.error(error)
		})
})