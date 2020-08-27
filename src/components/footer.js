import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import colors from "./styles/globalStyles";

const FOOTER = styled.footer`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${colors.black};
    padding: 12px;
    
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
        margin: 0 7px;
        font-size: 14px;
    }

    small {
        display: block;
        font-size: 14px;
        text-align: center;
    }
`;

export default () => {
    return (
        <FOOTER>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/giuseppevigneri/">
                        <FontAwesomeIcon icon={faLinkedin} />&nbsp;
                         <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Geppe1990">
                    <FontAwesomeIcon icon={faGithub} />&nbsp;
                         <span>Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/ioSonoGeppe">
                        <FontAwesomeIcon icon={faTwitter} />&nbsp;
                         <span>Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/geppegram/">
                        <FontAwesomeIcon icon={faInstagram} />&nbsp;
                         <span>Instagram</span>
                    </a>
                </li>
            </ul>
            <small>
                {new Date().getFullYear()} Vigneri Giuseppe Via Prove 16 44021 Codigoro (FE) Italy Tel: +39 346 2364389
            </small>
        </FOOTER>
	)
}