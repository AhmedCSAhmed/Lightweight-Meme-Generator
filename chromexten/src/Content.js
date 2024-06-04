let memes = [
    "https://www.bu.edu/files/2020/12/1726f9d7b50bd7ef2d077a7fb3a2e577.jpg",
    "https://www.lifewire.com/thmb/K0oF6bk8jsXRJFUFma5pNo7xjyc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Goalfor2020FunnyMeme-04eadff55a17489a85453238481fe36e.jpg",
    "https://www.replicon.com/wp-assets/uploads/2023/09/Running-Away-Balloon.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TtVRz7MNKLwPiaDE7mjChjCCITHQ6QgfQQ&s",
    "https://assets-global.website-files.com/5ec6a20095cdf182f108f666/5f7c91808d6e37153030e743_Meme%2019.png",
    "https://img.poki.com/cdn-cgi/image/quality=78,width=1200,height=1200,fit=cover,f=png/70e565ff687043e10e150e23d0ae5ea2.png",
];

const images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++){
    const randImage = Math.floor(Math.random() * memes.length)
    images[i].src = memes[randImage];
}