import * as React from "react"
import {Card, Image, message, Space, Spin} from "antd";
import MainTemplate from "../templates/MainTemplate";
import Meta from "antd/es/card/Meta";
import img from "../assets/Anime_Girl.png"
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";
import {useEffect} from "react";
import {IAnime} from "../store/types/animes";
import {useHistory} from "react-router-dom";
import {RoutesConstants} from "../core/Routes/routes.constants";
import axios from "axios";
import Title from "antd/es/typography/Title";

interface AnimesPageProps {

}

const AnimesPage: React.FC<AnimesPageProps> = () => {
    const history = useHistory()
    const {error, loading, animes} = useTypedSelector(
        (state) => state.animes
    );

    const {fetchAnimes} = useActions();

    useEffect(() => {
        fetchAnimes()
    }, []);

    const showAnimePage = (id: string) => {
        history.push(`${RoutesConstants.ANIMES}/${id}`);
    }
    return (
        <MainTemplate>
            <Title style={{marginTop: 20}}>Anime list</Title>
            <Space
                direction={"horizontal"}
                wrap={true}
                align={"center"}
                style={{justifyContent: "space-evenly", marginTop: 20}}
            >
                {error && message.info(`Error: ${error}`)}
                {loading && <Spin size="large"/>}
                {animes.map((anime: IAnime) =>
                    <Card
                        hoverable
                        key={anime.id}
                        style={{maxWidth: "440px", width: 270, height: 270}}
                        cover={
                            <Image
                                style={{backgroundSize: "cover", height: "180px"}}
                                alt={anime.title}
                                src={anime?.image || img}
                            />}
                        onClick={() => showAnimePage(anime.id)}
                    >
                        <Meta title={anime?.title}  key={anime.id}
                              description={anime?.genres}/>
                    </Card>
                )}
            </Space>
        </MainTemplate>
    );
}

export default AnimesPage;