import audioHitSrc from '../audio/audioHit.mp3';
import audioHurtSrc from '../audio/audioHurt.mp3';
import audioBonusSrc from '../audio/audioBonus.mp3';
import audioLevelSrc from '../audio/level1music.mp3';
import audioLevelCompleteSrc from '../audio/levelcomplete.wav';
import audioJumpSrc from '../audio/jump.mp3';
import audioEnemyJumpSrc from '../audio/enemyjump.mp3';
import audioBowSrc from '../audio/audioBow.mp3';
import audioKatanaSrc from '../audio/audioKatana.mp3';
import audioArrowHitSrc from '../audio/audioArrowHit.mp3';


export const audio = {
  audioHit: new Audio(audioHitSrc),
  audioHurt: new Audio(audioHurtSrc),
  audioBonus: new Audio(audioBonusSrc),
  audioLevel: new Audio(audioLevelSrc),
  audioComplete: new Audio(audioLevelCompleteSrc),
  audioJump: new Audio(audioJumpSrc),
  audioEnemyJump: new Audio(audioEnemyJumpSrc),
  audioBow: new Audio(audioBowSrc),
  audioKatana: new Audio(audioKatanaSrc),
  audioArrow: new Audio(audioArrowHitSrc)
};
