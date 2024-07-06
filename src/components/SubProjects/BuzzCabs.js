import React from 'react';
import './BuzzCabs.css';
import perform1 from "../../Assets/BuzzCabJunePerformence.JPG"

const BuzzCabs = () => {
    return (
        <div className="buzzcabs">
            <section className="buzzcabs__section">
                <h2 className="buzzcabs__heading">Problem</h2>
                <p className="buzzcabs__description">BuzzCabs was struggling to get ranked and achieve conversions. The client wanted to rank his website and GMB listing in the area called Kilgetty, UK.</p>
                <img src="https://buzzcabs.co.uk/wp-content/uploads/2023/10/Final-02-1-2-1024x620.png" alt="Problem" className="buzzcabs__image" />
                <div className="buzzcabs__infographic">Infographic for the problem...</div>
            </section>
            <section className="buzzcabs__section">
                <h2 className="buzzcabs__heading">Process</h2>
                <p className="buzzcabs__description">By implementing On-page SEO optimization, Image SEO, Citation building, creating all major social profiles correctly, schema markup(Local Business Schema), Blog posts, etc., we managed to rank both the website and listing within 2 months.</p>
                <img src="https://buzzcabs.co.uk/wp-content/uploads/2023/10/Final-02-1-2-1024x620.png" alt="Process" className="buzzcabs__image" />
                <div className="buzzcabs__infographic">Infographic for the process...</div>
            </section>
            <section className="buzzcabs__section">
                <h2 className="buzzcabs__heading">Results</h2>
                <p className="buzzcabs__description">Now both the website and listing ranked 1st for most of the important keywords like kilgetty taxis, kilgetty taxi numbers, taxi near me, etc.</p>
                <img src={perform1} alt="Results" className="buzzcabs__image" />
                <div className="buzzcabs__infographic">Infographic for the results...</div>
            </section>
        </div>
    );
}

export default BuzzCabs;