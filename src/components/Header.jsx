import { AppBar , Toolbar , styled , Box, Typography } from "@mui/material";  

//components

import Search from "./header/Search";

const StyleHeader = styled(AppBar)`
background:blue;
height:55px;
`
const Component= styled(Box)`
margin-left:12%;
line-height:0;
`

const SubHeading= styled(Typography)`
font-size:10px;
font-style:italic;

`
const PlusImage= styled('img')({
    width:10,
    height:10,
    marginLeft:4
})


const Header = () => {
    const logoURL= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <StyleHeader>
            <Toolbar>
                <Component>
                    <img src={logoURL} alt="logo" style={{width:65}} />
                    <Box  style={{display:'flex'}}>
                        <SubHeading>Explore &nbsp;
                             <Box component="span" style={{color:'yellow'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search/>
            </Toolbar>
        </StyleHeader>
    )
}
export default Header;