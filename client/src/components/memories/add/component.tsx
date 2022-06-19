import {Col, Row,} from "antd";
import {Main} from "layouts/main";
import {GetStaticProps} from "next";
import {CardDetail} from "components/memories/cardDetail";
import {Country} from "components/memories/types";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data: Country[] = await response.json()
    return {
        props: {
            data,
        }
    }
}

export const AddMemory = (props: { data: Country[] }) => {

    return <Main>
        <Row>
            <Col offset={6} lg={12}>
               <CardDetail countries={props.data}/>
            </Col>
        </Row>
    </Main>
}
