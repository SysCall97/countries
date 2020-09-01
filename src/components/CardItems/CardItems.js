import React from 'react';
import {
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Card
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const CardItems = (props) => {
    const media = {
        height: 150
    }
    const cardGroup = {
        maxWidth: 345,
        marginBottom: "3%"
    }
    const { name, capital, flag, subregion } = props.country;

    let history = useHistory();
    const handleDetails = (countryName) => {
        const url = `details/${countryName}`;
        history.push(url);
    }

    return (
        <Card style={cardGroup}>
            <CardActionArea>
                <CardMedia
                    style={media}
                    image={flag}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Capital: {capital}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Subregion: {subregion}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary" onClick={() => handleDetails(name)} target="_blank">
                        Learn More about {name}
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardItems;