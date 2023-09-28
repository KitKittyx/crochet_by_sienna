import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"

interface CardTemplateProps {
    cardTitle: string
    cardSubTitle: string
    cardDescription: string
    cardImage: string
    cardImageAlt: string
}

const CardTemplate = ({ cardTitle, cardSubTitle, cardDescription, cardImage, cardImageAlt }: CardTemplateProps) => {
    return (
        <>
            <Card sx={{ display: 'flex', marginLeft: 10, marginRight: 10 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 400, height: 250 }}
                    image={cardImage}
                    alt="Live from space album cover"
                />
                <Box>
                    <CardContent>
                        <Typography variant="h5" textAlign='left'>{cardTitle}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" textAlign="left">{cardSubTitle}</Typography>
                        <br />
                        <Typography variant="body1" color="text.secondary" textAlign='left'>{cardDescription}</Typography>
                    </CardContent>
                </Box>
            </Card>
        </>
    )
}

export default CardTemplate