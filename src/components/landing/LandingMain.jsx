import React from 'react'

const LandingMain = () => {
  return (
    <>
      <section>
        <div className="landing-header" id="scroll-area">
          <h1 className="landing-title">Potted Plant</h1>
          <p className="landing-description">Development Studio</p>
        </div>
      </section>

      <section>
        <div className="landing-fullscreen" id="scroll-area">
          <div className="landing-card">
            <div className="landing-content">
              <h2 className="landing-title">🪴 About Us</h2>
              <p className="landing-description">
                Potted Plant develops applications and researches new technologies. The studio was created to facilitate the bigger picture of our founder, providing a home for his projects and ideas. Some projects will flourish into their own, and some will stay here to die.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingMain
