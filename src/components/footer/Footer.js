import Container from "@mui/material/Container";
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
    const containerStyles = {
        backgroundColor: '#EDCAFF',
        textAlign: 'center',
        padding: '2rem',
    };

    const iconStyles = {
        color: '#000000'
    };

    const links = [
        <IconButton key="footer-1" color="primary" aria-label="visit stellar life yoga website" style={iconStyles} href="https://stellarlifeyoga.com">
            <LanguageIcon />
        </IconButton>,
        <IconButton key="footer-2" color="primary" aria-label="visit stellar life yoga instagram" style={iconStyles} href="https://instagram.com/stellarlifeyoga">
            <InstagramIcon />
        </IconButton>,
        <IconButton key="footer-3" color="primary" aria-label="visit stellar life yoga facebook" style={iconStyles} href="https://www.facebook.com/stellarlifeyoga">
            <FacebookIcon />
        </IconButton>,
        <IconButton key="footer-4" color="primary" aria-label="visit stellar life yoga youtube" style={iconStyles} href="https://www.youtube.com/@stellarlifeyoga">
            <YouTubeIcon />
        </IconButton>,
        <IconButton key="footer-5" color="primary" aria-label="contact stellar life yoga" style={iconStyles} href="mailto:stellarlifeyogainfo@gmail.com">
            <MailOutlineIcon />
        </IconButton>,
    ];

    const year = new Date().getFullYear();

    return (
        <>
            <Container maxWidth="sm" style={containerStyles} >
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="horizontal contained button group"
                    variant="contained"
                >
                    {links}
                </ButtonGroup>
                <p>&copy; {year} Stellar Life Yoga</p>
                <p>Created by <a href="https://michelle-heatherly.com">Michelle Heatherly</a></p>
            </Container>
        </>
    );
};
export default Footer;