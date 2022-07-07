import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import uimpactifyImg from './works/uimpactify.png'
import habitualImg from './works/habitual.png'
import workConfig from './config/workConfig.json'

function Works() {

return (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                My Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem href="https://github.com/simonha9/U-Impactify" id="U-Impactify" title="U-Impactify" thumbnail={uimpactifyImg} content={workConfig.works.uImpactify}/>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem href="https://github.com/simonha9/Habitual" id="Habitual" title="Habitual" thumbnail={habitualImg} content={workConfig.works.habitual}/>
                </Section>
            </SimpleGrid>
            </Container>
    </Layout>
);
}

export default Works;