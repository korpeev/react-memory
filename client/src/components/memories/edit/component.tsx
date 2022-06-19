import {Main} from "layouts/main";
import {Col, Row} from "antd";
import {CardDetail} from "components/memories/cardDetail";
import {GetServerSideProps} from "next";
import {Country} from "components/memories/types";

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data: Country[] = await response.json()
    return {
        props: {
            data,
        }
    }
}

export const EditMemory = (props: {data: Country[]}) => {
    return <Main>
        <Row>
            <Col offset={6} lg={12}>
                <CardDetail contentEditable countries={props.data}/>
            </Col>
        </Row>
    </Main>
}
