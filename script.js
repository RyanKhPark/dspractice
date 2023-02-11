const costInput = document.getElementById('costinput');
const categories = document.getElementById('categories');
const category = categories.children


costInput.addEventListener('click', () => {
    categories.classList.add('appearcircle');
})

const arr = [...category];

for (let i = 0; i < category.length; i++) {

    category[i].addEventListener('click', () => {
        category[i].classList.toggle('clicked');

        if (arr.find(s => s.classList[0] === 'clicked')) {

            let exClicked = arr.filter(s => s.classList[0] !== 'clicked');

            // forEach, map Read thoroughly
            exClicked.forEach(el => el.classList.add('disable'))
            // let arrMap = arr.map(el => el.classList.add('disable'))

            console.log(exClicked);
            // console.log(arrMap);

        } else {
            arr.forEach(el => el.classList.remove('disable'))
        }



        //         if (arr.every(s => s.classList[0] !== 'clicked')) {
        //     arr.every(el => el.classList[0] = '')
        // };

        // arr.filter(s => s.classList[0] !== 'clicked').map(el => el.classList.toggle('disable'))


        console.log(arr)

    })

}


// if (arr.every(s => s.classList[0] !== 'clicked')) {
//     arr.every(el => el.classList[0] = '')
// };

console.log(arr)

// if (arr.every(el => el.classList[0] != 'clicked', console.log("I got to if", arr))) {
//     arr.every(el => {
//         console.log("Came to every: ", arr)
//         el.classList[0] = ''
//     })
// }


// if (arr.filter(s => s.classList[0] !== 'clicked')) {
//     arr.filter(s => s.classList[0]);
// } else {

// }