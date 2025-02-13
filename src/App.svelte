<script>
  import {Router,Route} from 'svelte-routing'
  import Home from './pages/home/Home.svelte';
  import About from './pages/about/About.svelte';
  import Header from './components/header/Header.svelte';
</script>

<Router>
  <Header />
  <Route 
  path='/'
  component={Home}
  />
  <Route 
  path='/about'
  component={About}
  />
</Router>