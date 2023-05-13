import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from "@mui/material/Container";

function Links() {

    const containerStyles = {
        backgroundColor: '#000000',
        textAlign: 'center',
        padding: '2rem',
        borderBottom: '5px solid #EDCAFF'
    };

    const outlineStyle = {
        borderColor: '#EDCAFF',
        color: '#EDCAFF',
        marginBottom: '1rem',
        textShadow: 'rgb(180, 18, 233) 0.5px 0.5px'
    };

    const outlineSx = {
        ":hover": {
            bgcolor: "#313131",
        }
    };

    const links = [
        <Button key="one" variant="outlined" style={outlineStyle} sx={outlineSx} href="https://stellarlifeyoga.com">Visit My Website</Button>,
        <Button key="two" variant="outlined" style={outlineStyle} sx={outlineSx} href="mailto:stellarlifeyogainfo@gmail.com">Book Your 1:1 Session</Button>,
        <Button key="three" variant="outlined" style={outlineStyle} sx={outlineSx} href="mailto:stellarlifeyogainfo@gmail.com">Order A Tarot Reading</Button>,
        <Button key="four" variant="outlined" style={outlineStyle} sx={outlineSx} href="https://stellarlifeyoga.com">Online Class Schedule</Button>,
        <Button key="five" variant="outlined" style={outlineStyle} sx={outlineSx} href="https://www.youtube.com/watch?v=nfP_29O77w4">Latest YouTube Video</Button>,
        <Button key="six" variant="outlined" style={outlineStyle} sx={outlineSx} href="https://stellarlifeyoga.com">Latest Blog Post</Button>,
    ];

    return (
        <>
            <Container maxWidth="sm" style={containerStyles} >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    {links}
                </ButtonGroup>
            </Container>
        </>
    );
}
export default Links;