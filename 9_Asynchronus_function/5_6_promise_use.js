//in this program we are going to see a real life example of promise

//Here we are trying to download an image via a link and it can be either downloaded or throw error

function download(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Downloading Starts..');
            let extension = url.split('.').pop();
            if(['webp', 'jpg', 'png'].indexOf(extension) != -1){
                let img = url.split('/').pop();
                resolve(img);
            }
            else{
                reject("Abey url to sahi se dede");
            }
        }, 2000)
    })
}


function compress(file){
    return new Promise((resolve, reject)=>{
        console.log('Compression Starts...');
        setTimeout(()=>{
            let compressed_file = file.split('.')[0] + '.zip';
            console.log(compressed_file)
            resolve(compressed_file);
        }, 1000)
    })
    
}

function upload(file){
    return new Promise((resolve, reject)=>{
        console.log("Uploading Starts..");
        setTimeout(()=>{
            
            let newLink = "https//newSite.com/";
            console.log("site uploaded ", newLink);
            resolve(newLink)
        }, 1000)
    })
    

}
download('https//randomurl.com/avengers.jpg')
    .then((img)=>{
        console.log(img);
        return img;
    })
    .then(compress)//chaining of promise and by passing function it will directly pass image as an argument in function
    .then(upload)
    .then((newLink)=>{
        console.log("Everything Done");
    })
    .catch((err)=>{
        console.log(err);
    })