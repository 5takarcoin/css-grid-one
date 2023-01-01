let sections = document.querySelectorAll("section");

console.log(sections);

sections.forEach(element => {
    let seed = Math.floor(Math.random() * 999);
    let link = `https://picsum.photos/seed/${seed}/600`;
    let insideSec = `<div class="hola"><img src="${link}"/></div><div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis unde molestias illo enim iste at porro distinctio laborum nesciunt tempora maiores velit culpa, consequuntur quasi quod facilis dignissimos. Quo, tenetur!</p></div>`;
    element.innerHTML = insideSec;
    console.log(insideSec);
});