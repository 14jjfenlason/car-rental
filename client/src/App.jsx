import './App.css';
import {
  ApolloProvider,
} from '@apollo/client';
import client from './utils/apolloClient';

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
}

export default App;

