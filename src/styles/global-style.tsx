import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    /* Primary Colors */
    --neon-green-title: hsl(150, 100%, 66%);
    --light-cyan-text: hsl(193, 38%, 86%);

    /* Neutral Colors */
    --grayish-blue-background: hsl(217, 19%, 38%);
    --dark-grayish-blue-card: hsl(217, 19%, 24%);
    --dark-blue-background-shadow: hsl(218, 23%, 16%);    
}

*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

html{
    font-family:'Manrope',sans-serif ;

    @media (max-width: 1080px){
        font-size: 95%;
    }

    @media (max-width: 720){
        font-size: 90%;
    } 
}

body{
    background: var(--dark-blue-background-shadow);
}

button{
    cursor: pointer;
}
`;
