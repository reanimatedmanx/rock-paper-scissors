import { useSelector } from 'react-redux';
import { GameHeader as UI } from '../../components/GameHeader/GameHeader';
import { selectors } from '../../core/features/game/game';

export const GameHeaderContainer = (): JSX.Element => {
   const score = useSelector(selectors.getScore);

   return <UI score={score} />;
};
