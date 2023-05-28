import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Card from '~/components/Card/Card';
import styled from './homepage.module.css';

export default component$(() => {
  return (
    <>
      <main class={styled.main}>
        <Card />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Memo Forge',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
