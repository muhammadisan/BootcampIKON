import { Link } from "react-router-dom";

function Home() {
    return (
        <body className="home-background">
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="alterra">
                                <Link to="/"><img alt="gambar" className="logo-atas" src="asset/img/logo-ALTA@2x.png" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            {/* <div class="container"> */}
                            <div className="row align-items-center navig">
                                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><Link to="/" className="aktif">HOME</Link></div>
                                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><Link to="/about">ABOUT</Link></div>
                                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><Link to="/experience">EXPERIENCE</Link></div>
                                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><Link to="/form">CONTACT</Link></div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </header>
            <div className="container h-100">
                <div className="row align-items-center isi-home">
                    <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                        <img alt="gambar" id="foto-profil" src="asset/img/LLawliet.jpg" />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="main-p">
                            <p className="sapaan">Hi, my name is </p>
                            <p className="nama">L Lawliet</p>
                            <p className="hobi">I like math</p>
                            <p className="tombol"><Link to="/about">Get In Touch</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Home;