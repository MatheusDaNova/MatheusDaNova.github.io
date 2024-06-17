import React from "react";

const Frontend = () => {
    return (
   <div className="skills__content">
        <h3 className="skills__title">Frontend </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Html
                            <i class="uil uil-html5 skills__icon"></i>
                        </h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">CSS
                            <i class="uil uil-css3-simple skills__icon"></i>
                        </h3>
                        <span className="skills__level">Intermediário</span>
                        
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Javascript
                            <i class='bx bxl-javascript'></i>
                        </h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div> 

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">React
                            <i class="uil uil-react skills__icon"></i>
                        </h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div> 
                
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">GIT
                            <i class="uil uil-github skills__icon"></i>
                        </h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div> 
            </div>
        </div>
   </div>
    )
}
export default Frontend