import * as React from "react"
import {Card} from "antd";
import MainTemplate from "../templates/MainTemplate";
import Meta from "antd/es/card/Meta";
import img from "../assets/Anime_Girl.png"

interface AnimesPageProps {

}

const AnimesPage: React.FC<AnimesPageProps> = () => {
    return (
        <MainTemplate>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px"}}>
                <Card
                    hoverable
                    style={{maxWidth: "440px"}}
                    cover={<img alt="example" src={img}/>}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                    hoverable
                    style={{maxWidth: "400px"}}
                    cover={<img alt="example" src={img}/>}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                    hoverable
                    style={{maxWidth: "400px"}}
                    cover={<img alt="example" src={img}/>}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
                <Card
                    hoverable
                    style={{maxWidth: "400px"}}
                    cover={<img alt="example" src={img}/>}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            </div>
        </MainTemplate>
    );
}

export default AnimesPage;