import { Box, Card, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import background from "./dotsbackground.jpeg";
import heartPlushImage from './freePatternPosts/heartPlush/mainImage.webp'
import CardTemplate from "./CardTemplate";

const HomePage = () => {
    return (
        <>
            <Box sx={{ padding: 15, backgroundImage: `url(${background})`, backgroundRepeat: 'repeat', zIndex: 500 }}>
                <Typography textAlign="center" variant="subtitle1">Crochet Plushies and Accessories</Typography>
                <Typography textAlign="center" variant="h2">Crochet By Sienna</Typography>
            </Box>
            <Container>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} textAlign='center'>
                        <CardTemplate
                            cardTitle='No-Sew Heart Plush'
                            cardSubTitle='Crochet Pattern'
                            cardDescription='This heart plush pattern requires no sewing and works up in just over an hour! It is perfect for beginners and experienced looking for a cute and easy plushie!'
                            cardImage={heartPlushImage}
                            cardImageAlt='Finished Heart Plushie'
                        />
                    </Grid>
                </Grid>

            </Container>

        </>
    )
}

export default HomePage;