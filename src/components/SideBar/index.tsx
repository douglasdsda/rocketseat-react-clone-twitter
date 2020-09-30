import React from 'react';
import FollowSuggestion from '../FollowSuggestion';
import List from '../List';

 import { Container , SearchWrapper , SearchIcon ,  SearchInput , Body } from './styles';

const SideBar: React.FC = () => {
  return (
     <Container>
       <SearchWrapper>
         <SearchInput placeholder="Buscar no Twitter" />
         <SearchIcon />
       </SearchWrapper>
       <Body>
         <List  
          title="Talvez você curta"
          elements={
            [
               <FollowSuggestion
                  name="Luiz Batanero"
                  nickname="@luizbatanero"
               />,
               <FollowSuggestion
               name="Morales"
               nickname="@morales"
              />,
              <FollowSuggestion
              name="Camila"
              nickname="@camila"
           />
            ]}
         />
         
         <List  
          title="Talvez você curta"
          elements={
            [
              <h1>Test</h1>,
              <h1>Test</h1>,
              <h1>Test</h1>
            ]}
         />
       </Body>
     </Container>
  );
}

export default SideBar;