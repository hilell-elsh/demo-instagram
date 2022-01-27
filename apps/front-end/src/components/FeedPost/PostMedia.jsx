import CardMedia from '@mui/material/CardMedia'

export default function PostMedia({ contentItem }) {
    return (

        
        <CardMedia 
            component="img"
            image={contentItem.images[0]}
            alt="Paella dish"
        />
    )
}
