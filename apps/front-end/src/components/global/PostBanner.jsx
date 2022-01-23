import styled from 'styled-components'
// import { getPostData } from '../../services/post-data'

const Banner = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: rgba(0, 0, 0, 0.3);
    color: rgb(255, 255, 255);
    z-index: 500;
    cursor: pointer;
`
const BannerItem = styled.div`
    display: flex;
    align-items: baseline;

    & i {
        margin-right: 0.5rem;
    }
`

export default function PostBanner() {
    // const data = getPostData(postId)

    return (
        <Banner>
            <BannerItem>
                <i className="far fa-heart" />
                <p>69</p>
                {/* {data.likes.count} */}
            </BannerItem>
            <BannerItem>
                <i className="far fa-comment"></i>
                <p>5</p>
                {/* {data.comments.count} */}
            </BannerItem>
        </Banner>
    )
}