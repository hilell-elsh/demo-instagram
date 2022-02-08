import CircularProgress from '@mui/material/CircularProgress'

export default function LoadingAnimation() {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress />
        </div>
    )
}