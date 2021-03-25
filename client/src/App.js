import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Blogs from './components/blogs/Blogs';
import { Container } from 'semantic-ui-react';
const App = () => (
  <>
    <Navbar /> 
    <Container>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;