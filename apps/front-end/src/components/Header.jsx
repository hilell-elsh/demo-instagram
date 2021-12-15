import styled from 'styled-components'

const HeaderWrapper = styled.div`
    height : 60px;
    width: 100%;
    background-color: #e7e7e7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    


`;

const Logo = styled.img`
    margin: 10px;
 
`;

const SearchForm = styled.input`
    width: 240px;
    height: 36px;
`;


const Icons = styled.div`

`;


export default function Header() {

    return (
        <HeaderWrapper>
            <Logo src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'/>
            <SearchForm />
            <Icons>

            </Icons>
        </HeaderWrapper>
    )
        
}