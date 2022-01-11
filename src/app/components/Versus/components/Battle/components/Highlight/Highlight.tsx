import { S } from './Highlight.styled';
import { Animation } from './../../../../../../shared/components/Animation';

export const Highlight = (): JSX.Element => (
   <S.Highlight>
      <Animation duration={0.2} animation="fadeIn">
         <S.HighlightRing offset={30} width={15} color="#fff" opacity={0.15} />
      </Animation>
      <Animation duration={0.4} animation="fadeIn">
         <S.HighlightRing offset={86} width={28} color="#fff" opacity={0.08} />
      </Animation>
      <Animation duration={1} animation="fadeIn">
         <S.HighlightRing offset={150} width={32} color="#fff" opacity={0.05} />
      </Animation>
   </S.Highlight>
);
