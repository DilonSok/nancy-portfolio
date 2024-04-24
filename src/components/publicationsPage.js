import React from "react";
import '../css/publicationsPage.css';
function PublicationsPage() {
    return (
        <div className="publications-outer-container">
            <div className="publications-inner-container">
                <ol className="publications-list-container">
                    <li className="publication-element">
                        <p className="publication-info">
                            Ehrman, R. N.; Brohlin, O. R.; Wijesundara, Y. H.; Kumari, S.; Trashi, I.; Trashi, O.; Howlett, T. S.; Herbert, F. C.; Raja, A.; Koirala, S.; Tran, N.; Al-Kharji, N. M.; Hagge, L. M.; Gassensmith, J. A Scalable Synthesis of Adjuvanting Antigen Depots Based on Metal-Organic Frameworks; preprint; Chemistry, 2023. https://doi.org/10.26434/chemrxiv-2023-gtl30. 
                        </p>
                        <a href="/publications">Link to publication</a>
                    </li>
                    <li className="publication-element">
                        <p className="publication-info">
                            Ehrman, R. N., Tran, N, Trashi, I., Kumari, S.; “Optimization of PhotoThermal Therapy for Enhanced Immunogenic Cell Death” (In Preparation), 2023
                        </p>
                        <a href="/publications">Link to publication</a>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default PublicationsPage;