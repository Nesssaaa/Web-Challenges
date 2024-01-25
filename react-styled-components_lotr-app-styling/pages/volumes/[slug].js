import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled, { css } from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const ColouredBox = styled.div`
    ${({ $color }) =>
      $color &&
      css`
        background-color: ${color};
        color: white;
        display: flex;
        gap: 2rem;
        text-align: center;
        padding: 2rem 0 2rem 0;
        margin: 2rem 0 2rem 0;
      `};
  `;

  const ListItem = styled.li`
    ${({ $listItem }) =>
      $listItem &&
      css`
        list-style: none;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 2rem 0 2rem 0;
      `};
  `;

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>

      <h1>{title}</h1>
      <p>{description}</p>
      <ColouredBox $color={color}>
        <ul>
          {books.map(({ ordinal, title }) => (
            <ListItem $listItem key={title}>
              {ordinal}: <strong>{title}</strong>
            </ListItem>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </ColouredBox>
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
