import React, { FC, useRef, useEffect, useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import Hls from 'hls.js';
import Button from 'src/uikit/Button';
import { Props, State } from './types';
import applyZoom from './helpers/applyZoom';
import styles from './style.css';

const Player: FC<Props> = ({ src, style, className }: Props) => {
  const hlsRef = useRef<Hls>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [state, setState] = useState<State>({ isPaused: true, isPending: true });

  const Play = useCallback(async () => {
    try {
      setState({ ...state, isPending: true });
      await videoRef.current.play();
      setState({ ...state, isPending: false, isPaused: false });
    } catch (e) {
      console.error(e);
      setState({ ...state, isPaused: true, isPending: false });
    }
  }, []);

  const Pause = useCallback(async () => {
    try {
      setState({ ...state, isPending: true });
      await videoRef.current.pause();
      setState({ ...state, isPending: false, isPaused: true });
    } catch (e) {
      console.error(e);
      setState({ ...state, isPaused: true, isPending: false });
    }
  }, []);

  useEffect(() => {
    if (Hls.isSupported && hlsRef.current == null) {
      hlsRef.current = new Hls();
      hlsRef.current.loadSource(src);
      hlsRef.current.attachMedia(videoRef.current);
      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, Play);
    }
    applyZoom(containerRef.current, videoRef.current);
  }, []);

  return (
    <div className={`${styles['container']} ${className}`} style={style} ref={containerRef}>
      <Button
        className={styles['play-button']}
        onClick={() => !state.isPending && (state.isPaused ? Play() : Pause())}
      >
        {state.isPaused ? <FormattedMessage id="play" /> : <FormattedMessage id="pause" />}
      </Button>
      <video className={styles['video']} ref={videoRef} autoPlay />
    </div>
  );
};

export default Player;
