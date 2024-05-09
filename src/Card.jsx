import { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Fade from "@material-ui/core/Fade";
import Avenger from "./assets/test.png";

// backgroundColor: "blue",
import './Card.css'

const styles = () => ({
    card: {
        // width: "146px",
        // height: "177px",

        // position: "relative",
        // overflow: "visible",
        // transition: "transform 0.3s",
        // width: "146px",
        // padding: "2.5px 0px 0px 0px",
        // padding: "6px 6px 0 6px",

        // borderWidth: "0.6px",
        // borderColor: "#EBEBEB",
        // borderStyle: "solid",
    },
    media: {

        width: "134px",
        height: "110px",
        padding: "6px 6px 16px 6px",
    },
});

class RecipeReviewCard extends Component {
    render() {
        // const { classes } = this.props;

        return (
            <>
            
            <div className="card_box">
                <Fade in={true} timeout={1000}>
                    <CardMedia className="card_img" image={Avenger} title="Avenger" />
                </Fade>
                <span className="mentor_tag">MENTOR</span>
                <div className="name_text">
                    <h3>DARLENE <br /> ROBERTSON </h3>
                    <p>OUT IN 2 MIN</p>
                </div>
            </div>

            <div className="card_box">
                <Fade in={true} timeout={1000}>
                    <CardMedia className="card_img" image={Avenger} title="Avenger" />
                </Fade>
                <span className="mentor_tag">MENTOR</span>
                <div className="name_text">
                    <h3>DARLENE <br /> ROBERTSON </h3>
                    <p>OUT IN 2 MIN</p>
                </div>
            </div>
            

            </>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
