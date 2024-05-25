import React from 'react'
import heroImg from './assets/hero.svg'

const Home = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sunt, optio molestias quibusdam quia nulla harum omnis enim saepe dolore ducimus illo provident obcaecati atque doloribus repellat repellendus temporibus perspiciatis voluptas numquam vel eius tempore iure. Inventore aut placeat sunt.</p>
            </div>

            <div className="imng-container">
                <img src={heroImg} alt="Hero Image" className='img' />
            </div>
        </div>
    </section>
  )
}

export default Home