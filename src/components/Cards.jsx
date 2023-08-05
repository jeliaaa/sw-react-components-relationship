import React from 'react'
import BookCard from './BookCard'
const Cards = () => {
    const data = [
        { id: 0, title: '20000 leagues under the sea', mainHero: 'Captain Nemo', heroImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/%27Twenty_Thousand_Leagues_Under_the_Sea%27_by_Neuville_and_Riou_027.jpg/368px-%27Twenty_Thousand_Leagues_Under_the_Sea%27_by_Neuville_and_Riou_027.jpg', description: 'lorem ipsum dorem set amet'},
        { id: 1, title: 'a song of ice and fire', mainHero: 'Tyrion ', heroImg: 'https://upload.wikimedia.org/wikipedia/en/5/50/Tyrion_Lannister-Peter_Dinklage.jpg', description: 'lorem ipsum dorem set amet'},
        { id: 2, title: 'The pciture of Dorian Gray', mainHero: 'Dorian Gray', heroImg: 'https://cdn.pixabay.com/photo/2023/05/25/18/59/ai-generated-8018062_1280.jpg', description: 'lorem ipsum dorem set amet'}
    ]
    function getBook(name){
        console.log(name);
    }
    return (
        <div style={{display:'flex', alignItems:"center", textAlign:'center'}}>
            {data.map(card => (<BookCard key={card.id} title={card.title} mainHero={card.mainHero} heroImg={card.heroImg} description={card.description} getInfo={getBook} />))}
        </div>
    )
}

export default Cards