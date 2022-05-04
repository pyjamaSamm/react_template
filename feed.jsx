import {
    Avatar,
    makeStyles,
    Button,
    Typography,
    Container, CardActions, CardContent, Card, CardMedia, CardActionArea,
} from "@material-ui/core";
import { useState, React } from "react";
import SsidChartIcon from '@mui/icons-material/SsidChart';



const drawerWidth = 260
const useStyles = makeStyles((theme) => ({
    main: {
        position: "relative",
        left: `calc(${drawerWidth}px - 6%)`,
        top: "5%",
        backgroundColor: theme.palette.background.paper,
    },
    firstCard: {
        width: "50%",
        marginLeft: `calc(${drawerWidth}px - 18%)`,
        backgroundColor: "#C1E1C1",
    },
    firstinside: {
        paddingTop: "10%",
        paddingLeft: "15%",
    },
    firstdiv: {
        display: "flex",
    },
    first_sec: {
        width: "35%",
        marginLeft: `calc(${drawerWidth}px - 20%)`,
    },
    media: {
        width: "30%",
        marginLeft: "55%",
        marginTop: "10%",
    },
    sec_first: {
        width: "20%",
        marginLeft: `calc(${drawerWidth}px - 9.5%)`,
    },
    sec_sec: {
        width: "32%",
        marginLeft: `calc(${drawerWidth}px - 17%)`,
        backgroundColor: "#000",
    },
    secCard: {
        width: "45%",
        marginLeft: `calc(${drawerWidth}px - 40%)`,
    },
    third: {
        width: "20%",
        marginLeft: `calc(${drawerWidth}px - 16.5%)`,
        boxShadow: "40%",
    },
}));


const Feed = () => {

    const [open] = useState(false);
    const classes = useStyles({ open });
    return (
        <div className={classes.main}>
            <br></br>
            <Container className={classes.firstdiv}>

                {/* first card in green */}

                <Card className={classes.firstCard} style={{ display: "flex", flexDirection: 'row' }}>
                    <div>
                        <CardContent className={classes.firstinside}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Welcome back,
                            </Typography>
                            <Typography variant="h5" component="div">
                                Minimal UI!
                            </Typography>
                            <Typography variant="body3">
                                If you are going to use a passage of Lorem ipsum, you

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="success" style={{ marginLeft: "15%", marginBottom: "10%", backgroundColor: "#4e9c4e", }}>Go Now</Button>
                        </CardActions>
                    </div>
                    <div>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            image="https://pngimg.com/uploads/github/github_PNG3.png"
                            alt=""
                        />
                    </div>
                </Card>

                {/* first card in green */}

                {/* next to green card */}
                <Card className={classes.first_sec}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://picsum.photos/400/300"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perferendis
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
            <br>
            </br>
            <br>
            </br>
            <div style={{ display: "flex", flexDirection: 'row' }}>

                {/* next to green card  ends*/}

                {/* second row cards */}
                <Card className={classes.sec_first} elevation={6}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://www.kindpng.com/picc/m/170-1708478_a-pie-chart-is-a-circle-divided-into.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Data Sets
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis sit doloribus, officiis doloremque corrupti iste, facere error quasi optio nemo ipsa aut cumque soluta quisquam eius suscipit. Voluptatibus, quos?
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card className={classes.sec_sec} elevation={6}>
                    <CardActionArea>

                        <Avatar
                            alt="Ted talk"
                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                        />

                        <CardContent>
                            <CardMedia
                                component="img"
                                height="240"
                                image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                                alt="Nicola Sturgeon on a TED talk stage"
                            />
                            <Typography variant="body2" color="text.secondary" component="p" style={{ color: "#fff", paddingTop: "3%" }}>
                                {
                                    "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success"
                                }
                            </Typography>
                            <Button variant="contained" color="secondary" style={{ marginLeft: "70%" }}>
                                Watch Now
                            </Button>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className={classes.third} elevation={6}>
                    <CardContent>
                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                            Total Active Users
                        </Typography>
                        <br></br>
                        <div style={{ color: "#8be28b", display: "flex" }}>
                            <SsidChartIcon />
                            <Typography variant="h6" style={{ marginLeft: "2%" }}>+2.6%</Typography>

                        </div>
                        <br></br>

                        <CardMedia
                            component="img"
                            height="170"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Graph_Flat_Icon.svg/1024px-Graph_Flat_Icon.svg.png"
                            alt="Nicola Sturgeon on a TED talk stage"
                        />
                        <br></br>
                        <Typography variant="h3" style={{ fontWeight: 'bold' }}>
                            18,765
                        </Typography>
                    </CardContent>
                </Card>
                <br></br>


            </div>
        </div>



    );
};

export default Feed;