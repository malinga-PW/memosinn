import React from 'react'

const funFact = [
  {
      title: '6+',
      subTitle: 'Room Types',
  },
  {
      title: '5',
      subTitle: 'Beaches Nearby',
  },
  {
      title: '50+',
      subTitle: 'Happy Guests',
  },
  {
      title: '12',
      subTitle: 'Local Attractions',
  },


]


const FunFact = (props) => {
    return(
      <section className={`wpo-fun-fact-section ${props.fClass}`}>
          <div className="container-fluid">
              <div className="row">
                  <div className="col col-xs-12">
                      <div className="wpo-fun-fact-grids clearfix">
                          {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default FunFact;