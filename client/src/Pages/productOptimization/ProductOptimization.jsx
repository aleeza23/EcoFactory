import React, { useState } from 'react';
import { IoMdAttach } from "react-icons/io";
import { Sidebar } from 'react-pro-sidebar';
import colorBar from "./COLORBAR.png";
import ICON_PRODUCT from "./ICON_PRODUCTS.svg";
import ecofactor from "./LOGO_ECOFACTOR.png";
import './ProductOptimization.css'; // Import CSS file for additional styles
import cogwheel from "./cogwheel-2.svg";
export default function ProductOptimization() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div id='productOptimization' style={{ display: 'flex', height: '100vh', minHeight: '400px' }} >

            <Sidebar collapsed={collapsed} style={{ display: collapsed ? "none" : "block", }}>
                {/* side bar content  */}
                {/* Aleeza you have to work here */}
                <div className="container-fluid" style={{ backgroundColor: "#2f3135", height: "100vh" }}>
                    <div className="row">
                        <div className="col-12"><img src={colorBar} alt="" style={{width: "100%"}} /></div>
                    </div>
                    <div className="row">
                        <div className="col px-4 py-2"><img src={ecofactor} alt="" style={{width: "100%"}} /></div>
                    </div>
                    <div className="row px-3">
                        <div className="col " style={{backgroundColor: "#494c51"}}>
                            <h6 className='text-white text-center' >Inventory</h6>
                            <div className="row">
                                <div className="col ms-2 me-1" style={{backgroundColor: "#2f3135", color: "white"}}>
                                    <img src={ICON_PRODUCT} alt="" style={{color: "white"}}/>
                                </div>
                                <div className="col me-1" style={{backgroundColor: "#2f3135", color: "white"}}>...</div>
                                <div className="col me-1" style={{backgroundColor: "#2f3135", color: "white"}}>...</div>
                                <div className="col me-2" style={{backgroundColor: "#2f3135", color: "white"}}>...</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                    </div>
                </div>
            </Sidebar>
            <main style={{ width: "100vw", backgroundColor: "#2f3135" }}>
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
                                        <h2 style={textStyle} className='pt-4'>Product Optimization</h2>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className='pt-4'>
                                    <div className="row">
                                        <div className="col-11">

                                            <select class="form-select" style={{ cursor: 'pointer' }} aria-label="Default select example">
                                                <option selected>Select product to optimize</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ backgroundColor: "#e6e6e6", height: "70%" }}>
                            <div className="col d-flex flex-column justify-content-center align-items-center" style={{ margin: "0 auto", maxWidth: "800px" }}>
                                <div><img src={cogwheel} style={{ width: "40px" }} alt="cogwheel" /></div>
                                <h3 className='heading3'>&nbsp; Just select the product you want to optimize,<br /> and describe below what you want to optimize...</h3>
                                <p>&nbsp; &nbsp; Here we must include a clear and simple explanation about this functionality, using similar <br /> amount of texts, avoiding too short texts that provide weak information, also avoiding long text.</p>
                            </div>
                        </div>

                        <div className="row" style={{ backgroundColor: "#e6e6e6", height: "15%", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px" }}>
                            <div className="col">
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="col-11">
                                        <div class="input-group mb-3" style={{ border: "1px black solid", borderRadius: "20px" }}>
                                            <button class="input-group-text" id="basic-addon1" style={{ fontSize: "3rem", backgroundColor: "white", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", color: "#c1c1c1", border: "none", borderRight: "none" }}><IoMdAttach /></button>
                                            <input type="text" class="form-control" placeholder="Please type or say what kind of optimizations you are looking for ?" aria-label="Username" aria-describedby="basic-addon1" />
                                            <span class="input-group-text" id="basic-addon1" style={{ backgroundColor: "white", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
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
    fontFamily: "'Roboto', sans-serif",
};
