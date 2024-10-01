import React from 'react'
import '../Layout/Home.css';
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import ImageSlider from '../components/ImageSlider';
import ReviewCard from '../components/ReviewCard';
import logo from '../assett/image2.jpg'
import Footer from '../components/Footer';

const reviews = [
    {
        name: 'Alice',
        date: 'September 1, 2024',
        rating: 5,
        comment: 'Fantastic service! Highly recommend.',
        imageUrl: 'https://previews.123rf.com/images/studioaccendo/studioaccendo2304/studioaccendo230404375/202158393-femme-hijab-avec-livre-magique-dans-l-illustration-vectorielle-de-la-for%C3%AAt.jpg',
    },
    {
        name: 'Bob',
        date: 'August 25, 2024',
        rating: 4,
        comment: 'Good experience, but room for improvement.',
        imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-jeune-etudiant-heureux-etre-retour-universite_23-2148586577.jpg',
    },
    {
        name: 'Charlie',
        date: 'August 15, 2024',
        rating: 3,
        comment: 'It was okay, but I expected more.',
        imageUrl: 'https://img.freepik.com/photos-premium/adolescent-garcon-souriant-etudiant-assis-au-hub-interieur_171337-120373.jpg',
    },
];
const reviewlist = {
    display: 'flex',
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px',
}
function Home() {

    return (
        <>
            <Navbar />
            <ImageSlider />
            <ProductList />
            <div className='card'>
                <div className='customer'>
                    <h1>Customer Reviews</h1>

                    <div className={reviewlist}>
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
                <div className='image'>
                    <img src={logo} alt="Logo" />
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Home