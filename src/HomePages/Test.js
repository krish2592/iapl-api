const titleImages = [ 
    {
    "ITES" : [
        {url:'https://infytechai.com/image-1.jpg', title:""},
        {url:'https://infytechai.com/image-2.jpg', title:""},
        {url:'https://infytechai.com/image-3.jpg', title:""},
        {url:'https://infytechai.com/image-4.jpg', title:""},
        {url:'https://infytechai.com/image-5.jpg', title:""}
      ]
    },
    {
    "NTES" : [
        {url:'https://infytechai.com/image-1.jpg', title:""},
        {url:'https://infytechai.com/image-2.jpg', title:""},
        {url:'https://infytechai.com/image-3.jpg', title:""},
        {url:'https://infytechai.com/image-4.jpg', title:""},
        {url:'https://infytechai.com/image-5.jpg', title:""}
      ]  
    }
 ];




 titleImages.map( (item, index) => {
    let title = Object.keys(item);
    let images = item[title];
    console.log(title[0] , "kjlkfj");
    console.log(images, "kjhkshf");
    const chunkedImages = [];
    let k = 0;
    for (let i = 0; i < images.length; i++) {
        if((i+1)%4 === 0) {
            chunkedImages.push(images.slice(k, k + 4));
            k=i+1;
        }
        else if (i+1 === images.length && images.length !== 4) {
            chunkedImages.push(images.slice(k, images.length));
        }
    }

    console.log(chunkedImages)
 } )

 