import styled from 'styled-components';

const Battle = styled.div`
   display: flex;
   width: 100%;
   gap: 60px;
`;

const BattlePick = styled.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   gap: 16px;
`;

const BattlePickSticker = styled.div`
   display: flex;
   position: relative;
   width: 130px;
   height: 130px;
`;

const StickerUnknown = styled.div`
   width: 104px;
   height: 104px;
   background: #192744;
   border-radius: 100%;
`;

export const S = {
   Battle,
   BattlePick,
   BattlePickSticker,
   StickerUnknown,
};
