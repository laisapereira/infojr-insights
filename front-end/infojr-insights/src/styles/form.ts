import styled from "styled-components";

export const Container = styled.div `
        h1 {
            color: ${props => props.theme.colors.second};
            text-align:center;
            font-size: 3.6rem;
        }
        display:flex;
        flex-direction:column;
        align-items:center;
        padding: 8rem 0;
        gap: 4.9rem;
        margin-left:0;


        @media(max-width: 768px) {
            margin-left: 6rem;


            h1 {
                font-size:2.4rem;
                margin-left:-6rem;
            }

            
        }

`

export const ContainerForms = styled.div `
        display:flex;
        gap: 2.5rem;

        @media(max-width: 768px) {
            flex-direction:column;

            
        }
        
`

export const EachForm = styled.div `
        display:flex;
        flex-direction:column;
        margin:0;
        gap:1rem;
        input, textarea, select {
            width: 42vw;
            height: max-content;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: #363636;
            color:#EEEEEE;
        }
        textarea {
            resize:none;
            width:86vw;
            height: 20rem;
        }
        option {
            color:#EEEEEE;
        }

        @media(max-width: 768px) {
            margin-left: -6rem;


            input, select, textarea{
                width: 82vw;
            }

            span {
                display:none;
            }
        }
`

export const DescrpForms = styled.div ``
export const Buttons = styled.div `
        display:flex;
        justify-content:space-between;
        width: 86vw;
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

        @media(max-width: 768px) {
            flex-direction:column;
            gap: 3rem;
            width:auto;
            align-items:center;
            margin-left:-6rem;


            #cancel, #submit {
                width: 300px;
            }

        }

        
`