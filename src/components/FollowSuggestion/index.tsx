import React from 'react';

import { Container } from './styles';
interface Props {
  name: string;
  nickname: string;
}
const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
return <Container>{name}</Container>;
};

export default FollowSuggestion;
