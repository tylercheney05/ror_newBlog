import { Header, Button, Segment, Image } from 'semantic-ui-react';
import HomeTitle, { HomeSubTitle, MyButton } from '../styledComponents/homeStyles';

export const styles = {
  titleHeader: {
    color: "green",
    background: "grey",
    fontSize: "40px",
  },
  pStyles: {
    color: "red",
    fontSize: "32px",
  }
}
const Home = () => {
  return (
    <>
      <h1 className="">Home Page</h1>
      <Segment inverted>
        <Header as="h1" color="yellow" textAlign="center" inverted size="large">Home Page</Header>
      </Segment>
      <h1 style={{ color: "purple", fontSize: "23px" }}>Home Page</h1>
      <h1 style={ styles.titleHeader }>Home Page</h1>
      <p style={ styles.pStyles }>hello</p>
      <Button basic color="olive">Click</Button>
      <MyButton>Click</MyButton>
      <HomeTitle large>Hello</HomeTitle>
      <HomeTitle>Hello</HomeTitle>
      <HomeSubTitle>World</HomeSubTitle>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
export default Home;