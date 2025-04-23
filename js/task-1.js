
 const liElems = document.querySelectorAll('.js-categories-list > li');
 console.log('Categories:', liElems.length);

 liElems.forEach(item=>{const catName = item.querySelector('h2').textContent; 
    const catElems= item.querySelectorAll('ul, li');
console.log ('Category:',`${catName}`);
console.log ('Elements:',`${catElems.length}`);
    });