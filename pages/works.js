import { Container, Heading, Grid, Link, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

import { Work } from '../components/data/DataWorks'
import {
  BtnWorkLink,
  Card,
  CardContent,
  Circle,
  DescriptionWork,
  GreenBox,
  NameWork,
  RedBox,
  Tools,
  YellowBox
} from '../components/WorkStyledComponent'
const Works = () => {
  console.log(Work)

  return (
        


    <Layout title="Works">
      <button>
        <Link href='./' style={{textDecoration:'none'}} color="white">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 5.646a.5.5 0 010 .708L3.207 9l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M13.5 2.5a.5.5 0 01.5.5v4a2.5 2.5 0 01-2.5 2.5H3a.5.5 0 010-1h8.5A1.5 1.5 0 0013 7V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg>
      </Link>
      </button>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Mis trabajos
        </Heading>

        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          {Work.map(work => (
            <Card key={work.id}>
              <Tools>
                <Circle>
                  <RedBox></RedBox>
                </Circle>
                <Circle>
                  <YellowBox></YellowBox>
                </Circle>
                <Circle>
                  <GreenBox></GreenBox>
                </Circle>
              </Tools>
              <CardContent>
                <NameWork>{work.name}</NameWork>
                <DescriptionWork>{work.description}</DescriptionWork>

                <BtnWorkLink>
                  <Link
                    href={work.github}
                    target="_blank"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    Repositorio
                  </Link>
                </BtnWorkLink>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
