import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const DVAwareness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // UPDATED COLORS: Deeper, richer tones
  const deepBrandPurple = '#4A2C4A'; // Your brand's dark plum/obsidian
  const awarenessPurple = '#6A1B9A'; // A rich, deep purple (not neon/pink)
  const goldAccent = '#BCA88E';

  return (
    <PageTransition>
      <article className="single-post-page" style={{ background: '#fff', overflowX: 'hidden' }}>
        
        {/* --- HERO SECTION (FIXED) --- */}
        <div className="post-hero" style={{ 
            height: '60vh', 
            minHeight: '450px',
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Darker Overlay for better text contrast */}
            <div className="overlay" style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                // Gradient from Deep Brand Purple to a slightly lighter purple
                background: `linear-gradient(to right, ${deepBrandPurple}F2, ${awarenessPurple}99)`
            }}></div>

            <div className="container" style={{ 
                position: 'relative', 
                zIndex: 2, 
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '0 20px'
            }}>
                <div style={{ marginBottom: '15px' }}>
                     <span style={{ 
                         backgroundColor: goldAccent, 
                         color: '#fff', 
                         padding: '5px 12px', 
                         borderRadius: '4px', 
                         fontSize: '0.8rem', 
                         fontWeight: 'bold', 
                         textTransform: 'uppercase', 
                         letterSpacing: '1px' 
                    }}>
                        October Awareness Month
                    </span>
                </div>

                {/* TEXT COLOR FIXED TO WHITE */}
                <h1 style={{ 
                    color: '#ffffff', // Explicitly white
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                    lineHeight: '1.1', 
                    fontFamily: '"Playfair Display", serif', 
                    maxWidth: '800px',
                    textShadow: '0 4px 15px rgba(0,0,0,0.4)' // Stronger shadow for readability
                }}>
                    Breaking the Silence:<br/> 
                    Turning Awareness into Action.
                </h1>
            </div>
        </div>

        {/* --- SECTION 1: THE REALITY --- */}
        <section className="section-padding" style={{ padding: '80px 0' }}>
            <div className="container">
                <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
                    
                    {/* Left Text */}
                    <div style={{ flex: '1 1 400px' }}>
                        <p className="lead" style={{ fontSize: '1.4rem', fontWeight: '500', color: deepBrandPurple, fontFamily: '"Playfair Display", serif', marginBottom: '30px' }}>
                            Domestic violence thrives in the shadows. It hides behind closed doors, cultural stigmas, and the fear of the unknown.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                            For African immigrant and refugee families, these challenges are compounded. Language barriers, fear of deportation, and isolation from extended family can make seeking help feel impossible. It is not just a private family matter; it is a public health crisis.
                        </p>
                    </div>

                    {/* Right Stats Column */}
                    <div style={{ flex: '1 1 350px', backgroundColor: '#fdfbfd', padding: '40px', borderRadius: '20px', borderLeft: `6px solid ${awarenessPurple}`, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                        <h3 style={{ color: awarenessPurple, marginTop: 0 }}>The Silent Epidemic<sup style={{fontSize:'0.6em'}}>1</sup></h3>
                        
                        <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '30px' }}>
                            <span style={{ fontSize: '4rem', fontWeight: '800', color: awarenessPurple, lineHeight: 1, marginRight: '15px' }}>1 in 3</span>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: deepBrandPurple }}>Women</span>
                        </div>
                        <p style={{ margin: '5px 0 25px 0', color: '#666' }}>have experienced physical violence by an intimate partner.</p>

                        <div style={{ display: 'flex', alignItems: 'baseline' }}>
                            <span style={{ fontSize: '4rem', fontWeight: '800', color: awarenessPurple, lineHeight: 1, marginRight: '15px' }}>1 in 4</span>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: deepBrandPurple }}>Men</span>
                        </div>
                        <p style={{ margin: '5px 0 0 0', color: '#666' }}>share similar experiences nationwide.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 2: THE "WHY" --- */}
        <section style={{ backgroundColor: deepBrandPurple, padding: '80px 0', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div className="container center-text" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px', color: goldAccent }}><i className="fas fa-hands-holding-heart"></i></div>
                <h2 style={{ color: 'white', fontFamily: '"Playfair Display", serif', fontSize: '2.5rem' }}>Why "Culturally Specific" Matters</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
                    Mainstream services often miss the nuances of our community. A survivor might stay in an abusive situation not just out of fear, but to protect her community's reputation or because she lacks an interpreter. Nisaa addresses these specific cultural dynamics head-on.
                </p>
            </div>
        </section>

        {/* --- SECTION 3: THE WORKSHOPS --- */}
        <section className="section-padding" style={{ padding: '80px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '1px', color: awarenessPurple, fontWeight: 'bold' }}>Join Us This October</span>
                    <h2 style={{ color: deepBrandPurple, fontFamily: '"Playfair Display", serif', fontSize: '2.5rem' }}>The Workshop Series</h2>
                    <p style={{ maxWidth: '600px', margin: '20px auto', color: '#666' }}>Free, confidential sessions provided in Somali, Swahili, Arabic, and English at the Nisaa Community Center.</p>
                </div>

                {/* Workshop Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    
                    {/* Card 1 */}
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderTop: `4px solid ${goldAccent}` }}>
                        <div style={{ color: goldAccent, fontSize: '2rem', marginBottom: '20px' }}><i className="fas fa-eye"></i></div>
                        <div style={{ display: 'inline-block', padding: '5px 15px', backgroundColor: '#f0f0f0', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: '#666', marginBottom: '15px' }}>
                            OCT 5 | 2:00 PM
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: deepBrandPurple }}>Recognizing the Signs</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Going beyond physical violence: understanding financial abuse, gaslighting, and digital coercion.</p>
                    </div>

                     {/* Card 2 */}
                     <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderTop: `4px solid ${awarenessPurple}` }}>
                        <div style={{ color: awarenessPurple, fontSize: '2rem', marginBottom: '20px' }}><i className="fas fa-shield-alt"></i></div>
                        <div style={{ display: 'inline-block', padding: '5px 15px', backgroundColor: '#f0f0f0', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: '#666', marginBottom: '15px' }}>
                            OCT 12 | 2:00 PM
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: deepBrandPurple }}>Safety Planning 101</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Practical steps for safety, document preparation, and emergency contacts for you and your children.</p>
                    </div>

                     {/* Card 3 */}
                     <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderTop: `4px solid ${goldAccent}` }}>
                        <div style={{ color: goldAccent, fontSize: '2rem', marginBottom: '20px' }}><i className="fas fa-balance-scale"></i></div>
                        <div style={{ display: 'inline-block', padding: '5px 15px', backgroundColor: '#f0f0f0', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: '#666', marginBottom: '15px' }}>
                            OCT 19 | 2:00 PM
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: deepBrandPurple }}>Immigrant Legal Rights</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Informational session with attorneys regarding VAWA (Violence Against Women Act) and U-Visas.<sup style={{fontSize:'0.6em'}}>2</sup></p>
                    </div>

                </div>
            </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section style={{ backgroundColor: '#f8f5f8', padding: '80px 0', textAlign: 'center' }}>
             <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <h2 style={{ color: deepBrandPurple, fontFamily: '"Playfair Display", serif', marginBottom: '30px' }}>Be Part of the Solution</h2>
                <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px' }}>
                    We invite men, community elders, and religious leaders to join us. Violence prevention requires the whole village.
                </p>
                <Link to="/contact" style={{ 
                        backgroundColor: awarenessPurple, 
                        color: 'white', 
                        padding: '18px 45px', 
                        borderRadius: '50px', 
                        textDecoration: 'none', 
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        display: 'inline-block',
                        boxShadow: `0 10px 25px ${awarenessPurple}40`,
                        transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
                    onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Register for Workshops
                </Link>

                {/* References */}
                <div style={{ marginTop: '80px', paddingTop: '20px', borderTop: '1px solid #ddd', fontSize: '0.8rem', color: '#888', textAlign: 'left' }}>
                    <strong style={{ display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>References</strong>
                    <ol style={{ paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '5px' }}>National Coalition Against Domestic Violence (NCADV). "National Statistics." <em>NCADV.org</em>.</li>
                        <li>U.S. Citizenship and Immigration Services. "Battered Spouse, Children and Parents (VAWA)." <em>USCIS.gov</em>.</li>
                    </ol>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link
                        to="/blog"
                        className="blog-back-btn"
                        style={{
                            background: 'white',
                            color: awarenessPurple,
                            border: `2px solid ${awarenessPurple}`,
                        }}
                    >
                        <i className="fas fa-arrow-left"></i> Back to Blog
                    </Link>
                </div>
             </div>
        </section>

      </article>
    </PageTransition>
  );
};

export default DVAwareness;