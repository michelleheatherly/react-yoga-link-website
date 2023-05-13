import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

function Header() {

    const title = "Stellar Life Yoga";

    const titleStyles = {
        color: '#EDCAFF',
        fontFamily: "'Corinthia', cursive",
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '0.5rem',
        textShadow: '2px 2px #000000'
    };

    const phrase = "align your mind, body, and spirit for a stellar life";

    const phraseStyles = {
        color: '#F5FFD8',
        fontFamily: "'Copse', serif",
        fontSize: '1rem',
        fontWeight: '400',
        marginBottom: '2rem',
        textShadow: '2px 2px #000000'
    };

    const imageSrc = "images/logo-black-and-purple.PNG";

    const altTxt = "Stellar Life Yoga Logo"

    const backgroundImg = "images/constellations.jpg";

    const containerStyles = {
        backgroundImage: 'url(' + backgroundImg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '2rem',
        borderBottom: '5px solid #EDCAFF'
    };

    const avatarStyles = {
        margin: 'auto',
        border: '2px solid #EDCAFF'
    };

    return (
        <>
            <header>
                <Container maxWidth="sm" style={containerStyles}>
                    <h1 style={titleStyles}>{title}</h1>
                    <h2 style={phraseStyles}>{phrase}</h2>
                    <Avatar alt={altTxt} src={imageSrc} sx={{ width: 100, height: 100 }} style={avatarStyles} />
                </Container>
            </header>
        </>
    );
}
export default Header;