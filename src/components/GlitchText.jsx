import React, { useEffect, useState } from 'react';

/**
 * GlitchText — renders text with spider-verse style glitch.
 *
 * Modes:
 *  - controlled: parent passes `isBursting` bool to drive glitch externally
 *  - burstMode:  self-manages periodic bursts via setInterval
 *  - default:    continuous glitch via CSS
 *  - enableOnHover: glitch only on hover
 */
const GlitchText = ({
  children,
  // controlled mode
  controlled = false,
  isBursting: externalBursting = false,
  // self-managed burst mode
  burstMode = false,
  burstInterval = 4000,
  burstDuration = 700,
  // other
  speed = 1,
  enableOnHover = false,
}) => {
  const [selfBursting, setSelfBursting] = useState(false);
  const text = typeof children === 'string' ? children : String(children ?? '');

  useEffect(() => {
    if (!burstMode) return;
    const fire = () => {
      setSelfBursting(true);
      setTimeout(() => setSelfBursting(false), burstDuration);
    };
    const initial = setTimeout(fire, 500);
    const interval = setInterval(fire, burstInterval + burstDuration);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, [burstMode, burstInterval, burstDuration]);

  // Resolve which burst state to use
  const isBurstActive = controlled ? externalBursting : selfBursting;

  const glitchClass = burstMode || controlled
    ? isBurstActive ? 'sv-glitch-active' : ''
    : enableOnHover
    ? 'glitch-on-hover'
    : 'glitch-text-continuous';

  return (
    <span
      className={`sv-glitch-base ${glitchClass}`}
      data-text={text}
      style={{ '--glitch-speed': `${speed}` }}
    >
      {text}
      <span className="sv-layer sv-layer-1" aria-hidden="true">{text}</span>
      <span className="sv-layer sv-layer-2" aria-hidden="true">{text}</span>
    </span>
  );
};

export default GlitchText;
