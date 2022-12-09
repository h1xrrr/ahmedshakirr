import React, { useState } from 'react'
import { dataImage } from '../../plugin/plugin'
import Modal from 'react-modal';
import { SVG_Custom1, SVG_Custom2, SVG_Custom3, SVG_Custom4, SVG_Custom5, SVG_Custom6 } from '../../plugin/svg';
export default function Service({ ActiveIndex }) {

    const [isOpen7, setIsOpen7] = useState(false);
    const [modalContent, setModalContent] = useState({});

    function toggleModalFour() {
        setIsOpen7(!isOpen7);
    }
    const service = [
        {
            img: "img/news/1.jpg",
            svg: <SVG_Custom1 />,
            text: " install and maintain data servers and network equipment.monitoring the day-to-day performance of servers, maintaining an optimally controlled environment for servers, and troubleshooting network and server problems.",
            date: "August 9, 2021",
            title: "Data Center",
            text1: " install and maintain data servers and network equipment. Their duties include monitoring the day-to-day performance of servers, maintaining an optimally controlled environment for servers, and troubleshooting network and server problems.",
            text2: "Data center services include:",
            text3: "Infrastructure Cooling system Network devices, Cabling Power & UPS."
        },
        {
            img: "img/news/2.jpg",
            svg: <SVG_Custom2 />,
            text: "In order to build extremely fast system time response, you need a perfect design and implementation for network components.",
            date: "August 9, 2021",
            title: "Networking",
            text1: "networking services include:.",
            text2: "  Core & Distribution Switches ,Network Infrastructure, Wireless & Mobility, Network Analysis, Network Management.",
            text3: ""
        },
        {
            img: "img/news/3.jpg",
            svg: <SVG_Custom3 />,
            text: "With the next generation of IT technology, it becomes very crucial to working under virtualization technology that due to centralized management and coast effective.",
            date: "August 9, 2021",
            title: "Virtualization",
            text1: "Virtualization area consist of:.",
            text2: "Data center Virtualization, Network Virtualization, Network devices, Storage Virtualization .",
            text3: ""
        },
        {
            img: "img/news/4.jpg",
            svg: <SVG_Custom4 />,
            text: "The dramatic and limitless speed of technology development, have increased the sensitivity of the information. That leads to create and establish a concrete information security solution to protect the customer asset.",
            date: "August 9, 2021",
            title: "Information Security",
            text1: "Keys to provides a complete information security system:.",
            text2: "Firewall, Network Security, VPN.",
        },
    ]
    return (
        <>
            {/* <!-- NEWS --> */}
            <div className={ActiveIndex === 7 ? "cavani_tm_section active animated flipInX" : "cavani_tm_section hidden animated flipOutX"} id="news_">
            <div className="section_inner">
                    <div className="cavani_tm_service">
                        <div className="cavani_tm_title">
                            <span>Services</span>
                        </div>
                        <div className="service_list">
                            <ul>
                                {service.map((item, i) => (
                                    <li key={i}>
                                        <div className="list_inner" onClick={toggleModalFour}>
                                            {item.svg}
                                            <h3 className="title" onClick={toggleModalFour}>{item.title}</h3>
                                            <p className="text">{item.text}</p>
                                            <a className="cavani_tm_full_link" href="#" onClick={() => setModalContent(item)} />
                                            <img className="popup_service_image" src={item.img} alt="" />
                                            <div className="service_hidden_details">
                                                <div className="service_popup_informations">
                                                    <div className="descriptions">
                                                        <p>{item.text1}</p>
                                                        <p>{item.text2}</p>
                                                        <p>{item.text3}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- NEWS --> */}

            {modalContent && (
                <Modal
                    isOpen={isOpen7}
                    onRequestClose={toggleModalFour}
                    contentLabel="My dialog"
                    className="mymodal"
                    overlayClassName="myoverlay"
                    closeTimeoutMS={300}
                    openTimeoutMS={300}
                >
                    <div className="cavani_tm_modalbox opened">
                        <div className="box_inner">
                            <div className="close" onClick={toggleModalFour} >
                                <a href="#"><i className="icon-cancel"></i></a>
                            </div>
                            <div className="description_wrap">
                                <div className="service_popup_informations">
                                    <div className="image">
                                        <img src="img/thumbs/4-2.jpg" alt="" />
                                        <div className="main" data-img-url="img/news/1.jpg" style={{ backgroundImage: `url(${modalContent.img})` }} />
                                    </div>
                                    <div className="details">
                                        <span>{modalContent.tag}</span>
                                        <h3>{modalContent.title}</h3>
                                    </div>
                                    <div className="descriptions">
                                        <p>{modalContent.text1}</p>
                                        <p>{modalContent.text2}</p>
                                        <p>{modalContent.text3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}