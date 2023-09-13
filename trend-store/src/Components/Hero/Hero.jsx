import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-slogan">
            <span>Bu Sezonda En İyisini Bul</span>
            <h2>Herkese Özel Koleksiyon</h2>
            <a href="#">Şimdi Keşfet</a>
        </div>
        <div className="hero-image-container">
            <img src="/images/hero.png" alt="" className="hero-image" />
        </div>
    </section>
  )
}

export default Hero