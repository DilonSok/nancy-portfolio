import React from "react";
import '../css/presentationsPage.css';

function PresentationsPage(){
    return(
        <div className="presentations-outer-container">
            <div className="presentations-inner-container">
                <ol className="presentations-list-container">
                    <li className="presentations-element">
                        <p className="presentation-info">
                            Poster presentation on “Optimization of PhotoThermal Therapy for Enhanced Immunogenic Cell Death” at the, Texas A&M Allience for Diversity in Science & Engineering Conference, August 2023 (College Station, TX, USA)
                        </p>
                        <a href="https://www.allianceinscience.org/blank">More info?</a>
                    </li>
                    <li className="presentations-element">
                        <p className="presentation-info">
                            Oral presentation on “Optimization of PhotoThermal Therapy for Enhanced Immunogenic Cell Death” Summer Platform for Undergraduate Research Symposium, August 2023 (Dallas, TX, USA). 
                        </p>
                        <a href="/https://spur.utdallas.edu/">More info?</a>
                    </li>
                    <li className="presentations-element">
                        <p className="presentation-info">
                            Poster presentation on “Optimization of PhotoThermal Therapy for Enhanced Immunogenic Cell Death” Summer Platform for Undergraduate Research Symposium, August 2023 (Dallas, TX, USA). 
                        </p>
                        <a href="https://spur.utdallas.edu/">More info?</a>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default PresentationsPage;