import {
    Container,
    Heading,
    Box,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import aboutStyles from '../styles/about.module.css'

const about = () => {
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Simon Ha
                    </Heading>
                    <p>Software Developer</p>
                </Box>
            </Box>
            <br />
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Hey there!
                </Heading>
                <Paragraph>I&apos;m a Computer Science student studying at University of Toronto.  I specialize in the comprehensive stream, bridging the gap between data sciences and standard software engineering; fusing my love of solving problems and creating solutions through mathematical analysis.
                </Paragraph>
                <Paragraph>
                    <br />
                </Paragraph>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h3" size="m">
                            <a href="/files/Simon_Ha_Resume.pdf" target="_blank" >
                                Resume
                            </a> 
                            <FontAwesomeIcon className={aboutStyles.pointer} icon={faHandPointLeft} />
                        </Heading>
                        
                    </Box>
                </Box>
            </Section>

            <br />
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Brief Employment History:
                </Heading>
                <br />
                <Paragraph>
                    <Heading as='h6' size='xs'>CloudFlare [May 2023 - Aug 2023]</Heading>
                    SWE Intern at CloudFlare, Workers team.
                    <br />
                    <u>Skills learned</u>: [CICD] Docker, Kubernetes, cdk8s; [backend] Go;  [frontend] React, JS; [system design] CDN, caching, distributed systems, latency, etc. ; [observability] Prometheus, Grafana, etc. ;

                </Paragraph>
                <br />
                <Paragraph>
                    <Heading as='h6' size='xs'>BlackBerry Limited [May 2021 - Aug 2022]</Heading>
                    Worked as a full-stack developer in the OneCloud Infrastructure team providing fundamental services used throughout all BlackBerry UEM/UES products.
                    <br />
                    <u>Skills learned</u>: [backend] Java, Spring/Spring-Boot, LDAP queries, Selenium, Oracle;  [frontend] AngularJS, React, JS

                </Paragraph>
                <br />
                <Paragraph>
                    <Heading as='h6' size='xs'>DayStar Limited [May 2020 - Aug 2020]</Heading>
                    Developed an insurance portal for commercial property products.
                    <br />
                    <u>Skills learned</u>: [backend] Java, Stored Procs & MyBatis;  [frontend] AngularJS, React, JS
                </Paragraph>
                <br />
                <Paragraph>
                    <Heading as='h6' size='xs'>Genworth Financial Canada (Now Sagen) [May 2019 - Aug 2019]</Heading>
                    Revamped old mortgage insurance application into Internet-facing online portal.
                    <br />
                    <u>Skills learned</u>: [backend] Java, Spring/Spring-Boot, Hibernate, PostgreSQL;
                </Paragraph>
            </Section>
        </Container>
    )
}

export default about