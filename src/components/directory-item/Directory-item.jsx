import './Directory-item.styles'
import {BackgroundImage, Body, DirectoryItemContainer} from "./Directory-item.styles";
import {useNavigate} from "react-router-dom";

const DirectoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigeteHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigeteHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
};

export default DirectoryItem;