import { type PropsWithChildren, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { type WazaKey, wazaRecord } from "~/data";
import type { HTMLAnchorProps, HTMLBaseProps } from "~/types";

function youtubeLink(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

function embedLink(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

type Props = {
  wazaKey: WazaKey;
};

export function WazaVideoLink({
  wazaKey,
  children,
  ...props
}: HTMLAnchorProps & PropsWithChildren<Props>) {
  const waza = wazaRecord[wazaKey];
  return (
    <a href={youtubeLink(waza.youtubeId)} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export function WazaVideo({ wazaKey, ...props }: HTMLBaseProps & Props) {
  const waza = wazaRecord[wazaKey];

  const { ref, inView } = useInView();
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!seen && inView) {
      setSeen(true);
    }
  }, [seen, inView]);

  return (
    <figure ref={ref} {...props}>
      {seen && (
        <iframe
          src={embedLink(waza.youtubeId)}
          title={`Kodokan YouTube video for '${waza.romaji}'`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </figure>
  );
}
