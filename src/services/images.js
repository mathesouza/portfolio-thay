const mapStorageToGallery = images =>(
    Object.keys(images).map((key)=>{
        const arte = images[key]
        let img={
            src: arte.src,
            thumbnail: arte.src,
            thumbnailWidth: arte.thumbnailWidth,
            thumbnailHeight:arte.thumbnailHeight,
            caption:arte.sub
        }
        return img
    })
)
export {
    mapStorageToGallery
}