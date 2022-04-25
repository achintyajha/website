import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { TopTracks } from 'lib/types';

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  if (data) {
    return (
      <>
        {data.tracks.map((track) => (
          <a className="border-none" href={track.songUrl} key={track.songUrl}>
            <div
              key={track.title}
              className="mt-5 rounded p-4 flex not-prose text-base font-normal transition hover:drop-shadow-md border-none"
            >
              <img className="w-16 h-16 rounded" src={track.imageUrl} alt="" />
              <p className="ml-5 overflow-scroll whitespace-nowrap">
                <p>{track.title}</p>
                <span className="text-gray-700 dark:text-zinc-400">
                  {track.artist}
                </span>
              </p>
            </div>
          </a>
        ))}
      </>
    );
  }
  return <div className="p-5 border rounded-xl"></div>;
}