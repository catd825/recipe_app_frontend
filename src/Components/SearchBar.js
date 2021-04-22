import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const SearchBar = ({ searchHandler, searchValue }) => {
    return (
        <>
        <TextField style={{width: '280px'}}value={searchValue} onChange={searchHandler} id="outlined-search"  label="search recipes" type="search" variant="outlined"/>
        {/* <input placeholder="search here" value={searchValue} onChange={searchHandler} ></input> */}
        <br/><br/><br/>
        </>
    )
}

export default SearchBar