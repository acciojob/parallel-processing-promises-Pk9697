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
			.then((res)=>res.json())
			.then((data)=>resolve(data))
			.catch((error)=>reject(error))
	})
}
 
const download=()=>{
	const promises=images.map((image)=>downloadImage(image.url))
	console.log(promises)
	return Promise.all(promises)
}

btn.addEventListener('click',()=>{
	console.log('clicked')
	download()
	// download()
	// 	.then((values)=>{
	// 		console.log(values)
	// 	})
	// 	.catch((error)=>{
	// 		console.error(error)
	// 	})
})