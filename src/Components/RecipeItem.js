import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


export default function RecipeItem ({ recipes }) {

    const classes = useStyles();
    return(
        <> 
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={recipes.img_url}
              title={recipes.title}
              style={{width:'400px'}}

            />
            <Link key={recipes.id} href={'/recipes/' + recipes.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {recipes.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {recipes.description}
              </Typography>
            </CardContent>
            </Link>
          </CardActionArea>
          
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button> */}
            <Button size="small" color="primary">
                <Link key={recipes.id} href={'/recipes/' + recipes.id}>{recipes.title}</Link>
            </Button>
          </CardActions>
        </Card>
      </>
    )
}

