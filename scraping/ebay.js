{
  const itemContainerClass = "s-item   ";
  const imageClass = "s-item__image-img";
  const titleClass = "s-item__title";
  const priceClass = "s-item__price";

  const category = document.title.split("|")[0].trim();

  const items = document.getElementsByClassName(itemContainerClass);

  const arr = [];

  // HTMLDivElement[] to Array (massiiv)
  Array.from(items).forEach( item =>{
    const imgs = item.getElementsByClassName(imageClass);
    if(imgs.length === 0 ) return; // minna mööda nendest, mil pikkus on 0
    const img = imgs[0];

    const src = img.dataset.src;

    if(!src) return; // minna mööda

    const title = item.getElementsByClassName(titleClass)[0].textContent;
    const price = item.getElementsByClassName(priceClass)[0].textContent;

    arr.push({
      imgSrc: src,
      title,
      price,
      category,
      // : document.title.split("|")[0].trim(),
    })
  });

  console.log(JSON.stringify(arr));
}
