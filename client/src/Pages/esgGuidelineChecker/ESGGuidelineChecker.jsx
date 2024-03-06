import React, { useState } from 'react';
import { IoMdAttach } from "react-icons/io";
import Sidebar from '../../Components/sideBar/SBar';
import '../productOptimization/ProductOptimization.css'; // Import CSS file for additional styles
import cogwheel from "../productOptimization/cogwheel-2.svg";


export default function ESGGuidelineChecker() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div id='productOptimization' style={{ display: 'flex', height: '100vh', minHeight: '400px' }} >

            <Sidebar collapsed={collapsed} />
            <main className='main' style={{ width: collapsed ? "100vw" : "77vw", backgroundColor: "#2f3135" }}>
                <div onClick={() => setCollapsed(!collapsed)} style={{ cursor: "pointer", color: "#c1c1c1" }}>
                    {/* <span class="big-icon" style={iconStyles}>{collapsed ? <>&#187;</>: <>&#171;</>}</span> */}
                    <span className={`big-icon ${collapsed ? 'rotate-left' : 'rotate-right'}`} style={{ ...iconStyles, color: "#ccc" }}>{collapsed ? <>&#187;</> : <>&#171;</>}</span>
                </div>
                <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="container-fluid" style={{ height: "96vh" }}>
                        <div className="row" style={{ backgroundColor: "#c1c1c1", height: "15%", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
                            <div className="col" >
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-11">
                                        <h2 style={textStyle} className='pt-4'>ESG Guideline Checker</h2>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className='pt-4'>
                                    <div className="row" >
                                        <div className="col">
                                            <select className="form-select" style={{ cursor: 'pointer' }} aria-label="Default select example">
                                                <option selected style={{}}>Select product to optimize</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col me-5" style={{ position: 'relative' }}>
                                            <select className="form-select" style={{ cursor: 'pointer' }} aria-label="Default select example">
                                                <option selected>Select ESG Guideline</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <h3 style={{ color: "#a39e9e", position: "absolute", bottom: "-14%", left: "-5%" }}>+</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ backgroundColor: "#e6e6e6", height: "70%" }}>
                            <div className="col d-flex flex-column justify-content-center align-items-center" style={{ margin: "0 auto", maxWidth: "800px" }}>
                                <div><img src={cogwheel} style={{ width: "40px" }} alt="cogwheel" /></div>
                                <h3 className='heading3 text-center'>&nbsp; Just select the product and relative ESG<br /> Guidlin to check complience </h3>
                                <p className='main-text'>&nbsp; &nbsp; Here we must include a clear and simple explanation about this functionality, using similar <br /> amount of texts, avoiding too short texts that provide weak information, also avoiding long text.</p>
                            </div>
                        </div>

                        <div className="row" style={{ backgroundColor: "#e6e6e6", height: "15%", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px" }}>
                            <div className="col">
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="col-11">
                                        <div className="input-group mb-3" style={{ border: "1px black solid", borderRadius: "20px" }}>
                                            <button className="input-group-text" id="basic-addon1" style={{ fontSize: "3rem", backgroundColor: "white", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", color: "#c1c1c1", border: "none", borderRight: "none" }}><IoMdAttach /></button>
                                            <input type="text" className="form-control" placeholder="Please type or say what kind of optimizations you are looking for ?" aria-label="Username" aria-describedby="basic-addon1" />
                                            <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "white", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
                                                <button className='btn btnGradient' style={{ backgroundColor: "#0076c3" }}>Submit</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const iconStyles = {
    fontSize: '2em',
    lineHeight: '1em',
    position: 'absolute',
    top: '50%',
    marginLeft: '-3px',
    zIndex: 3,
    transition: 'transform 0.3s ease' /* Add transition for smoother animation */
};

const textStyle = {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 700,
};


