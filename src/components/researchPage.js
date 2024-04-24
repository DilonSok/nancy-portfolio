import React from "react";
import '../css/researchPage.css'
import DEFAULT_IMG from '../images/logo192.png';

function ResearchPage() {
    return (
        <div className="researchPage">
            <div className="researchPage-outer-container">
                <div className="researchPage-inner-container">
                    <div className="research-element">
                        <div className="research-element-img-grid">
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                        </div>
                        <div className="research-element-info">
                            <div className="research-element-title">
                                Research Title 1
                            </div>
                            <div className="research-element-description">
                                This is a default description for research item #1.
                                I am adding random bits of information here about this research item.
                                None of this is actually true and is just filler content!
                                This was an awesomse research thing I did.
                            </div>
                            <a href="/add-link-later" className="research-element-more-info-link">
                                More Info
                            </a>
                        </div>
                    </div>
                    <div className="research-element">
                        <div className="research-element-img-grid">
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                        </div>
                        <div className="research-element-info">
                            <div className="research-element-title">
                                Research Title 1
                            </div>
                            <div className="research-element-description">
                                This is a default description for research item #1.
                                I am adding random bits of information here about this research item.
                                None of this is actually true and is just filler content!
                                This was an awesomse research thing I did.
                            </div>
                            <a href="/add-link-later" className="research-element-more-info-link">
                                More Info
                            </a>
                        </div>
                    </div>
                    <div className="research-element">
                        <div className="research-element-img-grid">
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                            <img alt="" className="research-element-img" src={DEFAULT_IMG} />
                        </div>
                        <div className="research-element-info">
                            <div className="research-element-title">
                                Research Title 1
                            </div>
                            <div className="research-element-description">
                                This is a default description for research item #1.
                                I am adding random bits of information here about this research item.
                                None of this is actually true and is just filler content!
                                This was an awesomse research thing I did.
                            </div>
                            <a href="/add-link-later" className="research-element-more-info-link">
                                More Info
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResearchPage;