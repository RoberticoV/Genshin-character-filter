let data = [
    {
        name: 'Ganyu',
        element: 'Cryo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/ganyu-icon.png'
    },
    {
        name: 'Yelan',
        element: 'Hydro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/yelan-icon.png'
    },
    {
        name: 'Raiden',
        element: 'Electro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/raiden-shogun-icon.png'
    },
    {
        name: 'Jean',
        element: 'Anemo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/jean-icon.png'
    },
    {
        name: 'HuTao',
        element: 'Pyro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/hu-tao-icon.png'
    },
    {
        name: 'Kazuha',
        element: 'Anemo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/kaedehara-kazuha-icon.png'
    },
    {
        name: 'Venti',
        element: 'Anemo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/venti-icon.png'
    },
    {
        name: 'Alhaitham',
        element: 'Dendro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/alhaitham-icon.png'
    },
    {
        name: 'Albedo',
        element: 'Geo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/albedo-icon.png'
    },
    {
        name: 'Cyno',
        element: 'Electro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/cyno-icon.png'
    },
    {
        name: 'Diluc',
        element: 'Pyro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/diluc-icon.png'
    },
    {
        name: 'Eula',
        element: 'Cryo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/eula-icon.png'
    },
    {
        name: 'Klee',
        element: 'Pyro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/klee-skin-icon.png'
    },
    {
        name: 'Zhongli',
        element: 'Geo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/zhongli-icon.png'
    },
    {
        name: 'Xiao',
        element: 'Anemo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/xiao-icon.png'
    },
    {
        name: 'Childe',
        element: 'Hydro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/tartaglia-icon.png'
    },
    {
        name: 'YaeMiko',
        element: 'Electro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/yae-miko-icon.png'
    },
    {
        name: 'Yoimiya',
        element: 'Pyro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/yoimiya-icon.png'
    },
    {
        name: 'Wanderer',
        element: 'Anemo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/wanderer-icon.png'
    },
    {
        name: 'Shenhe',
        element: 'Cryo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/shenhe-icon.png'
    },
    {
        name: 'Kokomi',
        element: 'Hydro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/sangonomiya-kokomi-icon.png'
    },
    {
        name: 'Qiqi',
        element: 'Cryo',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/qiqi-icon.png'
    },
    {
        name: 'Nahida',
        element: 'Dendro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/nahida-icon.png'
    },
    {
        name: 'Nilou',
        element: 'Hydro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/nilou-icon.png'
    },
    {
        name: 'Keqing',
        element: 'Electro',
        imageUrl: 'https://cdn.wanderer.moe/genshin-impact/character-icons/keqing-icon.png'
    }
];

const resultList = document.querySelector('#results');
const filter = document.querySelector('#filter');
const sortButton = document.querySelector('#sortButton');

filter.addEventListener('input', () => filterData(filter.value));
sortButton.addEventListener('click', () => sortDataAlphabetically());



function renderList(items) {
    resultList.innerHTML = '';
    items.forEach(function (item) {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-name', item.name.toLowerCase());

        const image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.name;
        image.addEventListener('click', function() {
            const characterName = item.name.toLowerCase();
            const characterLink = `https://genshin.gg/characters/${characterName}/`;
            window.open(characterLink, '_blank');
        })

        const text = document.createElement('h3');
        text.textContent = item.name;

        const elementType = document.createElement('h5');
        elementType.textContent = item.element;

        listItem.appendChild(image);
        listItem.appendChild(text);
        listItem.appendChild(elementType);

        resultList.appendChild(listItem);
    });
}

function filterData(searchTerm) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filteredItems = data.filter(item => item.name.toLowerCase().includes(lowerCaseTerm));
    renderList(filteredItems);
}

function sortDataAlphabetically() {
    const sortedItems = [...data].sort((a, b) => a.name.localeCompare(b.name));
    renderList(sortedItems);
}

renderList(data);

