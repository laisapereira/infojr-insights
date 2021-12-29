import styled from "styled-components";

export const Container = styled.div `
        h1 {
            color: ${props => props.theme.colors.second};
            text-align:center;
            font-size: 3.6rem;
        }


        display:flex;
        flex-direction:column;
        padding: 8rem 10rem;
        gap: 4.9rem;

`

export const ContainerForms = styled.div `
        display:flex;
        gap: 2.5rem;

        



`

export const EachForm = styled.div `
        display:flex;
        flex-direction:column;
        gap:1rem;

        input, textarea, select {
            width: 40vw;
            height: max-content;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: #363636;
            color:#EEEEEE;
        }

        textarea {
            resize:none;
            width:82.5vw;
            height: 20rem;
        }

        option {
            color:#EEEEEE;
        }


`

export const DescrpForms = styled.div ``
export const Buttons = styled.div `

        display:flex;
        justify-content:space-between;
        width: 83vw;


        #cancel, #submit {
            background-color:transparent;
            font-size: 1.6rem;
            padding: 1.5rem 4.5rem;;
            border-radius: 3rem;
            
        }

        #cancel {
            border: 1px solid #FF5555;
            color: #FF5555;

        }

        #submit {
            background-color: ${props => props.theme.colors.primary};
        }

        #cancel:hover {
            cursor:pointer;
            background-color: #FF5555;
            color: white;
        }

        #submit:hover {
            cursor:pointer;
            background-color: ${props => props.theme.colors.second};
        }






`