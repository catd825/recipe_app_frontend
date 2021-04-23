import { Button } from '@material-ui/core';

export default function RecipeFilter ({changeHandler}) {
    return (
        <div className="recipe-filter">
            <Button value="all" onClick={changeHandler} color="secondary">View All</Button> 
            <Button value="saved" onClick={changeHandler} color="secondary">Saved</Button>
            <Button value="created"  onClick={changeHandler} color="secondary">Created by Me</Button>
        </div>
    ) 
}